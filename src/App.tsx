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
    <main className="home-page">
      {/* HERO SECTION */}

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
            <span>✳</span>
            Let's build a better future, starting now — for Indonesia Emas 2045!
          </div>
        </div>

        <div
          className="hero-art"
          role="img"
          aria-label="Illustration representing financial literacy and saving money"
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

      {/* MOVING VALUES TICKER */}

      <div className="ticker" aria-label="Our values">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, index) => (
            <span key={index}>
              FINANCIAL LITERACY <b>✳</b>{" "}
              YOUTH EMPOWERMENT <b>✳</b>{" "}
              SMART MONEY HABITS <b>✳</b>{" "}
              LEARN · GROW · SHARE <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT US */}

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

        <div className="about-copy">
          <SectionLabel>01 — WHO WE ARE</SectionLabel>

          <h2>
            Meet <span>YouthFunded.</span>
          </h2>

          <p>
            YouthFunded is dedicated to rethinking financial
            education for Indonesia&apos;s youth. We go beyond
            basic calculations to deliver lessons that are
            relatable, creative, and useful in daily life.
          </p>

          <p>
            We believe financial literacy can empower young
            people to understand their choices, develop
            responsible habits, and approach their future
            with greater confidence.
          </p>

          <a className="text-link" href="/mission">
            Get to know our purpose <span>→</span>
          </a>
        </div>
      </section>

