import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();
function useTheme() { return useContext(ThemeContext); }

const themes = {
  dark: {
    bg: "#0a0a0f",
    bgCard: "#16161f",
    bgNav: "rgba(10,10,15,0.92)",
    bgDrawer: "rgba(10,10,15,0.97)",
    border: "rgba(124,109,250,0.2)",
    borderActive: "rgba(124,109,250,0.5)",
    text: "#f0eeff",
    textMuted: "#8885aa",
    textNav: "#8885aa",
    textNavMobile: "#c0bddd",
    accent: "#7c6dfa",
    accentGlow: "rgba(124,109,250,0.15)",
    accentGridLine: "rgba(124,109,250,0.06)",
    accentCardBg: "rgba(124,109,250,0.08)",
    accentCardBdr: "rgba(124,109,250,0.3)",
    accentCardIcon: "rgba(124,109,250,0.1)",
    accentCardIconBdr: "rgba(124,109,250,0.2)",
    green: "#6dfacd",
    greenBg: "rgba(109,250,205,0.08)",
    greenBdr: "rgba(109,250,205,0.3)",
    pink: "#fa6d9b",
    badgeBorder: "1px solid rgba(109,250,205,0.3)",
    heroBtnBorder: "1px solid rgba(124,109,250,0.3)",
    sectionDivider: "rgba(124,109,250,0.15)",
    tagColors: {
      purple: { bg: "rgba(124,109,250,0.12)", border: "rgba(124,109,250,0.3)", text: "#a99dfc" },
      green: { bg: "rgba(109,250,205,0.08)", border: "rgba(109,250,205,0.25)", text: "#6dfacd" },
      pink: { bg: "rgba(250,109,155,0.08)", border: "rgba(250,109,155,0.25)", text: "#fa6d9b" },
      amber: { bg: "rgba(250,185,50,0.08)", border: "rgba(250,185,50,0.25)", text: "#fab932" },
      teal: { bg: "rgba(50,210,255,0.08)", border: "rgba(50,210,255,0.25)", text: "#32d2ff" },
      orange: { bg: "rgba(255,140,0,0.08)", border: "rgba(255,140,0,0.3)", text: "#ff8c00" },
    },
  },
  light: {
    bg: "#f5f4ff",
    bgCard: "#ffffff",
    bgNav: "rgba(245,244,255,0.92)",
    bgDrawer: "rgba(245,244,255,0.98)",
    border: "rgba(124,109,250,0.18)",
    borderActive: "rgba(124,109,250,0.55)",
    text: "#18162e",
    textMuted: "#6b6880",
    textNav: "#5a5770",
    textNavMobile: "#3e3a5c",
    accent: "#6254e8",
    accentGlow: "rgba(124,109,250,0.10)",
    accentGridLine: "rgba(124,109,250,0.07)",
    accentCardBg: "rgba(124,109,250,0.06)",
    accentCardBdr: "rgba(124,109,250,0.25)",
    accentCardIcon: "rgba(124,109,250,0.08)",
    accentCardIconBdr: "rgba(124,109,250,0.18)",
    green: "#1da67a",
    greenBg: "rgba(29,166,122,0.08)",
    greenBdr: "rgba(29,166,122,0.3)",
    pink: "#d63d72",
    badgeBorder: "1px solid rgba(29,166,122,0.35)",
    heroBtnBorder: "1px solid rgba(98,84,232,0.3)",
    sectionDivider: "rgba(124,109,250,0.12)",
    tagColors: {
      purple: { bg: "rgba(98,84,232,0.08)", border: "rgba(98,84,232,0.25)", text: "#5042c9" },
      green: { bg: "rgba(29,166,122,0.07)", border: "rgba(29,166,122,0.22)", text: "#14845f" },
      pink: { bg: "rgba(214,61,114,0.07)", border: "rgba(214,61,114,0.22)", text: "#b82d5e" },
      amber: { bg: "rgba(180,120,0,0.07)", border: "rgba(180,120,0,0.22)", text: "#9a6600" },
      teal: { bg: "rgba(0,170,210,0.07)", border: "rgba(0,170,210,0.22)", text: "#007ea8" },
      orange: { bg: "rgba(200,100,0,0.07)", border: "rgba(200,100,0,0.22)", text: "#b35900" },
    },
  },
};

