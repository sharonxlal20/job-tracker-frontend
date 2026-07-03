import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingNavbar from '../components/LandingNavbar';
import Reveal from '../components/Reveal';
import './Landing.css';

function BoardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="6" height="16" rx="1" />
      <rect x="10.5" y="4" width="6" height="10" rx="1" />
      <rect x="18" y="4" width="3" height="7" rx="1" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function StampIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="12" rx="1.5" strokeDasharray="3 2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="14 6 21 6 21 13" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.73.8 1.17 1.82 1.17 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function DoodleBlob({ color, className }) {
  return (
    <svg viewBox="0 0 200 200" className={`doodle-blob ${className || ''}`} aria-hidden="true">
      <path
        fill={color}
        d="M47.7,-58.5C60.7,-49.4,69.6,-33.6,72.6,-16.7C75.6,0.2,72.7,18.2,63.8,32.8C54.9,47.4,40,58.6,23.1,64.8C6.2,71,-12.7,72.2,-29.4,66.3C-46.1,60.4,-60.6,47.4,-68.1,31.2C-75.6,15,-76.1,-4.4,-70,-21.3C-63.9,-38.2,-51.2,-52.6,-36.2,-61.3C-21.2,-70,-10.6,-73,3.9,-78.1C18.4,-83.2,34.7,-67.6,47.7,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function DoodleRing({ color, className }) {
  return (
    <svg viewBox="0 0 100 100" className={`doodle-ring ${className || ''}`} aria-hidden="true">
      <circle cx="50" cy="50" r="36" fill="none" stroke={color} strokeWidth="2.5" strokeDasharray="4 6" />
    </svg>
  );
}

