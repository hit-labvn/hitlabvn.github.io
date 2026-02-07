"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const progressBar = document.querySelector<HTMLDivElement>(".progress-bar");
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const animateCount = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const duration = 1200;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value.toString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((counter) => observer.observe(counter));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="progress-bar" aria-hidden="true"></div>

      <header className="site-header">
        <nav className="nav">
          <a className="logo" href="#">
            <span className="logo-mark" aria-hidden="true"></span>
            HITLAB
          </a>
          <div className="nav-links">
            <a href="#">Home</a>
            {/* <a href="#expertise">Expertise</a>
            <a href="#service">Service</a>
            <a href="#projects">Projects</a> */}
            <a href="#about">About us</a>
            <a href="#contact">Contact</a>
            <a className="btn btn-small" href="tel:+84843042307">
              +84 84 304 2307
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Software development that you can trust</p>
            <h1>
              Build reliable products, fast.
            </h1>
            <div className="hero-actions">
            </div>
          </div>
        </section>

        <section id="expertise" className="section">
          <div className="section-header">
            <p className="eyebrow">Expertise</p>
            <h2>Engineering that scales with your business.</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="7" y="7" width="10" height="10" rx="1" />
                  <path d="M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" />
                  <path d="M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3" />
                </svg>
              </div>
              <h3>Embedded Systems</h3>
              <p>
              </p>
            </article>
            <article className="card">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>AI & Computer Vision</h3>
              <p>

              </p>
            </article>
            <article className="card">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="12" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <h3>Desktop application</h3>
              <p>
              </p>
            </article>
          </div>
        </section>

        {/* <section id="service" className="section alt">
          <div className="section-header">
            <p className="eyebrow">Service</p>
            <h2>End-to-end delivery, tailored to your goals.</h2>
            <p>
              From discovery and design to implementation and optimization, we
              build with clarity, speed, and accountability.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h2>Recent work across web, mobile, and data platforms.</h2>
            <p>
              A selection of projects that highlight our execution velocity and
              quality standards.
            </p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <p className="eyebrow">About us</p>
            <h2>Senior teams, embedded for impact.</h2>
            <p>
              HITLAB brings focused teams of engineers and strategists to help
              ambitious companies ship with confidence.
            </p>
          </div>
        </section>


        <section id="testimonials" className="section alt">
          <div className="section-header">
            <p className="eyebrow">Proof</p>
            <h2>Trusted by teams that ship mission-critical software.</h2>
            <p>
              We align with leadership, embed with product teams, and focus on
              measurable outcomes.
            </p>
          </div>
          <div className="testimonial-grid">
            <article className="testimonial">
              <div className="stars" aria-label="5 star rating">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>
                “HITLAB helped us rebuild our platform without slowing down our
                roadmap. The delivery cadence and technical rigor were
                unmatched.”
              </p>
              <div className="person">
                <span className="avatar"></span>
                <div>
                  <strong>Rina Patel</strong>
                  <span>VP Engineering, NovaBank</span>
                </div>
              </div>
            </article>
            <article className="testimonial">
              <div className="stars" aria-label="5 star rating">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>
                “We trusted HITLAB with our patient experience stack. The team
                delivered reliability and compliance without sacrificing speed.”
              </p>
              <div className="person">
                <span className="avatar"></span>
                <div>
                  <strong>Marco Silva</strong>
                  <span>CTO, Pulse Health</span>
                </div>
              </div>
            </article>
            <article className="testimonial">
              <div className="stars" aria-label="5 star rating">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>
                “Our logistics platform gained observability, faster releases,
                and a much stronger engineering culture.”
              </p>
              <div className="person">
                <span className="avatar"></span>
                <div>
                  <strong>Jules Fischer</strong>
                  <span>Director of Product, AtlasWare</span>
                </div>
              </div>
            </article>
          </div>
        </section> */}

        <section className="cta" id="contact">
          <div>
            <h2>Ready to build with HITLAB?</h2>
            <div className="cta-form">
              <div className="cta-inline">
                <p className="cta-note">Email us to get started:</p>
                <a className="cta-email" href="mailto:inquiry@hit-lab.vn">
                  inquiry@hit-lab.vn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>HITLAB</strong>
          <p>Software development</p>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          {/* <a href="#expertise">Expertise</a>
          <a href="#service">Service</a>
          <a href="#projects">Projects</a>
          <a href="#about">About us</a> */}
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}
