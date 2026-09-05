import { useEffect, useMemo, useState } from "react";
import {
  exhibitions,
  heroPortraitIds,
  influences,
  projects,
  works,
  worksFor,
  type Work,
  type WorkFilter,
} from "./data";

const nav = [
  ["#about", "About"],
  ["#works", "Works"],
  ["#projects", "Projects"],
  ["#cv", "CV"],
  ["#biography", "Biography"],
  ["#publications", "Publications"],
  ["#contacts", "Contacts"],
] as const;

const INSTAGRAM_URL =
  "https://www.instagram.com/ashu_zewdu?igsi=ZDNlZDc0MzIxNw==";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.6M12 19.4V21M4.2 4.2l1.1 1.1M18.7 18.7l1.1 1.1M3 12h1.6M19.4 12H21M4.2 19.8l1.1-1.1M18.7 5.3l1.1-1.1" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.4 14.6A6.2 6.2 0 0 1 9.8 4.8 7 7 0 1 0 19.2 14a6.2 6.2 0 0 1-3.8.6z" />
    </svg>
  );
}

export default function App() {
  const [open, setOpen] = useState<Work | null>(null);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState<WorkFilter>("all");
  const [hero, setHero] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof document !== "undefined" &&
    document.documentElement.dataset.theme === "dark"
      ? "dark"
      : "light",
  );

  const visible = useMemo(() => worksFor(filter), [filter]);
  const heroSlides = useMemo(
    () =>
      heroPortraitIds
        .map((id) => works.find((work) => work.id === id))
        .filter((work): work is Work => Boolean(work)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      const i = visible.findIndex((w) => w.id === open.id);
      if (i < 0) return;
      if (e.key === "ArrowRight") setOpen(visible[(i + 1) % visible.length]);
      if (e.key === "ArrowLeft")
        setOpen(visible[(i - 1 + visible.length) % visible.length]);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, visible]);

  const closeNav = () => setMenu(false);

  useEffect(() => {
    const current =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);
  }, []);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const timer = window.setInterval(() => {
      setHero((current) => (current + 1) % heroSlides.length);
    }, 7200);
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  const toggleTheme = () => {
    const current =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("az-theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <header className="nav">
        <a className="mark" href="#top">
          AZ
        </a>
        <div className="nav-end">
          <nav className={menu ? "open" : ""}>
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={closeNav}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-tools">
            <a
              className="nav-icon"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashenafi Zewdu on Instagram"
            >
              <InstagramIcon />
            </a>
            <button
              className="nav-icon"
              type="button"
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={toggleTheme}
            >
              <ThemeIcon dark={theme === "dark"} />
            </button>
          </div>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero home-hero" aria-label="Ashenafi Zewdu">
          <div className="hero-stage">
            {heroSlides.map((slide, index) => (
              <img
                key={slide.id}
                className={
                  index === hero
                    ? `is-active ken-${index % 2 === 0 ? "in" : "out"}`
                    : ""
                }
                src={slide.src}
                alt={slide.alt}
              />
            ))}
            <div className="hero-veil" />
            <div className="hero-grain" aria-hidden="true" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Addis Ababa</p>
            <h1>
              Ashenafi
              <em> Zewdu</em>
            </h1>
            <p className="lede">
              Artist and architect working in different mediums, including
              cowhide, connecting visual art with architecture through social,
              historical, and political form.
            </p>
            <div className="hero-meta">
              <span>BFA Painting · MFA</span>
              <span>BSc Architecture & Urban Planning</span>
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <p className="hero-work">
              {heroSlides[hero]?.title}
              {heroSlides[hero]?.size ? ` · ${heroSlides[hero].size}` : ""}
            </p>
          </div>
        </section>

        <section id="about" className="section about-intro">
          <div className="section-head">
            <h2>About</h2>
          </div>
          <div className="prose wide">
            <p>
              Ashenafi Zewdu is an artist and architect based in Addis Ababa. He
              works across figurative and non-figurative forms, using different
              materials — especially cowhide, oil, collage, watercolor, and
              mosaic — to connect visual art with architecture.
            </p>
          </div>
        </section>

        <section id="works" className="section">
          <div className="section-head">
            <h2>Works</h2>
            <p>Figurative and non-figurative</p>
          </div>
          <div className="filters" role="tablist" aria-label="Artwork category">
            {(
              [
                ["all", "All"],
                ["figurative", "Figurative works"],
                ["nonfigurative", "Non-figurative works"],
                ["available", "Available works"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                className={filter === id ? "active" : ""}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="gallery">
            {visible.map((work) => (
              <button
                key={work.id}
                className="tile"
                onClick={() => setOpen(work)}
              >
                <span className="tile-frame">
                  <img src={work.src} alt={work.alt} loading="lazy" />
                </span>
                <span className="tile-cap">
                  <strong>{work.title}</strong>
                  <em>
                    {work.medium}
                    {work.size || work.year ? (
                      <>
                        <br />
                        {[work.size, work.year].filter(Boolean).join(" · ")}
                      </>
                    ) : null}
                  </em>
                  {work.availability && (
                    <span className={`status ${work.availability}`}>
                      {work.availabilityNote ??
                        (work.availability === "sold" ? "Sold" : "Available")}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="projects" className="section statement">
          <div className="section-head">
            <h2>Projects</h2>
            <p>Public mosaic works I was involved in</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.id} className="project">
                <div className="project-images">
                  {project.images.map((img) => (
                    <img key={img.src} src={img.src} alt={img.alt} />
                  ))}
                </div>
                <h3>
                  {project.title} <span>{project.year}</span>
                </h3>
              </article>
            ))}
          </div>
        </section>

        <section id="cv" className="section">
          <div className="section-head">
            <h2>CV</h2>
          </div>
          <div className="cv">
            <div>
              <h3>Education</h3>
              <p>
                <strong>MFA</strong> — Ale School of Fine Arts and Design, Addis
                Ababa
              </p>
              <p>
                <strong>BSc Architecture & Urban Planning</strong> — Addis
                College, 2021
              </p>
              <p>
                <strong>BFA Painting</strong> — Ale School of Fine Arts and
                Design, 2020
              </p>
            </div>
            <div>
              <h3>Teaching</h3>
              <p>
                Lecturer, Department of Architecture and Urban Planning, Hawassa
                University
              </p>
            </div>
            <div>
              <h3>Practice</h3>
              <p>
                Painting, mixed media, hide on canvas, and public mosaic
                projects in Addis Ababa.
              </p>
            </div>
          </div>
        </section>

        <section id="biography" className="section about">
          <div className="section-head">
            <h2>Artist biography</h2>
            <p>Born 25 September 1996, Addis Ababa</p>
          </div>
          <div className="about-grid">
            <figure>
              <img src="/ashenafi.jpg" alt="Ashenafi Zewdu" />
            </figure>
            <div className="prose">
              <p>
                Ashenafi Zewdu was born in Addis Ababa, Ethiopia, on 25
                September 1996. He is an aspiring and multitalented artist who
                currently lives in Addis Ababa. To pursue his dream, after
                completing preparatory school in 2014, he joined Addis College
                to study Architecture. In 2015, he extended his studies by
                enrolling at Ale School of Fine Arts and Design to study
                painting.
              </p>
              <p>
                In 2020 he graduated from Ale School of Fine Arts and Design
                with a Bachelor of Fine Arts in Painting. In 2021 he graduated
                from Addis College with a Bachelor of Science in Architecture
                and Urban Planning. He also earned a Master of Fine Arts from
                Ale School of Fine Arts and Design.
              </p>
              <p>
                He currently works as a lecturer in the Department of
                Architecture and Urban Planning at Hawassa University, and lives
                and practices in Addis Ababa.
              </p>
              <p>
                Throughout his artistic process, Ashenafi has sought to connect
                visual art with architecture, exploring social, historical, and
                political themes. He works with a variety of materials,
                including cowhide, and expresses his ideas through both
                figurative and non-figurative forms.
              </p>
              <p className="influences">
                Influences: {influences.join(" · ")}
              </p>
            </div>
          </div>
        </section>

        <section id="statement" className="section statement">
          <div className="section-head">
            <h2>Artist statement</h2>
          </div>
          <div className="prose wide">
            <p>
              Like most artists, to understand my artwork, it is important to
              first understand some background about my life. As a child, I was
              deeply interested in both architecture and visual art. After
              finishing preparatory school, I joined Addis College to study
              Architecture, and later expanded my studies at Ale School of Fine
              Arts to study painting.
            </p>
            <p>
              Through my artistic process, I try to connect visual art and
              architecture while exploring various issues, including social,
              historical, and political themes. I work with different materials,
              especially cowhide, because in Ethiopia it has long been used to
              preserve history in the form of parchment (ብራና), as well as for
              ornamentation, clothing, furniture, and other purposes.
            </p>
            <p>
              Cowhide also symbolizes nature, strength, durability, and a sense
              of cultural identity. For these reasons, it is deeply integrated
              into society, which is why it plays a central role in my work.
            </p>
            <blockquote>
              “Architecture is the biggest unwritten document of history.”
              <cite>Daniel Libeskind</cite>
            </blockquote>
            <p>
              As both an artist and an architect, I do not oppose change;
              however, change should be guided by careful research and should
              never negatively affect historical buildings, monumental
              architecture, or the rights of local communities.
            </p>
            <p>
              To briefly express my ideas, I use different kinds of rectangular
              forms. If we observe architecture around the world, about 95% of
              buildings are based on rectangular shapes, as they are highly
              efficient for using space and arranging furniture. No matter how
              different our houses may appear, they are often fundamentally
              rectangular when viewed from different perspectives.
            </p>
            <p>
              In my artwork, I incorporate architectural views such as
              elevation, section, and plan (top view) to explore various issues.
              I use different compositions in both figurative and non-figurative
              forms to express the relationship between humans and architecture.
            </p>
          </div>
        </section>

        <section id="material" className="section material">
          <div className="material-grid">
            <img
              src="/works/material.jpg"
              alt="Prepared cowhide spread on a workshop floor"
            />
            <div>
              <p className="eyebrow">Materials</p>
              <h2>Different mediums, including cowhide</h2>
              <p>
                I work with different materials, especially cowhide, because in
                Ethiopia it has long been used to preserve history in the form
                of parchment (ብራና), as well as for ornamentation, clothing,
                furniture, and other purposes.
              </p>
            </div>
          </div>
        </section>

        <section id="publications" className="section">
          <div className="section-head">
            <h2>Publications & exhibitions</h2>
          </div>
          {exhibitions.map((show) => (
            <article key={show.title} className="exhibition">
              <h3>
                {show.title} <span>{show.year}</span>
              </h3>
              <div className="exhibition-grid">
                {show.images.map((img) => (
                  <img key={img.src} src={img.src} alt={img.alt} />
                ))}
              </div>
            </article>
          ))}
        </section>

        <section id="contacts" className="section statement">
          <div className="section-head">
            <h2>Contacts</h2>
          </div>
          <div className="prose">
            <p>
              Ashenafi Zewdu
              <br />
              Addis Ababa, Ethiopia
            </p>
            <p className="mute">
              For studio visits and inquiries, please write through the channels
              shared privately.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Ashenafi Zewdu</strong>
          <span>Painting · Architecture · Urban Planning</span>
        </div>
        <p>Addis Ababa, Ethiopia</p>
      </footer>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lb-title"
          onClick={() => setOpen(null)}
        >
          <button className="lb-close" aria-label="Close">
            Close
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.alt} />
            <figcaption>
              <h3 id="lb-title">{open.title}</h3>
              <p>
                {[
                  open.medium,
                  open.size,
                  open.year,
                  open.availability
                    ? (open.availabilityNote ??
                      (open.availability === "sold" ? "Sold" : "Available"))
                    : undefined,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
