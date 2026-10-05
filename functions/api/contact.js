// Cloudflare Pages Function: POST /api/contact
// Sends portfolio enquiries through Resend. Set RESEND_API_KEY (secret) in the
// Pages project settings; CONTACT_FROM and CONTACT_TO are optional overrides.
const DEFAULT_FROM = "Portfolio enquiries <enquiries@mercyogbenjuwaikya.com>";
const DEFAULT_TO = "ogbenjuwamercyonyoibo@gmail.com";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, service: 120, details: 5000 };

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Bots fill the hidden "website" field; pretend it worked.
  if (data.website) return json({ ok: true });

  const fields = {};
  for (const key of Object.keys(LIMITS)) {
    const value = typeof data[key] === "string" ? data[key].trim() : "";
    if (!value || value.length > LIMITS[key]) return json({ error: "Please fill in every field." }, 400);
    fields[key] = value;
  }
  if (!EMAIL.test(fields.email)) return json({ error: "Please enter a valid email address." }, 400);

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