const data = {
  name: "Anjali Sharma",
  email: "anjaliiisharma007@gmail.com",
  resume: "https://drive.google.com/file/d/1CExBb064bZxALp1yjulk8FTOj--bgp3i/view?usp=sharing",
  about: "Backend-focused engineer with 1 year of experience specializing in Node.js. I build scalable RESTful APIs, real-time systems, and production-ready platforms with clean, maintainable code.",
  skills: [
    { category: "Languages", color: "purple", items: ["JavaScript", "Python", "C++"] },
    { category: "Backend & APIs", color: "green", items: ["Node.js", "Express.js", "REST API", "Socket.IO", "WebSockets"] },
    { category: "Databases", color: "pink", items: ["MongoDB", "MySQL"] },
    { category: "Auth, Security & Integrations", color: "amber", items: ["JWT", "RBAC", "Razorpay", "FCM", "AWS S3,EC2", "Firebase", "Shiprocket API", "WebRTC"] },
    { category: "Tools & Platforms", color: "teal", items: ["Git", "GitHub", "Postman"] },
    { category: "Frontend", color: "orange", items: ["HTML", "CSS", "React.js"] },
  ],
  experience: [
    {
      title: "Software Engineer", company: "Possesive Panda", location: "Noida, India", period: "Mar 2025 – Present",
      bullets: [
        "Designed and developed an E-Commerce backend platform using Node.js & Express, managing end-to-end order lifecycle with JWT auth and RBAC.",
        "Integrated Razorpay payments with webhook verification; implemented coupons, invoicing, and order tracking to streamline checkout.",
        "Built inventory, warehouse, and fulfillment systems with Shiprocket integration for automated shipping and real-time tracking.",
        "Developed EdTech backend (Learning Saint) with real-time notifications, automated reminders, and optimized MongoDB performance.",
      ],
    },
    {
      title: "Backend Developer Intern (Python, Django)", company: "Must See New York Global", location: "Remote, New York", period: "Feb – Jun 2024",
      bullets: [
        "Built an AI-driven content automation system using LLM APIs to generate tourism-related content.",
        "Designed, developed, and documented secure RESTful CRUD APIs for an admin dashboard managing articles and editorial workflows.",
      ],
    },
  ],
  projects: [
    { name: "Vibgyor", subtitle: "Social & Dating Application", emoji: "💜", color: "#fa6d9b", link: "https://play.google.com/store/apps/details?id=com.vibgyor.possesivepanda", linkLabel: "Play Store", desc: "Scalable backend for a real-time social and dating platform. Optimized profile/matching APIs and built end-to-end real-time chat via Socket.IO.", tech: ["Node.js", "Socket.IO", "MongoDB", "REST API"] },
    { name: "Recurval", subtitle: "AI-Driven Interview Platform", emoji: "🤖", color: "#6dfacd", link: "https://recurvall.vercel.app/", linkLabel: "Live Demo", desc: "AI-powered recruitment platform automating technical interviews. Integrated Meta Llama for assessment, WebRTC for video interviews, and email-based result delivery.", tech: ["Node.js", "WebRTC", "Meta Llama API"] },
  ],
  awards: [
    { icon: "🏆", title: "Winner — Codédex Summer Hackathon", desc: "Secured top position in a global hackathon competition, competing against developers worldwide." },
    { icon: "🌍", title: "Hacktoberfest 2024 Contributor", desc: "Successfully raised and merged multiple open-source pull requests, contributing to the global dev community." },
    { icon: "🔬", title: "Selected for Academic Research Program", desc: "Chosen for a final-year NLP research project at Dayalbagh Educational Institute, Agra." },
  ],
};

const roles = ["Building RESTful APIs", "Scaling Backend Systems", "Node.js Engineer", "Real-time Systems Dev", "Full-stack Problem Solver"];

function useTypewriter(words, typingSpeed = 95, deletingSpeed = 50, pauseMs = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let t;
    if (!deleting) {
      if (charIdx < current.length) t = setTimeout(() => setCharIdx(c => c + 1), typingSpeed);
      else t = setTimeout(() => setDeleting(true), pauseMs);
    } else {
      if (charIdx > 0) t = setTimeout(() => setCharIdx(c => c - 1), deletingSpeed);
      else { setDeleting(false); setWordIdx(w => (w + 1) % words.length); }
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);
  return display;
}

// Simple SVG sun icon
function SunIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// Simple SVG moon icon
function MoonIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ThemeToggle() {
  const { mode, toggle, t } = useTheme();
  return (
    <button
      onClick={toggle}
      title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: t.accentCardBg,
        border: `1px solid ${t.border}`,
        borderRadius: 8,
        color: t.accent,
        cursor: "pointer",
        width: 36, height: 36,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.2s, border-color 0.2s",
        flexShrink: 0,
      }}
    >
      {mode === "dark" ? <SunIcon color={t.accent} /> : <MoonIcon color={t.accent} />}
    </button>
  );
}

