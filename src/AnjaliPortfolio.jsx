import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();
function useTheme() { return useContext(ThemeContext); }

const themes = {
  dark: {
    bg: "#0a0a0f", bgCard: "#16161f", bgNav: "rgba(10,10,15,0.95)", bgDrawer: "rgba(10,10,15,0.98)",
    border: "rgba(124,109,250,0.2)", borderActive: "rgba(124,109,250,0.5)",
    text: "#f0eeff", textMuted: "#8885aa", textNav: "#8885aa", textNavMobile: "#c0bddd",
    accent: "#7c6dfa", accentGlow: "rgba(124,109,250,0.15)", accentGridLine: "rgba(124,109,250,0.06)",
    accentCardBg: "rgba(124,109,250,0.08)", accentCardBdr: "rgba(124,109,250,0.3)",
    accentCardIcon: "rgba(124,109,250,0.1)", accentCardIconBdr: "rgba(124,109,250,0.2)",
    green: "#6dfacd", greenBg: "rgba(109,250,205,0.08)", pink: "#fa6d9b",
    badgeBorder: "1px solid rgba(109,250,205,0.3)", heroBtnBorder: "1px solid rgba(124,109,250,0.3)",
    sectionDivider: "rgba(124,109,250,0.15)",
    tagColors: {
      purple: { bg: "rgba(124,109,250,0.12)", border: "rgba(124,109,250,0.3)", text: "#a99dfc" },
      green:  { bg: "rgba(109,250,205,0.08)", border: "rgba(109,250,205,0.25)", text: "#6dfacd" },
      pink:   { bg: "rgba(250,109,155,0.08)", border: "rgba(250,109,155,0.25)", text: "#fa6d9b" },
      amber:  { bg: "rgba(250,185,50,0.08)",  border: "rgba(250,185,50,0.25)",  text: "#fab932" },
      teal:   { bg: "rgba(50,210,255,0.08)",  border: "rgba(50,210,255,0.25)",  text: "#32d2ff" },
      orange: { bg: "rgba(255,140,0,0.08)",   border: "rgba(255,140,0,0.3)",    text: "#ff8c00" },
    },
  },
  light: {
    bg: "#f5f4ff", bgCard: "#ffffff", bgNav: "rgba(245,244,255,0.95)", bgDrawer: "rgba(245,244,255,0.99)",
    border: "rgba(124,109,250,0.18)", borderActive: "rgba(124,109,250,0.55)",
    text: "#18162e", textMuted: "#6b6880", textNav: "#5a5770", textNavMobile: "#3e3a5c",
    accent: "#6254e8", accentGlow: "rgba(124,109,250,0.10)", accentGridLine: "rgba(124,109,250,0.07)",
    accentCardBg: "rgba(124,109,250,0.06)", accentCardBdr: "rgba(124,109,250,0.25)",
    accentCardIcon: "rgba(124,109,250,0.08)", accentCardIconBdr: "rgba(124,109,250,0.18)",
    green: "#1da67a", greenBg: "rgba(29,166,122,0.08)", pink: "#d63d72",
    badgeBorder: "1px solid rgba(29,166,122,0.35)", heroBtnBorder: "1px solid rgba(98,84,232,0.3)",
    sectionDivider: "rgba(124,109,250,0.12)",
    tagColors: {
      purple: { bg: "rgba(98,84,232,0.08)",  border: "rgba(98,84,232,0.25)",  text: "#5042c9" },
      green:  { bg: "rgba(29,166,122,0.07)", border: "rgba(29,166,122,0.22)", text: "#14845f" },
      pink:   { bg: "rgba(214,61,114,0.07)", border: "rgba(214,61,114,0.22)", text: "#b82d5e" },
      amber:  { bg: "rgba(180,120,0,0.07)",  border: "rgba(180,120,0,0.22)",  text: "#9a6600" },
      teal:   { bg: "rgba(0,170,210,0.07)",  border: "rgba(0,170,210,0.22)",  text: "#007ea8" },
      orange: { bg: "rgba(200,100,0,0.07)",  border: "rgba(200,100,0,0.22)",  text: "#b35900" },
    },
  },
};

