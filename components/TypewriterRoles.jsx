import { useEffect, useState } from "react";

const roles = ["Founder, Juwa Tech", "Product Manager", "Senior Product Engineer", "Software Engineer"];

export default function TypewriterRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const complete = characterCount === role.length;
    const empty = characterCount === 0;
    const delay = complete && !deleting ? 1400 : deleting ? 40 : 75;
    const timer = setTimeout(() => {
      if (complete && !deleting) setDeleting(true);
      else if (empty && deleting) {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      } else setCharacterCount((current) => current + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [characterCount, deleting, roleIndex]);

  return <span className="typewriter" aria-label={roles.join(", ")}><span aria-hidden="true">{roles[roleIndex].slice(0, characterCount)}</span><i aria-hidden="true" /></span>;
}
