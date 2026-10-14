import { useState, useRef, useEffect } from "react";
import "./index.css";
import Mission from "./pages/Mission";

/* ========================================
   SECTION LABEL
======================================== */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="section-label">{children}</p>;
}

/* ========================================
   BRAND LOGO
======================================== */

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={footer ? "footer-brand" : "brand"}
      href="/"
      aria-label="YouthFunded home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: footer ? "0 0 160px" : "0 0 150px",
        width: footer ? "160px" : "150px",
        minWidth: footer ? "160px" : "150px",
        height: "65px",
        position: "relative",
        zIndex: 10,
        overflow: "visible",
        textDecoration: "none",
      }}
    >
      <img
        src="/images/youthfunded-logo.png"
        alt="YouthFunded Logo"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          objectPosition: "left center",
          opacity: 1,
          visibility: "visible",
          flexShrink: 0,
        }}
      />
    </a>
  );
}

/* ========================================
   HOME PAGE
======================================== */

function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <span className="decor decor-star">✳</span>
        <span className="decor decor-sparkle">✦</span>
        <span className="decor decor-coin coin-one">$</span>
        <span className="decor decor-coin coin-two">¢</span>

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            YOUTH-LED · FINANCIAL LITERACY
          </div>

          <h1>
            Small Steps,
            <br />
            <span>Big Impact.</span>
          </h1>

          <p className="hero-description">
            Making financial knowledge easier to understand,
            one young mind at a time. Let’s build a generation
            that feels confident about money.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#about">
              Discover YouthFunded <span>↗</span>
            </a>

            <a className="text-link" href="/mission">
              Explore our purpose →
            </a>
          </div>

          <div className="hero-note">
            <span>✳</span> Let's build a better future, starting now — for Indonesia Emas 2045!
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Financial literacy illustration"
        >
          <div className="art-sun" />

          <div className="art-label label-top">
            YOUR MONEY, YOUR FUTURE
          </div>

          <div className="art-book">
            <span className="book-small">THE LITTLE GUIDE TO</span>

            <strong>
              SMART
              <br />
              MONEY
            </strong>

            <span className="book-doodle">✳ $ ✳</span>
          </div>

          <div className="art-coin coin-a">$</div>
          <div className="art-coin coin-b">$</div>
          <div className="art-coin coin-c">¢</div>

          <div className="piggy">
            <div className="pig-ear" />
            <div className="pig-eye" />

            <div className="pig-snout">
              <i />
              <i />
            </div>

            <div className="pig-leg leg-left" />
            <div className="pig-leg leg-right" />
            <div className="pig-tail">〰</div>
          </div>

          <div className="art-caption">
            <span>01 / YOUR FINANCIAL JOURNEY</span>
            <span>Start where you are ✦</span>
          </div>
        </div>

        <a className="scroll-cue" href="#about">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </section>

      <div className="ticker" aria-label="Our values">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, index) => (
            <span key={index}>
              FINANCIAL LITERACY <b>✳</b> YOUTH EMPOWERMENT <b>✳</b>{" "}
              SMART MONEY HABITS <b>✳</b> LEARN · GROW · SHARE <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      <section className="about-section section-pad" id="about">
        <div className="about-visual">
          <div className="paper-note">
            <span className="tape tape-one" />

            <SectionLabel>A LITTLE INTRODUCTION</SectionLabel>

            <h2>
              Discover
              <br />
              <span>YouthFunded</span>
            </h2>

            <p>
              YouthFunded is a youth-driven, non-profit organization
              creating an educational space where young people can
              explore financial literacy together.
            </p>

            <div className="note-stamp">
              LEARN
              <br />
              TOGETHER!
            </div>

            <span className="note-doodle">↗ $ ✳</span>
          </div>

          <span className="floating-star">✳</span>
          <span className="floating-heart">♡</span>
        </div>

{/* 1. HERO */}
<section className="hero" id="home">
  {/* Pertahankan seluruh kode hero kamu yang sekarang */}
</section>

{/* TICKER */}
<div className="ticker" aria-label="Our values">
  {/* Pertahankan ticker yang sekarang */}
</div>

{/* 2. ABOUT US */}
<section className="about-section section-pad" id="about">
  {/* Perkenalan singkat YouthFunded */}
</section>

{/* 3. OUR VISION & MISSION */}
<section className="purpose-preview section-pad" id="vision-mission">
  <div className="purpose-heading">
    <SectionLabel>02 — OUR PURPOSE</SectionLabel>
    <h2>
      A vision for tomorrow,
      <br />
      <span>a mission for today.</span>
    </h2>
    <p>
      Discover the vision that guides us and the mission
      that brings our purpose to life.
    </p>
  </div>

  <div className="purpose-grid">
    <article className="purpose-card vision-card">
      <span className="purpose-number">01 / THE FUTURE</span>
      <h3>Our Vision</h3>
      <p>
        To create a generation of Indonesian youth who understand
        the importance of financial skills, make responsible
        financial decisions, achieve financial independence,
        and actively contribute to society.
      </p>
    </article>

    <article className="purpose-card mission-card">
      <span className="purpose-number">02 / THE ACTION</span>
      <h3>Our Mission</h3>
      <p>
        To make financial knowledge accessible, encourage healthy
        money habits, reach communities with fewer opportunities,
        and empower young people to work together toward a better future.
      </p>
    </article>
  </div>

  <a className="text-link" href="/mission">
    Explore our purpose in detail <span>→</span>
  </a>
</section>

{/* 4. FOUNDER'S MESSAGE */}
<section className="founder-section section-pad" id="founder">
  <div className="founder-layout">
    <div className="founder-photo">
      <img
        src="/images/founder.jpg"
        alt="Founder of YouthFunded"
        loading="lazy"
      />
      <span className="founder-photo-caption">
        THE PERSON BEHIND THE PURPOSE
      </span>
    </div>

    <div className="founder-content">
      <SectionLabel>03 — A MESSAGE FROM OUR FOUNDER</SectionLabel>

      <h2>
        A few words,
        <br />
        <span>from the heart.</span>
      </h2>

      <div className="founder-speech">
        {/* Speech lengkap founder akan dimasukkan di sini */}
      </div>

      <div className="founder-signature">
        <span>With purpose,</span>
        <strong>Founder of YouthFunded</strong>
      </div>
    </div>
  </div>
</section>

/* ========================================
   PLACEHOLDER PAGES
======================================== */

function PlaceholderPage({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <main className="section-pad">
      <section className="section-heading">
        <div>
          <SectionLabel>
            {number} — {label}
          </SectionLabel>

          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </section>
    </main>
  );
}

/* ========================================
   INTRO VIDEO
======================================== */

function IntroVideo({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef(false);

  const finishOnce = () => {
    if (finishedRef.current) return;

    finishedRef.current = true;
    onFinish();
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error("Intro video gagal autoplay:", error);
      }
    };

    void playVideo();
  }, []);

  return (
    <div className="intro-screen">
      <video
        ref={videoRef}
        className="intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finishOnce}
        onError={() => {
          console.error(
            "Video intro tidak dapat dimuat. Periksa file public/intro-youthfunded.mp4."
          );
        }}
      >
        <source
          src="/intro-youthfunded.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

/* ========================================
   MAIN APP
======================================== */

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return (
        sessionStorage.getItem("youthfunded-intro-played") !== "true"
      );
    } catch {
      return true;
    }
  });

  const finishIntro = () => {
    try {
      sessionStorage.setItem("youthfunded-intro-played", "true");
    } catch {
      // Website tetap dapat digunakan jika sessionStorage tidak tersedia.
    }

    setShowIntro(false);
  };

  const path =
    window.location.pathname.replace(/\/+$/, "") || "/";

  let page;

  switch (path) {
    case "/":
      page = <Home />;
      break;

    case "/mission":
      page = <Mission />;
      break;

    case "/articles":
      page = (
        <PlaceholderPage
          number="02"
          label="THE MONEY NOTEBOOK"
          title="Articles & Insights"
          description="Explore accessible financial literacy resources and ideas for young people. Article content will be added here."
        />
      );
      break;

    case "/events":
      page = (
        <PlaceholderPage
          number="03"
          label="SAVE THE DATE"
          title="Events & Activities"
          description="Discover upcoming learning sessions, community activities, and opportunities to grow together."
        />
      );
      break;

    case "/team":
      page = (
        <PlaceholderPage
          number="04"
          label="THE PEOPLE BEHIND THE PURPOSE"
          title="Meet Our Team"
          description="Meet the young people behind YouthFunded. Team profiles and introductions will be added here."
        />
      );
      break;

    case "/media":
      page = (
        <PlaceholderPage
          number="05"
          label="KEEP IN TOUCH"
          title="Our Media"
          description="Follow our journey, explore our activities, and connect with the YouthFunded community."
        />
      );
      break;

    default:
      page = (
        <PlaceholderPage
          number="404"
          label="PAGE NOT FOUND"
          title="Looks like you took a little detour."
          description="The page you are looking for may not exist yet."
        />
      );
  }

  return (
    <>
      {showIntro ? (
        <IntroVideo onFinish={finishIntro} />
      ) : (
        <>
          <header className="site-header">
            <BrandLogo />

            <nav
              className="nav-links"
              aria-label="Main navigation"
            >
              <a href="/">Home</a>
              <a href="/mission">Our Purpose</a>
              <a href="/articles">Articles</a>
              <a href="/events">Events</a>
              <a href="/team">Our Team</a>
            </nav>

            <a className="nav-cta" href="/media">
              Let’s Connect <span>↗</span>
            </a>
          </header>

          {page}

          {/* FOOTER */}
          <footer className="site-footer">
            <BrandLogo footer />

            <p>
              Small steps, big impact. Made for the next generation.
            </p>

            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} YouthFunded. All rights reserved.
              </span>

              <a href="/">Back to Home ↑</a>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