function DoodleSquiggle({ color, className }) {
  return (
    <svg viewBox="0 0 120 24" className={`doodle-squiggle ${className || ''}`} aria-hidden="true">
      <path d="M2 12 Q 17 2, 32 12 T 62 12 T 92 12 T 118 12" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function DoodleSpark({ color, className }) {
  return (
    <svg viewBox="0 0 40 40" className={`doodle-spark ${className || ''}`} aria-hidden="true">
      <path d="M20 3 L23 17 L37 20 L23 23 L20 37 L17 23 L3 20 L17 17 Z" fill={color} />
    </svg>
  );
}

const FEATURES = [
  { icon: BoardIcon, title: 'Kanban pipeline', text: 'See every application at every stage — Applied, Interview, Offer, Rejected — laid out in one board.' },
  { icon: SearchIcon, title: 'Search, filter & sort', text: 'Find any application by company or role, filter by status, sort however makes sense to you.' },
  { icon: StampIcon, title: 'Stamped status badges', text: "Every card gets a hand-stamped badge for its status — a small visual signature, not a generic pill." },
  { icon: TrendingIcon, title: 'See your journey take shape', text: 'Every stage move is a milestone — watch applications shift from Applied to Offer, and see how far you\'ve actually come.' },
];

const STATS = [
  { value: '32+', label: 'Avg. applications before an offer', color: 'var(--applied)' },
  { value: '44 days', label: 'Avg. time-to-hire', color: 'var(--interview)' },
  { value: '2-3%', label: 'Applications that reach interview', color: 'var(--offer)' },
  { value: '18×', label: 'More likely to get hired via referral', color: 'var(--rejected)' },
];

const QUOTES = [
  { text: 'It always seems impossible until it is done.', author: 'Nelson Mandela' },
  { text: 'You are braver than you believe, stronger than you seem, and smarter than you think.', author: 'A.A. Milne' },
  { text: 'Fall seven times, stand up eight.', author: 'Japanese Proverb' },
];

function FeatureCarousel({ features }) {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const len = features.length;

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActive((prev) => (prev + 1) % len);
      }
    }, 3500);
    return () => clearInterval(id);
  }, [len]);

  const goTo = (i) => setActive(((i % len) + len) % len);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  const getOffset = (i) => {
    let diff = i - active;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  return (
    <div
      className="feature-carousel"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <button type="button" className="feature-carousel-arrow feature-carousel-arrow-left" onClick={prev} aria-label="Previous feature">
        <svg width="26" height="32" viewBox="0 0 26 32" fill="none">
          <path d="M23 2 L3 16 L23 30 Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" fill="none" />
        </svg>
      </button>

      <div className="feature-carousel-stage">
        {features.map(({ icon: Icon, title, text }, i) => {
          const offset = getOffset(i);
          const abs = Math.abs(offset);
          const clamped = Math.max(-2, Math.min(2, offset));
          const translate = clamped * 390;
          const scale = clamped === 0 ? 1.08 : abs === 1 ? 0.88 : 0.72;
          const isDark = document.documentElement.getAttribute("data-theme") === "dark";
          const opacity = clamped === 0 ? 1 : abs === 1 ? (isDark ? 0.55 : 0.82) : 0;
          const brightness = isDark ? (clamped === 0 ? 1 : 0.5) : 1;

          return (
            <div
              key={title}
              className="feature-card feature-carousel-card"
              style={{
                transform: `translateX(calc(-50% + ${translate}px)) scale(${scale})`,
                opacity,
                filter: `brightness(${brightness})`,
                zIndex: 10 - abs,
                pointerEvents: clamped === 0 ? 'auto' : 'none',
              }}
              aria-hidden={clamped !== 0}
            >
              <div className="feature-icon"><Icon /></div>
              <div className="feature-title">{title}</div>
              <div className="feature-text">{text}</div>
            </div>
          );
        })}
      </div>

      <button type="button" className="feature-carousel-arrow feature-carousel-arrow-right" onClick={next} aria-label="Next feature">
        <svg width="26" height="32" viewBox="0 0 26 32" fill="none">
          <path d="M3 2 L23 16 L3 30 Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" fill="none" />
        </svg>
      </button>

      <div className="feature-carousel-dots">
        {features.map((f, i) => (
          <button
            key={f.title}
            type="button"
            className={`feature-carousel-dot ${i === active ? 'is-active' : ''}`}
            aria-label={`Show ${f.title}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="landing">
      <LandingNavbar />

      <section className="landing-hero">
        <DoodleBlob color="var(--applied)" className="doodle-hero-1" />
        <DoodleRing color="var(--interview)" className="doodle-hero-2" />
        <div className="landing-hero-text">
          <h1>Every application,<br />stamped and sorted.</h1>
          <p>A colorful Kanban board for tracking job applications — from first apply to final offer, one stamp at a time.</p>
          <div className="landing-hero-actions">
            <Link to="/signup" className="landing-cta-primary">Get started</Link>
            <Link to="/login" className="landing-cta-secondary">Log in</Link>
          </div>
        </div>

        <div className="landing-hero-visual">
          <div className="mini-board-frame">
            <div className="mini-board-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="mini-board">
              <div className="mini-column">
                <div className="mini-column-label"><span className="mini-dot" style={{ background: 'var(--applied)' }}></span>Applied</div>
                <div className="mini-card">
                  <div className="mini-card-title">Google</div>
                  <div className="mini-card-role">SDE Intern</div>
                  <div className="mini-card-stamp" style={{ borderColor: 'var(--applied)', color: 'var(--applied-text)' }}>applied</div>
                </div>
                <div className="mini-card">
                  <div className="mini-card-title">Amazon</div>
                  <div className="mini-card-role">Backend Dev</div>
                  <div className="mini-card-stamp" style={{ borderColor: 'var(--applied)', color: 'var(--applied-text)' }}>applied</div>
                </div>
              </div>
              <div className="mini-column">
                <div className="mini-column-label"><span className="mini-dot" style={{ background: 'var(--interview)' }}></span>Interview</div>
                <div className="mini-card">
                  <div className="mini-card-title">Microsoft</div>
                  <div className="mini-card-role">Backend Dev</div>
                  <div className="mini-card-stamp" style={{ borderColor: 'var(--interview)', color: 'var(--interview-text)' }}>interview</div>
                </div>
              </div>
              <div className="mini-column">
                <div className="mini-column-label"><span className="mini-dot" style={{ background: 'var(--offer)' }}></span>Offer</div>
                <div className="mini-card">
                  <div className="mini-card-title">Flipkart</div>
                  <div className="mini-card-role">Frontend Dev</div>
                  <div className="mini-card-stamp" style={{ borderColor: 'var(--offer)', color: 'var(--offer-text)' }}>offer</div>
                </div>
              </div>
              <div className="mini-column">
                <div className="mini-column-label"><span className="mini-dot" style={{ background: 'var(--rejected)' }}></span>Rejected</div>
                <div className="mini-card mini-card-faded">
                  <div className="mini-card-title">Uber</div>
                  <div className="mini-card-role">HR</div>
                  <div className="mini-card-stamp" style={{ borderColor: 'var(--rejected)', color: 'var(--rejected-text)' }}>rejected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="landing-stats-section" id="stats">
          <DoodleSquiggle color="var(--offer)" className="doodle-stats-1" />
          <DoodleSpark color="var(--rejected)" className="doodle-stats-2" />  
            <h2 className="landing-stats-heading">The job hunt is a numbers game</h2>
            <div className="landing-stats">
                {STATS.map((stat) => (
                    <div className="stat-item" key={stat.label}>
                        <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
            <p className="landing-stats-note">All the more reason every application deserves a proper place on your board.</p>
        </section>
      </Reveal>

      <section className="landing-features" id="features">
        <Reveal>
          <h2>Everything your job hunt actually needs</h2>
        </Reveal>
        <Reveal>
          <FeatureCarousel features={FEATURES} />
        </Reveal>
      </section>

      <section className="landing-quotes" id="motivation">
        <DoodleBlob color="var(--brand)" className="doodle-quotes-1" />
        <Reveal>
          <h2>For the days that feel discouraging</h2>
        </Reveal>
        <div className="quotes-grid">
          {QUOTES.map((q, i) => (
            <Reveal key={q.author} delay={i * 80}>
              <div className="quote-card">
                <div className="quote-mark">"</div>
                <p className="quote-text">{q.text}</p>
                <div className="quote-author">— {q.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="landing-footer">
  <DoodleRing color="var(--offer)" className="doodle-footer-1" />
  <DoodleSpark color="var(--interview)" className="doodle-footer-2" />

  <div className="landing-footer-top">
    <div className="landing-footer-brand-col">
      <div className="landing-footer-brand">job tracker</div>
      <p className="landing-footer-copy">Every application, stamped and sorted</p>
      <div className="landing-footer-social">
        <a href="https://github.com/sharonxlal20" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
        <a href="https://linkedin.com/in/sharonabhisheklal" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
      </div>
    </div>

    <div className="landing-footer-col">
      <div className="landing-footer-heading">Explore</div>
      <a href="#features">Features</a>
      <a href="#stats">Stats</a>
      <a href="#motivation">Motivation</a>
    </div>

    <div className="landing-footer-cta-col">
      <div className="landing-footer-heading">Ready when you are</div>
      <p className="landing-footer-copy">Your next offer starts with the first application you track.</p>
      <Link to="/signup" className="landing-footer-cta">Get started — it's free</Link>
    </div>
  </div>

  <div className="landing-footer-bottom">
    <span>© {new Date().getFullYear()} job tracker</span>
    <span>built by Sharon</span>
  </div>
</footer>
    </div>
  );
}

export default Landing;