{/* VISION AND MISSION */}

      <section className="purpose-section" id="vision-mission">
        <div className="purpose-container">
          <div className="purpose-heading">
            <span className="section-label">
              02 — OUR PURPOSE
            </span>

            <h2>
              Big dreams begin
              <br />
              <span>with small steps.</span>
            </h2>

            <p>
              Every meaningful change starts with a vision
              and grows through the actions we take today.
            </p>
          </div>

          <div className="purpose-grid">
            {/* VISION CARD */}

            <article className="purpose-card vision-card">
              <div className="purpose-card-top">
                <span className="purpose-number">
                  OUR NORTH STAR · 01
                </span>

                <span className="purpose-icon vision-icon">
                  ✳
                </span>
              </div>

              <div className="purpose-card-content">
                <span className="purpose-eyebrow">
                  THE FUTURE WE IMAGINE
                </span>

                <h3>Our Vision</h3>

                <p>
                  To create a generation of Indonesian youth
                  who understand the importance of financial
                  skills, make responsible financial choices,
                  become financially independent, and actively
                  contribute to society.
                </p>
              </div>

              <div
                className="purpose-decoration vision-decoration"
                aria-hidden="true"
              >
                <span className="decoration-star">✳</span>
                <span className="decoration-circle" />
                <span className="decoration-line" />
              </div>

              <span className="purpose-card-index">
                V / 01
              </span>
            </article>

            {/* MISSION CARD */}

            <article className="purpose-card mission-card">
              <div className="purpose-card-top">
                <span className="purpose-number">
                  OUR DAILY PROMISE · 02
                </span>

                <span className="purpose-icon mission-icon">
                  ↗
                </span>
              </div>

              <div className="purpose-card-content">
                <span className="purpose-eyebrow">
                  THE ACTION WE TAKE
                </span>

                <h3>Our Mission</h3>

                <p>
                  To make financial knowledge accessible to all,
                  encourage healthy money habits, reach
                  communities with fewer opportunities, and
                  support young people in working together
                  toward a better future.
                </p>
              </div>

              <div
                className="purpose-decoration mission-decoration"
                aria-hidden="true"
              >
                <span className="mission-doodle">↗</span>
                <span className="mission-doodle-circle" />
              </div>

              <span className="purpose-card-index">
                M / 02
              </span>
            </article>
          </div>

          <div className="purpose-bottom">
            <span>
              LEARN WITH PURPOSE. GROW WITH IMPACT.
            </span>

            <a href="/mission" className="purpose-link">
              Discover our purpose <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}

      <section className="founder-section" id="founder">
        <div className="founder-container">
          {/* SECTION HEADING */}

          <div className="founder-heading">
            <span className="section-label">
              03 — A MESSAGE FROM OUR FOUNDER
            </span>

            <h2>
              A little note,
              <br />
              <span>a bigger purpose.</span>
            </h2>

            <p>
              A personal letter about the dream, the people,
              and the purpose behind YouthFunded.
            </p>
          </div>

          <div className="founder-layout">
            {/* LEFT: FOUNDER SCRAPBOOK */}

            <aside className="founder-visual">
              <div className="scrapbook-label">
                <span>MEET THE FOUNDER</span>
                <span>✳ 001</span>
              </div>

              <div className="scrapbook-board">
                {/* Decorative doodles */}

                <span
                  className="scrapbook-spark scrapbook-spark-one"
                  aria-hidden="true"
                >
                  ✳
                </span>

                <span
                  className="scrapbook-spark scrapbook-spark-two"
                  aria-hidden="true"
                >
                  ✦
                </span>

                {/* Founder photo */}

                <div className="founder-photo-frame">
                  <span className="photo-tape" />

                  <div className="founder-photo">
                    <img
                      src="/images/founder.jpg"
                      alt="Nadine Andini Wirawan, Founder of YouthFunded"
                      loading="lazy"
                    />
                  </div>

                  <div className="photo-caption">
                    <span>A DREAM IN PROGRESS</span>
                    <span>♡</span>
                  </div>
                </div>

                {/* Money illustration */}

                <div
                  className="scrapbook-money"
                  aria-hidden="true"
                >
                  <div className="money-note">
                    <span className="money-symbol">$</span>
                    <span className="money-lines" />
                    <span className="money-caption">
                      SAVE FOR TOMORROW
                    </span>
                  </div>

                  <div className="money-coin coin-one">
                    $
                  </div>

                  <div className="money-coin coin-two">
                    ¢
                  </div>
                </div>

                {/* Book illustration */}

                <div
                  className="scrapbook-book"
                  aria-hidden="true"
                >
                  <div className="book-cover">
                    <span className="book-sun">✳</span>

                    <span className="book-small-title">
                      YOUR LITTLE GUIDE TO
                    </span>

                    <strong>
                      SMART
                      <br />
                      MONEY
                    </strong>

                    <span className="book-cover-bottom">
                      LEARN · GROW · SHARE
                    </span>
                  </div>

                  <div className="book-pages" />
                </div>

                {/* Sticky note */}

                <div className="founder-sticky-note">
                  <span>REMEMBER</span>

                  <p>
                    Small steps
                    <br />
                    still move
                    <br />
                    you forward.
                  </p>

                  <span className="sticky-heart">♡</span>
                </div>

                <span
                  className="scrapbook-doodle"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className="founder-identity">
                <div>
                  <span className="identity-label">
                    THE PERSON BEHIND THE PURPOSE
                  </span>

                  <h3>Nadine Andini Wirawan</h3>

                  <p>
                    Founder · President (2025–2026)
                    <br />
                    Advisor (2026–Present)
                  </p>
                </div>

                <span className="identity-star" aria-hidden="true">
                  ✳
                </span>
              </div>
            </aside>

            {/* RIGHT: NOTEBOOK LETTER */}

            <article className="founder-notebook">
              {/* Notebook binding */}

              <div className="notebook-binding" aria-hidden="true">
                {Array.from({ length: 8 }, (_, index) => (
                  <span key={index} />
                ))}
              </div>

              <div className="notebook-paper">
                <div className="notebook-topline">
                  <span>
                    FROM THE FOUNDER'S DESK
                  </span>

                  <span>
                    YF. / 001
                  </span>
                </div>

                <div className="notebook-title">
                  <span
                    className="notebook-title-star"
                    aria-hidden="true"
                  >
                    ✳
                  </span>

                  <h3>A Note to Our Community</h3>

                  <p>
                    A letter filled with hope, gratitude, and possibility.
                  </p>

                  <div className="notebook-title-line" />
                </div>

                <div className="founder-speech">
                  <p className="letter-greeting">
                    Greetings from YouthFunded!
                  </p>

                  <p>
                    When I founded YouthFunded, I envisioned
                    more than just an organization that teaches
                    financial literacy. I wanted to create a
                    community where young people are empowered
                    to learn, lead, and turn their ideas into
                    meaningful action.
                  </p>

                  <p>
                    I believe that financial literacy is not
                    merely about understanding money, but about
                    having the knowledge, confidence, and
                    opportunities to shape our own futures.
                    Unfortunately, access to financial education
                    remains unequal, and I hope YouthFunded can
                    play a part in bridging that gap by making
                    financial knowledge more accessible, practical,
                    and engaging for everyone.
                  </p>

                  <p>
                    Through YouthFunded, I hope to inspire young
                    people to go beyond simply acquiring knowledge.
                    I encourage you to ask questions, challenge
                    perspectives, take initiative, and most
                    importantly, use what you learn to empower
                    others. Whether through education,
                    entrepreneurship, volunteering, or community
                    projects, I believe that even the smallest
                    contributions can create a lasting impact.
                  </p>

                  <p>
                    My greatest hope is for YouthFunded to become
                    a platform where passionate individuals come
                    together, exchange ideas, and transform their
                    aspirations into real change. I want everyone
                    who becomes part of our journey to recognize
                    that you do not have to wait until you are
                    older to make a difference.
                  </p>

                  <p>
                    As we continue to grow, I invite you to learn
                    with us, collaborate with us, and become part
                    of a generation that is not only financially
                    informed, but also socially responsible and
                    driven to create a better future.
                  </p>

                  <blockquote className="letter-closing-thought">
                    “At YouthFunded, we believe that empowering
                    one young mind today can inspire countless
                    possibilities tomorrow.”
                  </blockquote>
                </div>

                <div className="letter-signoff">
                  <span>With gratitude and hope,</span>

                  <strong>Nadine Andini Wirawan</strong>

                  <p>
                    Founder &amp; President (2025–2026)
                    <br />
                    Advisor (2026–Present), YouthFunded
                  </p>
                </div>

                <div className="notebook-footer">
                  <span>SMALL STEPS, BIG IMPACT.</span>
                  <span>MADE WITH PURPOSE ♡</span>
                </div>
              </div>
            </article>
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

function IntroVideo({
  onFinish,
}: {
  onFinish: () => void;
}) {
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

          finishOnce();
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
      sessionStorage.setItem(
        "youthfunded-intro-played",
        "true"
      );
    } catch {
      // Website tetap berfungsi jika sessionStorage tidak tersedia.
    }

    setShowIntro(false);
  };

  const path =
    window.location.pathname.replace(/\/+$/, "") || "/";

  let page: React.ReactNode;

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

          <footer className="site-footer">
            <BrandLogo footer />

            <p>
              Small steps, big impact. Made for the next generation.
            </p>

            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} YouthFunded.
                All rights reserved.
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
