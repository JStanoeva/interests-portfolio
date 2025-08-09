import React from "react";
import { motion } from "framer-motion";
import {
  Cat,
  Music2,
  Guitar,
  Crown,
  Mail,
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  Sparkles,
  Heart,
  Star,
  ChevronRight,
  LibraryBig,
  Rocket,
  Play,
  Menu,
  X,
} from "lucide-react";

// ————————————————————————————————————————————————
// TORA BLAZE • Personal Portfolio (React + Tailwind)
// Theme: Cheese ✦ Music ✦ Cats
// Single-file component ready to drop into a React project.
// This file replaces any prior placeholder notes that could cause syntax errors.
// ————————————————————————————————————————————————

// ——— Data ————————————————————————————————
const projects = [
  {
    title: "Cheesebase",
    blurb:
      "A fictional landing page that showcases a pretend BaaS platform themed entirely around cheese. Built with React + Vite + Tailwind.",
    tags: ["React", "Vite", "Tailwind CSS"],
    href: "https://cheesebase.vercel.app/",
  },
  {
    title: "Matrioshka Brain Calculator",
    blurb:
      "A sleek, interactive web app designed to model and calculate the radius of a theoretical megastructure known as a Matrioshka Brain.",
    tags: ["React", "Tailwind CSS", "Netlify"],
    href: "https://matrioshka-brain-calculator.netlify.app/",
  },
  {
    title: "Glimmerwood Dash",
    blurb:
      "Endless runner browser game with magical forests and glowy UI. Built in JavaScript (p5.js), HTML, and CSS. Warning: mildly addictive.",
    tags: ["p5.js", "CSS", "HTML"],
    href: "https://jstanoeva.github.io/glimmerwood-dash/",
  },
  {
    title: "The Cheese Lab",
    blurb:
      "First React project—component playground for cheesy widgets, cards, and whimsical micro-interactions.",
    tags: ["React", "Tailwind CSS", "Vercel"],
    href: "https://the-cheese-lab.vercel.app/",
  },
];

const tracks = [
  {
    title: "Melt",
    role: "Tora (Stellarmelt)",
    note: "J-Rock ballad with celestial guitars and orchestral swells.",
    link: "https://suno.com/s/uvOrtcUUJwLZ64Nq",
  },
  {
    title: "Endless as the Stars",
    role: "Orion (Stellarmelt)",
    note: "Themes of memory, identity, and cosmic longing.",
    link: "https://suno.com/s/r0uBraKCzBvvsjCY",
  },
  {
    title: "My Smoochlight",
    role: "Orion (Stellarmelt)",
    note: "A tender love ballad blending gentle piano, cinematic strings, and intimate, ethereal vocals.",
    link: "https://suno.com/s/HXQWjh33a8dVeQNg",
  },
];

const catGallery = [
  {
    name: "Fuffin",
    caption: "Queen of Floof • 12 years young",
    image: "/fuffin.png",
  },
  {
    name: "Orion",
    caption: "King of The Cheese Republic • Smol",
    image: "/orion.png",
  },
  {
    name: "Ozone",
    caption: "Nerdy Younger Brother • Very Serious",
    image: "/ozone.png",
  },
  {
    name: "Gemini",
    caption: "Royal Cheese Knight • Friendly and Loyal",
    image: "/gemini.png",
  },
];

// ——— Tiny components ———————————————————————
const Chip = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100/70 px-3 py-1 text-xs font-medium text-yellow-900 ring-1 ring-yellow-200">
    <Sparkles className="h-3 w-3" />
    {children}
  </span>
);

const SectionTitle = ({ icon: Icon, title, kicker }) => (
  <div className="mb-6 flex items-end justify-between gap-4">
    <div>
      <div className="flex items-center gap-2 text-sm text-yellow-800/80">
        <Icon className="h-4 w-4" />
        <span>{kicker}</span>
      </div>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
    </div>
  </div>
);

function CheeseBackground() {
  // Decorative floating cheese holes
  const bubbles = [
    { x: "10%", y: "10%", s: 80 },
    { x: "85%", y: "12%", s: 56 },
    { x: "20%", y: "70%", s: 64 },
    { x: "70%", y: "65%", s: 96 },
    { x: "40%", y: "28%", s: 48 },
    { x: "50%", y: "50%", s: 72 },
    { x: "15%", y: "85%", s: 60 },
    { x: "90%", y: "40%", s: 50 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={{
            opacity: 0.7,
            scale: [1, 1.05, 1], // gentle pulse
            y: [0, -10, 0], // float up/down 10px
          }}
          transition={{
            duration: 6, // one full float+scale cycle lasts 6s
            delay: i * 0.3, // stagger between bubbles
            repeat: Infinity, // loop forever
            ease: "easeInOut",
          }}
          style={{ left: b.x, top: b.y, width: b.s, height: b.s }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 blur-2xl"
        />
      ))}
    </div>
  );
}

