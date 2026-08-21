import { useEffect, useState } from "react";
import { works, influences, type Work } from "./data";

export default function App() {
  const [open, setOpen] = useState<Work | null>(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (!open) return;
      const i = works.findIndex((w) => w.id === open.id);
      if (e.key === "ArrowRight") setOpen(works[(i + 1) % works.length]);
      if (e.key === "ArrowLeft")
        setOpen(works[(i - 1 + works.length) % works.length]);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeNav = () => setMenu(false);

  return (
    <>
      <header className="nav">
        <a className="mark" href="#top">
          AZ
        </a>
        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={menu}
          onClick={() => setMenu((m) => !m)}
        >
          <span />
          <span />
        </button>
        <nav className={menu ? "open" : ""}>
          <a href="#works" onClick={closeNav}>
            Works
          </a>
          <a href="#about" onClick={closeNav}>
            Biography
          </a>
          <a href="#statement" onClick={closeNav}>
            Statement
          </a>
          <a href="#material" onClick={closeNav}>
            Material
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Addis Ababa · Hawassa</p>
          <h1>
            Ashenafi
            <em> Zewdu</em>
          </h1>
          <p className="lede">
            Artist and architect working in cowhide, connecting visual art with
            architecture through social, historical, and political form.
          </p>
          <div className="hero-meta">
            <span>BFA Painting · MFA</span>
            <span>BSc Architecture & Urban Planning</span>
            <span>Lecturer, Hawassa University</span>
          </div>
        </section>

        <section id="works" className="section">
          <div className="section-head">
            <h2>Selected works</h2>
            <p>Hide on canvas, 2020–2026</p>
          </div>
          <div className="gallery">
            {works.map((work) => (
              <button
                key={work.id}
                className={`tile${work.featured ? " featured" : ""}`}
                onClick={() => setOpen(work)}
              >
                <img src={work.src} alt={work.alt} loading="lazy" />
                <span className="tile-cap">
                  <strong>{work.title}</strong>
                  <em>{work.size}</em>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
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
                Architecture and Urban Planning at Hawassa University.
              </p>
              <p>
                Throughout his artistic process, Ashenafi has sought to connect
                visual art with architecture, exploring social, historical, and
                political themes. He works with a variety of materials, with a
                particular focus on cowhide, and expresses his ideas through
                both figurative and non-figurative forms.
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
              decoration, ornamentation, clothing, furniture, and other
              purposes.
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
              alt="Prepared cowhide spread on a workshop floor, the primary material of the practice"
            />
            <div>
              <p className="eyebrow">Process</p>
              <h2>Cowhide as archive</h2>
              <p>
                Hide is cut, pieced, and composed like a city plan: rectangles
                for walls, elevations, and monuments. Hair-on cowhide carries
                the memory of parchment (ብራና) while remaining a living,
                architectural surface.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Ashenafi Zewdu</strong>
          <span>Painting · Architecture · Urban Planning</span>
        </div>
        <p>Addis Ababa, Ethiopia · Hawassa University</p>
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
                {open.medium}
                <span> · </span>
                {open.size}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