function NavBar({ scrollTo }) {
  const { t } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["about", "experience", "projects", "resume", "awards", "contact"];

  return (
    <>
      <style>{`
        .nav-links-desktop { display: flex; gap: 1.4rem; align-items: center; }
        .hamburger-btn { display: none !important; }
        @media (max-width: 660px) {
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0.85rem 2rem",
        background: t.bgNav,
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${t.border}`,
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <div onClick={() => scrollTo("hero")} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.95rem", color: t.accent, letterSpacing: "0.1em", cursor: "pointer" }}>
          anjali.dev
        </div>

        <div className="nav-links-desktop">
          {navItems.map((s) => (
            <button key={s} onClick={() => scrollTo(s)} style={{ color: t.textNav, background: "none", border: "none", fontFamily: "'Sora', sans-serif", fontSize: "0.84rem", cursor: "pointer", letterSpacing: "0.04em", transition: "color 0.2s" }}>
              {s}
            </button>
          ))}
          <ThemeToggle />
        </div>

        <div className="hamburger-btn" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <ThemeToggle />
          <button onClick={() => setMenuOpen(v => !v)} style={{ background: "none", border: "none", color: t.accent, fontSize: "1.4rem", cursor: "pointer", lineHeight: 1 }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: "57px", left: 0, right: 0, zIndex: 99, background: t.bgDrawer, borderBottom: `1px solid ${t.border}`, display: "flex", flexDirection: "column", padding: "0.4rem 0", transition: "background 0.3s" }}>
          {navItems.map((s) => (
            <button key={s} onClick={() => { scrollTo(s); setMenuOpen(false); }} style={{ color: t.textNavMobile, background: "none", border: "none", fontFamily: "'Sora', sans-serif", fontSize: "0.95rem", padding: "0.85rem 1.5rem", textAlign: "left", cursor: "pointer", borderBottom: `1px solid ${t.border}` }}>
              {s}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function Hero({ scrollTo }) {
  const { t } = useTheme();
  const typed = useTypewriter(roles);
  return (
    <section id="hero" style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "6rem 2rem 4rem",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.accentGridLine} 1px,transparent 1px),linear-gradient(90deg,${t.accentGridLine} 1px,transparent 1px)`, backgroundSize: "48px 48px", zIndex: 0 }} />
      <div style={{ position: "absolute", width: "min(520px,90vw)", height: "min(520px,90vw)", background: `radial-gradient(circle,${t.accentGlow} 0%,transparent 70%)`, borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animation: "pulse 4s ease-in-out infinite" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 700 }}>
        <div style={{ display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: t.green, border: t.badgeBorder, padding: "0.3rem 0.9rem", borderRadius: "100px", marginBottom: "1.5rem" }}>
          Backend Software Engineer ⚡
        </div>
        <h1 style={{ fontSize: "clamp(2.8rem,8vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, marginBottom: "0.5rem", color: t.text }}>
          Anjali{" "}
          <span style={{ background: "linear-gradient(135deg,#7c6dfa,#fa6d9b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sharma</span>
        </h1>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(0.85rem,2.2vw,1.1rem)", color: t.textMuted, marginBottom: "2rem", minHeight: "1.8em" }}>
          {typed}
          <span style={{ display: "inline-block", width: 2, height: "1.1em", background: t.accent, marginLeft: 2, verticalAlign: "text-bottom", animation: "blink 1s step-end infinite" }} />
        </p>
        <p style={{ maxWidth: 560, color: t.textMuted, lineHeight: 1.8, fontSize: "0.95rem", margin: "0 auto 2.5rem" }}>{data.about}</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("experience")} style={{ padding: "0.75rem 1.75rem", background: t.accent, color: "#fff", border: "none", borderRadius: 8, fontFamily: "'Sora', sans-serif", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>
            View my work
          </button>
          <button onClick={() => scrollTo("contact")} style={{ padding: "0.75rem 1.75rem", background: "transparent", color: t.text, border: t.heroBtnBorder, borderRadius: 8, fontFamily: "'Sora', sans-serif", fontSize: "0.9rem", cursor: "pointer" }}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}

function Section({ id, label, title, children }) {
  const { t } = useTheme();
  return (
    <section id={id} style={{ padding: "4.5rem 2rem", maxWidth: 960, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: t.accent, letterSpacing: "0.15em", marginBottom: "0.55rem" }}>{label}</div>
      <h2 style={{ fontSize: "clamp(1.5rem,4vw,2.1rem)", fontWeight: 700, marginBottom: "2rem", lineHeight: 1.2, color: t.text }}>{title}</h2>
      {children}
    </section>
  );
}

function Experience() {
  const { t } = useTheme();
  const [openIdx, setOpenIdx] = useState(null);
  const card = { background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "1.4rem", transition: "background 0.3s, border-color 0.3s" };

  return (
    <Section id="experience" label="// 01. experience" title="Where I've worked">
      <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom,${t.accent},transparent)` }} />
        {data.experience.map((exp, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} style={{ position: "relative", marginBottom: "1.5rem" }}>
              <div style={{ position: "absolute", left: "-2.1rem", top: "1.2rem", width: 10, height: 10, borderRadius: "50%", background: isOpen ? t.pink : t.accent, boxShadow: isOpen ? `0 0 12px ${t.pink}` : "none", transition: "all 0.3s" }} />
              <div onClick={() => setOpenIdx(isOpen ? null : i)} style={{ ...card, cursor: "pointer", borderColor: isOpen ? t.borderActive : t.border }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.25rem" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem", color: t.text }}>{exp.title}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: t.green, background: t.greenBg, padding: "0.2rem 0.55rem", borderRadius: 4, whiteSpace: "nowrap" }}>{exp.period}</span>
                </div>
                <div style={{ color: t.accent, fontSize: "0.82rem", marginBottom: "0.5rem" }}>{exp.company} · {exp.location}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: t.textMuted }}>{isOpen ? "▲ collapse" : "▼ expand details"}</div>
                {isOpen && (
                  <ul style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: `1px solid ${t.border}`, listStyle: "none", padding: 0 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: "0.83rem", color: t.textMuted, lineHeight: 1.7, marginBottom: "0.5rem", paddingLeft: "1rem", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: t.accent }}>▹</span>{b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Skills() {
  const { t } = useTheme();
  const card = { background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "1.4rem", transition: "background 0.3s, border-color 0.3s" };

  return (
    <Section id="about" label="// 02. skills" title="Technical Expertise">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        {data.skills.map((cat) => {
          const c = t.tagColors[cat.color];
          return (
            <div key={cat.category} style={card}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: t.accent, marginBottom: "0.8rem", letterSpacing: "0.08em" }}>{cat.category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {cat.items.map((item) => (
                  <span key={item} style={{ padding: "0.28rem 0.7rem", background: c.bg, border: `1px solid ${c.border}`, borderRadius: 6, fontSize: "0.78rem", color: c.text }}>{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  const { t } = useTheme();
  const card = { background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "1.4rem", transition: "background 0.3s, border-color 0.3s, transform 0.3s" };

  return (
    <Section id="projects" label="// 03. projects" title="Things I've built">
      <style>{`.proj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 1.25rem; }`}</style>
      <div className="proj-grid">
        {data.projects.map((p) => (
          <div key={p.name} style={{ ...card, display: "flex", flexDirection: "column" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ width: 42, height: 42, borderRadius: 10, background: `${p.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "0.9rem" }}>{p.emoji}</div>
            <div style={{ fontWeight: 600, fontSize: "0.97rem", marginBottom: "0.2rem", color: t.text }}>{p.name}</div>
            <div style={{ fontSize: "0.74rem", color: t.accent, marginBottom: "0.55rem", fontFamily: "'Space Mono',monospace" }}>{p.subtitle}</div>
            <p style={{ fontSize: "0.82rem", color: t.textMuted, lineHeight: 1.7, marginBottom: "0.9rem", flex: 1 }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.9rem" }}>
              {p.tech.map((tech) => (
                <span key={tech} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: t.accent, background: t.accentCardBg, padding: "0.2rem 0.5rem", borderRadius: 4 }}>{tech}</span>
              ))}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.45rem 0.9rem", background: "transparent", border: `1px solid ${p.color}55`, borderRadius: 7, color: p.color, textDecoration: "none", fontSize: "0.75rem", fontFamily: "'Space Mono', monospace", alignSelf: "flex-start", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = `${p.color}18`}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {p.linkLabel === "Play Store" ? "▶" : "↗"} {p.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Resume() {
  const { t } = useTheme();
  const card = { background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "1.4rem", transition: "background 0.3s, border-color 0.3s" };

  return (
    <Section id="resume" label="// 04. resume" title="My Resume">
      <div style={{ ...card, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem", padding: "2.5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 300, height: 300, background: `radial-gradient(circle,${t.accentGlow} 0%,transparent 70%)`, borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        <div style={{ width: 64, height: 64, borderRadius: 16, background: t.accentCardIcon, border: `1px solid ${t.accentCardBdr}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.9rem", position: "relative" }}>📄</div>
        <div style={{ position: "relative" }}>
          <h3 style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.45rem", color: t.text }}>Anjali Sharma — Full Resume</h3>
          <p style={{ color: t.textMuted, fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 420 }}>Backend Engineer · Node.js · REST APIs · Real-time Systems · 1 year experience</p>
        </div>
        <a href={data.resume} target="_blank" rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 2rem", background: t.accent, color: "#fff", borderRadius: 8, fontFamily: "'Sora', sans-serif", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s", position: "relative" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >↗ View Resume</a>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", justifyContent: "center", position: "relative" }}>
          {["Node.js", "Express", "MongoDB", "Socket.IO", "REST API", "AWS", "JWT", "WebRTC"].map((tech) => (
            <span key={tech} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: t.accent, background: t.accentCardBg, padding: "0.2rem 0.55rem", borderRadius: 4 }}>{tech}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Awards() {
  const { t } = useTheme();

  const card = {
    background: t.bgCard,
    border: `1px solid ${t.border}`,
    borderRadius: 12,
    padding: "1.2rem 1.4rem",
    transition: "all 0.25s ease",
  };

  return (
    <Section id="awards" label="// 05. awards" title="Recognition">
      
      {/* FIXED CONTAINER */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        {data.awards.map((a, i) => (
          <div
            key={i}
            style={{
              ...card,
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* ICON */}
            <div
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: 10,
                background: t.accentCardIcon,
                border: `1px solid ${t.accentCardIconBdr}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
              }}
            >
              {a.icon}
            </div>

            {/* TEXT */}
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  marginBottom: "0.25rem",
                  color: t.text,
                }}
              >
                {a.title}
              </h4>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: t.textMuted,
                  lineHeight: 1.6,
                }}
              >
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const { t } = useTheme();
  const card = { background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "1.4rem", transition: "background 0.3s, border-color 0.3s" };
  const subject = encodeURIComponent("Hey Anjali! Let's connect");
  const body = encodeURIComponent("Hi Anjali,\n\n");

  return (
    <Section id="contact" label="// 06. contact" title="Let's build something">
      <div style={{ ...card, maxWidth: 520, margin: "0 auto", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: t.textMuted, fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1rem" }}>
          Open to new opportunities, collaborations, and interesting projects. Reach out anytime!
        </p>
        <a href={`mailto:${data.email}`} style={{ display: "block", fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", color: t.accent, margin: "1rem 0", textDecoration: "none", wordBreak: "break-all" }}>
          {data.email}
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}&su=Hey%20Anjali!%20Let's%20connect&body=Hi%20Anjali,%0A%0A`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            background: t.accent,
            color: "#fff",
            borderRadius: 8,
            fontFamily: "'Sora', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            textDecoration: "none",
            marginBottom: "1.75rem"
          }}
        >
          Say hello ✉
        </a>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          {[{ label: "LinkedIn", href: "https://linkedin.com" }, { label: "GitHub", href: "https://github.com" }, { label: "Codédex", href: "https://codedex.io" }].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.1rem", border: `1px solid ${t.border}`, borderRadius: 8, color: t.textMuted, textDecoration: "none", fontSize: "0.83rem" }}
            >{l.label}</a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  const { t } = useTheme();
  return (
    <footer style={{ textAlign: "center", padding: "2rem 1rem", color: t.textMuted, fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", borderTop: `1px solid ${t.sectionDivider}` }}>
      designed & built with 💜 · anjali sharma · 2026
    </footer>
  );
}

export default function AnjaliPortfolio() {
  const [mode, setMode] = useState("dark");
  const t = themes[mode];
  const toggle = () => setMode(m => m === "dark" ? "light" : "dark");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle, t }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Sora:wght@300;400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; height: 100%; overflow-x: hidden; scroll-behavior: smooth; }
        img, video { max-width: 100%; }
        #root { width: 100%; }
        @keyframes pulse {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.8; }
          50%      { transform: translate(-50%,-50%) scale(1.1); opacity: 1; }
        }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
      <div style={{ background: t.bg, color: t.text, fontFamily: "'Sora', sans-serif", minHeight: "100vh", width: "100%", overflowX: "hidden", transition: "background 0.3s, color 0.3s" }}>
        <NavBar scrollTo={scrollTo} />
        <Hero scrollTo={scrollTo} />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Awards />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}