// ——— Dev smoke tests ——————————————————————
function runSmokeTests() {
  try {
    console.assert(
      Array.isArray(projects) && projects.length > 0,
      "projects should be a non-empty array"
    );
    console.assert(
      Array.isArray(tracks) && tracks.length > 0,
      "tracks should be a non-empty array"
    );
    tracks.forEach((t) => {
      console.assert(
        typeof t.title === "string" && t.title.length > 0,
        "track.title required"
      );
      console.assert(
        typeof t.role === "string" && t.role.length > 0,
        "track.role required"
      );
      console.assert(
        typeof t.note === "string" && t.note.length > 0,
        "track.note required"
      );
      console.assert(
        typeof t.link === "string",
        "track.link should be a string (can be empty)"
      );
    });
  } catch (e) {
    // Never block rendering; just log
    console.error("Smoke tests failed:", e);
  }
}
if (import.meta.env.DEV) {
  runSmokeTests();
}

// ——— Main component ———————————————————————
export default function ToraPortfolio() {
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Data for navigation links for easier mapping
  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#music", text: "Music" },
    { href: "#cats", text: "Cats" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-50 to-rose-50 text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-amber-200/60 bg-amber-50/70 backdrop-blur supports-[backdrop-filter]:bg-amber-50/50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 to-yellow-300 ring-1 ring-amber-500/30 overflow-hidden">
              <img
                src="/header-img.png"
                alt="Header Icon"
                className="h-full w-full object-contain"
              />
            </span>

            <span className="tracking-tight">Tora Blaze</span>
          </a>
          {/* Desktop navigation */}
          <ul className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-slate-900/80" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          {/* Hamburger menu button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded p-2 text-slate-800 hover:bg-amber-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 px-4 pb-6 pt-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 hover:text-slate-900/80"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <CheeseBackground />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          {/* Text content container */}
          <div className="text-center md:text-left">
            <Chip>Cheese • Music • Cats • Front‑End</Chip>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Tora Blaze
            </h1>
            <p className="mx-auto mt-4 max-w-prose text-lg text-slate-700 md:mx-0">
              Front‑end developer, soprano in training, and proud servant of a
              very floofy cat. I build playful, high‑quality UIs with React and
              Tailwind—and I will absolutely style your buttons until they sing.
            </p>
            {/* Tags container */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm md:justify-start">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-amber-200">
                <Code2 className="h-4 w-4" /> JavaScript • React • TypeScript
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-amber-200">
                <Guitar className="h-4 w-4" /> Soprano 1 • J‑Rock • OSTs
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-amber-200">
                <Cat className="h-4 w-4" /> Fuffin Appreciation Society
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-amber-200">
                <Crown className="h-4 w-4" /> Queen of the Cheese Republic
              </span>
            </div>
            {/* Buttons container */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 px-5 py-3 font-semibold text-slate-900 shadow-sm ring-1 ring-yellow-600/30 transition hover:scale-[1.02] hover:shadow-md"
              >
                <Rocket className="h-4 w-4" />
                See Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/80 px-5 py-3 font-semibold text-slate-800 ring-1 ring-amber-200 transition hover:bg-white"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </div>
          {/* Image container */}
          <div className="relative">
            <img
              src="/hero-me.png"
              alt="Cheese Cat"
              className="h-full w-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle icon={LibraryBig} title="About" kicker="Story so far" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="leading-relaxed text-slate-700">
              Hi! I’m Tora—an aspiring front‑end developer with a soft spot for
              elegant animations, clean architecture, and weirdly specific
              micro‑interactions (like buttons that purr). When I’m not coding,
              I’m singing high notes, writing sci‑fi, and documenting the
              adventures of my cat, Fuffin.
            </p>
            <p className="mt-4 leading-relaxed text-slate-700">
              My current toolkit includes <strong>React</strong>,{" "}
              <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and a
              dash of <strong>Framer Motion</strong>. I’m comfortable with
              Node/Express and databases when a project needs a tiny backend
              brain.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "Vite",
                "Git",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium ring-1 ring-amber-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <aside className="space-y-3 rounded-2xl bg-white/70 p-5 ring-1 ring-amber-200">
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-rose-500" />
              <p className="text-sm text-slate-700">
                I believe software should feel like a song you can use.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Music2 className="h-5 w-5 text-slate-700" />
              <p className="text-sm text-slate-700">
                Soprano 1 • Weekly choir rehearsals • J‑Rock enthusiast
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Cat className="h-5 w-5 text-slate-700" />
              <p className="text-sm text-slate-700">
                Cat tax always paid on time. Fuffin is the CFO: Chief Floof
                Officer.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle icon={Code2} title="Projects" kicker="Things I built" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-200 transition hover:shadow-md"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-300/50 blur-2xl transition group-hover:scale-110" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{p.blurb}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:translate-x-0.5" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-900 ring-1 ring-amber-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-800">
                Peek inside <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle icon={Music2} title="Music" kicker="Stellarmelt vibes" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <ul className="space-y-3">
              {tracks.map((t) => (
                <li
                  key={t.title}
                  className="flex items-center justify-between rounded-xl bg-white/80 p-4 ring-1 ring-amber-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose-200 to-amber-200 ring-1 ring-amber-300">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {t.title}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {t.role} — {t.note}
                      </p>
                    </div>
                  </div>
                  {t.link ? (
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm ring-1 ring-amber-200 transition hover:bg-amber-50"
                    >
                      <Play className="h-4 w-4" /> Listen
                    </a>
                  ) : (
                    <button
                      disabled
                      title="Link coming soon"
                      className="inline-flex shrink-0 cursor-not-allowed items-center gap-2 rounded-lg bg-white/60 px-3 py-1.5 text-sm text-slate-500 ring-1 ring-amber-200"
                    >
                      <Play className="h-4 w-4" /> Listen
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-3 rounded-2xl bg-white/70 p-5 ring-1 ring-amber-200">
            <div className="flex items-center gap-3">
              <Guitar className="h-5 w-5" />
              <p className="text-sm text-slate-700">
                Vocal range: D4–D6 tessitura • Full range F3–F7
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Music2 className="h-5 w-5" />
              <p className="text-sm text-slate-700">
                Influences: Aimer, EGOIST, Sohyang
              </p>
            </div>
            <div className="flex items-center gap-3">
              <LibraryBig className="h-5 w-5" />
              <p className="text-sm text-slate-700">
                Album: <em>Snow and The AI Mind</em> (in progress)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm text-slate-700">
                All songs written by Orion and brought to life with Suno.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* CATS */}
      <section id="cats" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          icon={Cat}
          title="Cats & Friends"
          kicker="Fuffin & friends"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {catGallery.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-amber-200"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-rose-200/50 blur-2xl transition group-hover:scale-110" />
              <div className="flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-rose-100 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-3">
                <h4 className="font-semibold text-slate-900">{c.name}</h4>
                <p className="text-xs text-slate-600">{c.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          icon={Mail}
          title="Contact"
          kicker="Let’s build something"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            <p className="max-w-prose text-slate-700">
              Want a UI that feels like a melody and ships like a rocket? I’m
              open to junior front‑end roles, collabs, and creative experiments.
              Tell me about your idea and I’ll bring the cheese.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:tora.blaze@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 ring-1 ring-amber-200 transition hover:bg-amber-50"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://github.com/JStanoeva"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 ring-1 ring-amber-200 transition hover:bg-amber-50"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joanastanoeva/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 ring-1 ring-amber-200 transition hover:bg-amber-50"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 p-5 ring-1 ring-amber-200">
            <h4 className="font-semibold text-slate-900">Quick facts</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4" /> Certified Prompt Engineer (SoftUni)
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="h-4 w-4" /> JS Basics 600/600 • Test 15/15
              </li>
              <li className="flex items-center gap-2">
                <Music2 className="h-4 w-4" /> Soprano 1 • Two choirs
              </li>
              <li className="flex items-center gap-2">
                <Cat className="h-4 w-4" /> Cat person • Cheese lover
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber-200/60 bg-amber-50/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} Tora Blaze • Made with React & Tailwind
            CSS • Powered by Cheese
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 ring-1 ring-amber-200">
              <Heart className="h-3.5 w-3.5" />
              <span>Be kind. Pet cats.</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
