// Cloudflare Pages Function: POST /api/contact
// Sends portfolio enquiries through Resend. Set RESEND_API_KEY (secret) in the
// Pages project settings; CONTACT_FROM and CONTACT_TO are optional overrides.
const DEFAULT_FROM = "Portfolio enquiries <enquiries@mercyogbenjuwaikya.com>";
const DEFAULT_TO = "ogbenjuwamercyonyoibo@gmail.com";
const EMAIL = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[^\s@,;<>"]+$/;
const LIMITS = { name: 120, email: 200, service: 120, details: 5000 };
const MAX_BODY = 16 * 1024;
// Must match the options on the contact page.
const SERVICES = new Set(["Product strategy & delivery", "Web and mobile applications", "Backend systems & APIs", "ERP and workflow automation", "Cloud, DevOps & monitoring", "Technical product consulting"]);
const ALLOWED_HOSTS = new Set(["mercyogbenjuwaikya.com", "www.mercyogbenjuwaikya.com"]);

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

// Strip control characters (including line breaks) from single-line fields.
const singleLine = (value) => value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim();

const sameSite = (request) => {
  const origin = request.headers.get("Origin");
  if (!origin) return true;
  try {
    const { hostname } = new URL(origin);
    return ALLOWED_HOSTS.has(hostname) || hostname.endsWith("mercy-ogbenjuwa-portfolio.pages.dev") || hostname === new URL(request.url).hostname;
  } catch {
    return false;
  }
};

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

export async function onRequestPost({ request, env }) {
  if (!sameSite(request)) return json({ error: "Forbidden." }, 403);
  if (Number(request.headers.get("Content-Length") || 0) > MAX_BODY) return json({ error: "Message is too long." }, 413);

  let data;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return json({ error: "Message is too long." }, 413);
    data = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (!data || typeof data !== "object") return json({ error: "Invalid request." }, 400);

  // Bots fill the hidden "website" field; pretend it worked.
  if (data.website) return json({ ok: true });

  const fields = {};
  for (const key of Object.keys(LIMITS)) {
    const text = typeof data[key] === "string" ? data[key] : "";
    const value = key === "details" ? text.trim() : singleLine(text);
    if (!value || value.length > LIMITS[key]) return json({ error: "Please fill in every field." }, 400);
    fields[key] = value;
  }
  if (!EMAIL.test(fields.email)) return json({ error: "Please enter a valid email address." }, 400);
  if (!SERVICES.has(fields.service)) return json({ error: "Please choose a service from the list." }, 400);

  if (!env.RESEND_API_KEY) return json({ error: "Email is not set up yet." }, 503);

  const { name, email, service, details } = fields;
  const html = `
    <h2 style="margin:0 0 16px;font-family:sans-serif;color:#7a1f35">New project enquiry</h2>
    <p style="font-family:sans-serif"><strong>Name:</strong> ${escapeHtml(name)}<br>
    <strong>Email:</strong> ${escapeHtml(email)}<br>
    <strong>Service:</strong> ${escapeHtml(service)}</p>
    <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(details)}</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM || DEFAULT_FROM,
      to: [env.CONTACT_TO || DEFAULT_TO],
      reply_to: email,
      subject: `${service} enquiry from ${name}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${details}`,
    }),
  });

  if (!response.ok) return json({ error: "Your message couldn’t be sent. Please email me directly." }, 502);
  return json({ ok: true });
}

export const onRequest = () => json({ error: "Method not allowed." }, 405);
