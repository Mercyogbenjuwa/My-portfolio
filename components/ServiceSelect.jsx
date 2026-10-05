import { useEffect, useRef, useState } from "react";
import styles from "../styles/ServiceSelect.module.css";

// Searchable single-select that submits its value through a hidden input.
export default function ServiceSelect({ name, options, placeholder, invalid, onChange }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const search = useRef(null);
  const trigger = useRef(null);

  const matches = options.filter((option) => option.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    if (!open) return undefined;
    search.current?.focus();
    const away = (event) => !root.current?.contains(event.target) && setOpen(false);
    document.addEventListener("mousedown", away);
    return () => document.removeEventListener("mousedown", away);
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const choose = (option) => {
    setValue(option);
    setOpen(false);
    setQuery("");
    onChange?.(option);
    trigger.current?.focus();
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowDown") { event.preventDefault(); setActive((i) => Math.min(i + 1, matches.length - 1)); }
    else if (event.key === "ArrowUp") { event.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (event.key === "Enter") { event.preventDefault(); if (matches[active]) choose(matches[active]); }
    else if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
  };

  return (
    <div className={styles.root} ref={root}>
      <input type="hidden" name={name} value={value} />
      <button
        ref={trigger}
        type="button"
        className={`${styles.trigger} ${open ? styles.open : ""} ${invalid ? styles.invalid : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => event.key === "ArrowDown" && (event.preventDefault(), setOpen(true))}
      >
        <span className={value ? "" : styles.placeholder}>{value || placeholder}</span>
        <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 7.5 5 5 5-5" /></svg>
      </button>
      {open && (
        <div className={styles.panel}>
          <div className={styles.search}>
            <svg aria-hidden="true" viewBox="0 0 20 20"><circle cx="9" cy="9" r="5.5" /><path d="m13.5 13.5 3 3" /></svg>
            <input ref={search} type="text" value={query} placeholder="Search services" aria-label="Search services" onChange={(event) => setQuery(event.target.value)} onKeyDown={onKeyDown} />
          </div>
          <ul role="listbox" aria-label={placeholder}>
            {matches.map((option, index) => (
              <li
                key={option}
                role="option"
                aria-selected={option === value}
                className={`${index === active ? styles.active : ""} ${option === value ? styles.selected : ""}`}
                onMouseEnter={() => setActive(index)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(option)}
              >
                {option}
                {option === value && <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 10.5 3 3 7-7" /></svg>}
              </li>
            ))}
            {!matches.length && <li className={styles.empty}>No matching service</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