const data = {
  email: "anjaliiisharma007@gmail.com",
  resume: "https://drive.google.com/file/d/1CExBb064bZxALp1yjulk8FTOj--bgp3i/view?usp=sharing",
  about: "Backend-focused engineer with 1 year of experience specializing in Node.js. I build scalable RESTful APIs, real-time systems, and production-ready platforms with clean, maintainable code.",
  skills: [
    { category: "Languages",                     color: "purple", items: ["JavaScript", "Python", "C++"] },
    { category: "Backend & APIs",                color: "green",  items: ["Node.js", "Express.js", "REST API", "Socket.IO", "WebSockets"] },
    { category: "Databases",                     color: "pink",   items: ["MongoDB", "MySQL"] },
    { category: "Auth, Security & Integrations", color: "amber",  items: ["JWT", "RBAC", "Razorpay", "FCM", "AWS S3,EC2", "Firebase", "Shiprocket API", "WebRTC"] },
    { category: "Tools & Platforms",             color: "teal",   items: ["Git", "GitHub", "Postman"] },
    { category: "Frontend",                      color: "orange", items: ["HTML", "CSS", "React.js"] },
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
    { icon: "🏆", title: "Winner — Codédex Summer Hackathon",     desc: "Secured top position in a global hackathon competition, competing against developers worldwide." },
    { icon: "🌍", title: "Hacktoberfest 2024 Contributor",         desc: "Successfully raised and merged multiple open-source pull requests, contributing to the global dev community." },
    { icon: "🔬", title: "Selected for Academic Research Program", desc: "Chosen for a final-year NLP research project at Dayalbagh Educational Institute, Agra." },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub",   href: "https://github.com" },
    { label: "Codédex",  href: "https://codedex.io" },
  ],
};

const roles = ["Building RESTful APIs", "Scaling Backend Systems", "Node.js Engineer", "Real-time Systems Dev", "Full-stack Problem Solver"];
const breakpoints = { xs: 480, sm: 720, md: 960, lg: 1200 };

function useTypewriter(words, typingSpeed = 95, deletingSpeed = 50, pauseMs = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let timer;
    if (!deleting) {
      if (charIdx < current.length) timer = setTimeout(() => setCharIdx(c => c + 1), typingSpeed);
      else timer = setTimeout(() => setDeleting(true), pauseMs);
    } else {
      if (charIdx > 0) timer = setTimeout(() => setCharIdx(c => c - 1), deletingSpeed);
      else { setDeleting(false); setWordIdx(w => (w + 1) % words.length); }
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);
  return display;
}

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return w;
}

function SunIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}
function MoonIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function ThemeToggle() {
  const { mode, toggle, t } = useTheme();
  return (
    <button onClick={toggle} title={mode === "dark" ? "Switch to light" : "Switch to dark"}
      style={{ background: t.accentCardBg, border: `1px solid ${t.border}`, borderRadius: 8, cursor: "pointer", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s", flexShrink: 0 }}>
      {mode === "dark" ? <SunIcon color={t.accent} /> : <MoonIcon color={t.accent} />}
    </button>
  );
}

function NavBar({ scrollTo }) {
  const { t } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width <= breakpoints.sm;
  const isTablet = width <= breakpoints.md;
  const navItems = ["about", "experience", "projects", "resume", "awards", "contact"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: isMobile ? "0.75rem 1rem" : isTablet ? "0.85rem 1.5rem" : "0.85rem 2.5rem",
        background: t.bgNav, backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${t.border}`, transition: "background 0.3s, border-color 0.3s",
      }}>
        <div onClick={() => { scrollTo("hero"); setMenuOpen(false); }}
          style={{ fontFamily: "'Space Mono', monospace", fontSize: isMobile ? "0.82rem" : "0.9rem", color: t.accent, letterSpacing: "0.1em", cursor: "pointer", userSelect: "none" }}>
          anjali.dev
        </div>

        {!isMobile && (
          <div style={{ display: "flex", gap: isTablet ? "1rem" : "1.4rem", alignItems: "center" }}>
            {navItems.map(s => (
              <button key={s} onClick={() => scrollTo(s)}
                style={{ color: t.textNav, background: "none", border: "none", fontFamily: "'Sora', sans-serif", fontSize: isTablet ? "0.78rem" : "0.84rem", cursor: "pointer", letterSpacing: "0.04em", transition: "color 0.2s" }}>
                {s}
              </button>
            ))}
            <ThemeToggle />
          </div>
        )}

        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ThemeToggle />
            <button onClick={() => setMenuOpen(v => !v)}
              style={{ background: "none", border: `1px solid ${t.border}`, borderRadius: 8, color: t.accent, cursor: "pointer", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </nav>

      {/* Full-screen mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{ position: "fixed", top: 61, left: 0, right: 0, bottom: 0, zIndex: 199, background: t.bgDrawer, display: "flex", flexDirection: "column" }}>
          {navItems.map(s => (
            <button key={s} onClick={() => { scrollTo(s); setMenuOpen(false); }}
              style={{ color: t.textNavMobile, background: "none", border: "none", borderBottom: `1px solid ${t.border}`, fontFamily: "'Sora', sans-serif", fontSize: "1rem", padding: "1rem 1.5rem", textAlign: "left", cursor: "pointer" }}>
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
  const width = useWindowWidth();
  const sm = width <= breakpoints.xs;
  const md = width <= breakpoints.sm;

  return (
    <section id="hero" style={{
      width: "100%", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      textAlign: "center",
      padding: sm ? "5rem 1rem 3rem" : md ? "6rem 1.5rem 3rem" : "7rem 2rem 4rem",
      position: "relative", overflow: "hidden", boxSizing: "border-box",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.accentGridLine} 1px,transparent 1px),linear-gradient(90deg,${t.accentGridLine} 1px,transparent 1px)`, backgroundSize: sm ? "28px 28px" : "48px 48px", zIndex: 0 }} />
      <div style={{ position: "absolute", width: "min(500px,80vw)", height: "min(500px,80vw)", background: `radial-gradient(circle,${t.accentGlow} 0%,transparent 70%)`, borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0, animation: "pulse 4s ease-in-out infinite" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: sm ? "100%" : 760, margin: "0 auto" }}>
        <div style={{ display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: sm ? "0.6rem" : "0.72rem", color: t.green, border: t.badgeBorder, padding: "0.28rem 0.85rem", borderRadius: "100px", marginBottom: "1.25rem", letterSpacing: "0.04em" }}>
          Backend Software Engineer ⚡
        </div>
        <h1 style={{ fontSize: sm ? "2.2rem" : md ? "3rem" : "clamp(3rem,7vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, marginBottom: "0.6rem", color: t.text }}>
          Anjali{" "}
          <span style={{ background: "linear-gradient(135deg,#7c6dfa,#fa6d9b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sharma</span>
        </h1>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: sm ? "0.72rem" : "clamp(0.82rem,2vw,1.05rem)", color: t.textMuted, marginBottom: "1.5rem", minHeight: "1.8em" }}>
          {typed}
          <span style={{ display: "inline-block", width: 2, height: "1.1em", background: t.accent, marginLeft: 2, verticalAlign: "text-bottom", animation: "blink 1s step-end infinite" }} />
        </p>
        <p style={{ maxWidth: 520, color: t.textMuted, lineHeight: 1.85, fontSize: sm ? "0.84rem" : "0.95rem", margin: "0 auto 2.25rem" }}>{data.about}</p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("experience")}
            style={{ padding: sm ? "0.6rem 1.25rem" : "0.75rem 1.75rem", background: t.accent, color: "#fff", border: "none", borderRadius: 8, fontFamily: "'Sora', sans-serif", fontSize: sm ? "0.82rem" : "0.9rem", fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            View my work
          </button>
          <button onClick={() => scrollTo("contact")}
            style={{ padding: sm ? "0.6rem 1.25rem" : "0.75rem 1.75rem", background: "transparent", color: t.text, border: t.heroBtnBorder, borderRadius: 8, fontFamily: "'Sora', sans-serif", fontSize: sm ? "0.82rem" : "0.9rem", cursor: "pointer" }}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}

function Section({ id, label, title, children }) {
  const { t } = useTheme();
  const width = useWindowWidth();
  const sm = width <= breakpoints.xs;
  const md = width <= breakpoints.sm;
  const lg = width <= breakpoints.lg;

  return (
    <section id={id} style={{ padding: sm ? "3rem 1rem" : md ? "4rem 1.5rem" : lg ? "4.75rem 2rem" : "5rem 2.5rem", maxWidth: 1120, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
      <div style={{ borderTop: `1px solid ${t.sectionDivider}`, paddingTop: sm ? "1.75rem" : "2.25rem", textAlign: "left" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: t.accent, letterSpacing: "0.18em", marginBottom: "0.45rem", textTransform: "uppercase" }}>{label}</div>
        <h2 style={{ fontSize: sm ? "1.35rem" : md ? "1.6rem" : "clamp(1.6rem,3.5vw,2.1rem)", fontWeight: 700, marginBottom: sm ? "1.35rem" : "1.85rem", lineHeight: 1.2, color: t.text }}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Experience() {
  const { t } = useTheme();
  const [openIdx, setOpenIdx] = useState(null);
  const width = useWindowWidth();
  const sm = width <= breakpoints.xs;
  const md = width <= breakpoints.sm;

  return (
    <Section id="experience" label="// 01. experience" title="Where I've worked">
      <div style={{ position: "relative", paddingLeft: sm ? "1.1rem" : "1.8rem" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom,${t.accent},transparent)` }} />
        {data.experience.map((exp, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} style={{ position: "relative", marginBottom: "1.1rem" }}>
              <div style={{ position: "absolute", left: sm ? "-1.45rem" : "-2.05rem", top: "1.15rem", width: 9, height: 9, borderRadius: "50%", background: isOpen ? t.pink : t.accent, boxShadow: isOpen ? `0 0 10px ${t.pink}` : "none", transition: "all 0.3s" }} />
              <div onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{ background: t.bgCard, border: `1px solid ${isOpen ? t.borderActive : t.border}`, borderRadius: 12, padding: sm ? "0.9rem" : "1.35rem", cursor: "pointer", transition: "border-color 0.3s", textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: md ? "flex-start" : "center", flexDirection: md ? "column" : "row", gap: md ? "0.5rem" : "0.4rem", marginBottom: "0.3rem" }}>
                  <span style={{ fontWeight: 600, fontSize: sm ? "0.84rem" : "0.95rem", color: t.text, lineHeight: 1.4, flex: "1 1 auto", marginRight: md ? 0 : "0.5rem" }}>{exp.title}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: t.green, background: t.greenBg, padding: "0.18rem 0.5rem", borderRadius: 4, whiteSpace: "nowrap", flexShrink: 0, marginLeft: md ? 0 : "auto" }}>{exp.period}</span>
                </div>
                <div style={{ color: t.accent, fontSize: "0.78rem", marginBottom: "0.45rem" }}>{exp.company} · {exp.location}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: t.textMuted }}>{isOpen ? "▲ collapse" : "▼ expand"}</div>
                {isOpen && (
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "0.85rem", paddingTop: "0.85rem", borderTop: `1px solid ${t.border}` }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: sm ? "0.78rem" : "0.83rem", color: t.textMuted, lineHeight: 1.75, marginBottom: "0.55rem", paddingLeft: "1.1rem", position: "relative" }}>
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
  const width = useWindowWidth();
  const sm = width <= breakpoints.xs;
  const md = width <= breakpoints.sm;
  const lg = width <= breakpoints.md;

  return (
    <Section id="about" label="// 02. skills" title="Technical Expertise">
      <div style={{ display: "grid", gridTemplateColumns: sm ? "1fr" : md ? "1fr 1fr" : lg ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: "0.8rem" }}>
        {data.skills.map(cat => {
          const c = t.tagColors[cat.color];
          return (
            <div key={cat.category} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: sm ? "0.9rem" : "1.15rem", transition: "background 0.3s" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: t.accent, marginBottom: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{cat.category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem" }}>
                {cat.items.map(item => (
                  <span key={item} style={{ padding: "0.22rem 0.6rem", background: c.bg, border: `1px solid ${c.border}`, borderRadius: 6, fontSize: "0.74rem", color: c.text }}>{item}</span>
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
  const width = useWindowWidth();
  const sm = width <= breakpoints.xs;
  const md = width <= breakpoints.sm;
  const lg = width <= breakpoints.md;

  return (
    <Section id="projects" label="// 03. projects" title="Things I've built">
      <div style={{ display: "grid", gridTemplateColumns: sm ? "1fr" : md ? "1fr" : lg ? "1fr 1fr" : "repeat(2, 1fr)", gap: "1rem" }}>
        {data.projects.map(p => (
          <div key={p.name}
            style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: sm ? "1rem" : "1.35rem", display: "flex", flexDirection: "column", transition: "transform 0.25s, border-color 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = t.borderActive; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: `${p.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginBottom: "0.8rem" }}>{p.emoji}</div>
            <div style={{ fontWeight: 600, fontSize: "0.97rem", marginBottom: "0.2rem", color: t.text }}>{p.name}</div>
            <div style={{ fontSize: "0.7rem", color: t.accent, marginBottom: "0.5rem", fontFamily: "'Space Mono', monospace" }}>{p.subtitle}</div>
            <p style={{ fontSize: sm ? "0.78rem" : "0.82rem", color: t.textMuted, lineHeight: 1.75, marginBottom: "0.85rem", flex: 1 }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.32rem", marginBottom: "0.85rem" }}>
              {p.tech.map(tech => (
                <span key={tech} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.63rem", color: t.accent, background: t.accentCardBg, padding: "0.16rem 0.45rem", borderRadius: 4 }}>{tech}</span>
              ))}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.4rem 0.82rem", background: "transparent", border: `1px solid ${p.color}55`, borderRadius: 7, color: p.color, textDecoration: "none", fontSize: "0.72rem", fontFamily: "'Space Mono', monospace", alignSelf: "flex-start", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = `${p.color}18`}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
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
  const width = useWindowWidth();
  const sm = width <= breakpoints.xs;

  return (
    <Section id="resume" label="// 04. resume" title="My Resume">
      <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16, padding: sm ? "2rem 1.1rem" : "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.4rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 260, height: 260, background: `radial-gradient(circle,${t.accentGlow} 0%,transparent 70%)`, borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        <div style={{ width: 58, height: 58, borderRadius: 14, background: t.accentCardIcon, border: `1px solid ${t.accentCardBdr}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", position: "relative" }}>📄</div>
        <div style={{ position: "relative" }}>
          <h3 style={{ fontWeight: 600, fontSize: sm ? "0.95rem" : "1.05rem", marginBottom: "0.4rem", color: t.text }}>Anjali Sharma — Full Resume</h3>
          <p style={{ color: t.textMuted, fontSize: sm ? "0.78rem" : "0.85rem", lineHeight: 1.7, maxWidth: 360 }}>Backend Engineer · Node.js · REST APIs · Real-time Systems · 1 year experience</p>
        </div>
        <a href={data.resume} target="_blank" rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: sm ? "0.6rem 1.5rem" : "0.7rem 1.85rem", background: t.accent, color: "#fff", borderRadius: 8, fontFamily: "'Sora', sans-serif", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s", position: "relative" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
          ↗ View Resume
        </a>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem", justifyContent: "center", position: "relative" }}>
          {["Node.js", "Express", "MongoDB", "Socket.IO", "REST API", "AWS", "JWT", "WebRTC"].map(tech => (
            <span key={tech} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.63rem", color: t.accent, background: t.accentCardBg, padding: "0.16rem 0.48rem", borderRadius: 4 }}>{tech}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Awards() {
  const { t } = useTheme();
  const width = useWindowWidth();
  const sm = width <= breakpoints.xs;

  return (
    <Section id="awards" label="// 05. awards" title="Recognition">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {data.awards.map((a, i) => (
          <div key={i}
            style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: sm ? "0.9rem" : "1.15rem 1.35rem", display: "flex", alignItems: "flex-start", gap: "0.85rem", transition: "transform 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.borderColor = t.borderActive; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.borderColor = t.border; }}>
            <div style={{ flexShrink: 0, width: sm ? 36 : 42, height: sm ? 36 : 42, borderRadius: 10, background: t.accentCardIcon, border: `1px solid ${t.accentCardIconBdr}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: sm ? "1rem" : "1.15rem" }}>{a.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4 style={{ fontWeight: 600, fontSize: sm ? "0.85rem" : "0.93rem", marginBottom: "0.22rem", color: t.text, lineHeight: 1.4 }}>{a.title}</h4>
              <p style={{ fontSize: sm ? "0.76rem" : "0.81rem", color: t.textMuted, lineHeight: 1.65 }}>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const { t } = useTheme();
  const width = useWindowWidth();
  const sm = width <= breakpoints.xs;
  const md = width <= breakpoints.sm;

  return (
    <Section id="contact" label="// 06. contact" title="Let's build something">
      <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16, width: "100%", maxWidth: "100%", margin: "0 auto", padding: sm ? "1.9rem 1rem" : md ? "2.5rem 1.6rem" : "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: sm ? "0.9rem" : "1rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: sm ? 220 : 300, height: sm ? 220 : 300, background: `radial-gradient(circle,${t.accentGlow} 0%,transparent 70%)`, borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        <p style={{ color: t.textMuted, fontSize: sm ? "0.82rem" : "0.9rem", lineHeight: 1.8, margin: 0, maxWidth: 620, position: "relative" }}>
          Open to new opportunities, collaborations, and interesting projects. Reach out anytime!
        </p>
        <a href={`mailto:${data.email}`}
          style={{ display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: sm ? "0.68rem" : "0.8rem", color: t.accent, margin: 0, textDecoration: "none", wordBreak: "break-all", position: "relative" }}>
          {data.email}
        </a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}&su=Hey%20Anjali!&body=Hi%20Anjali,%0A%0A`}
          target="_blank" rel="noreferrer"
          style={{ display: "inline-block", padding: sm ? "0.6rem 1.4rem" : "0.72rem 1.9rem", background: t.accent, color: "#fff", borderRadius: 8, fontFamily: "'Sora', sans-serif", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", margin: "0.2rem 0 1rem", transition: "opacity 0.2s", position: "relative" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
          Say hello ✉
        </a>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap", position: "relative" }}>
          {data.social.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              style={{ padding: sm ? "0.45rem 0.9rem" : "0.5rem 1rem", border: `1px solid ${t.border}`, borderRadius: 8, color: t.textMuted, textDecoration: "none", fontSize: sm ? "0.75rem" : "0.83rem", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.textMuted; }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  const { t } = useTheme();
  return (
    <footer style={{ textAlign: "center", padding: "1.75rem 1rem", color: t.textMuted, fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", borderTop: `1px solid ${t.sectionDivider}` }}>
      designed & built with 💜 · anjali sharma · 2026
    </footer>
  );
}

export default function AnjaliPortfolio() {
  const [mode, setMode] = useState("dark");
  const t = themes[mode];
  const toggle = () => setMode(m => m === "dark" ? "light" : "dark");
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <ThemeContext.Provider value={{ mode, toggle, t }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Sora:wght@300;400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        html, body { width: 100%; min-height: 100%; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        #root { width: 100%; }
        button { font-family: inherit; }
        @keyframes pulse {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.7; }
          50%      { transform: translate(-50%,-50%) scale(1.12); opacity: 1; }
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