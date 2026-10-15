import { useState, useRef, useEffect } from "react";
import "./index.css";
import Mission from "./pages/Mission";
import Media from "./pages/Media";

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

      <section
        className="purpose-preview section-pad"
        id="vision-mission"
      >
        <div className="purpose-heading">
          <SectionLabel></SectionLabel>

          <h2>
            A vision for tomorrow,
            <br />
            <span>a mission for today.</span>
          </h2>

          <p>
            Our vision guides the future we hope to create.
            Our mission shapes the steps we take to get there.
          </p>
        </div>

        <div className="purpose-grid">
          <article className="purpose-card vision-card">
            <div className="purpose-card-top">
              <span className="purpose-number">
                01 / THE FUTURE
              </span>

              <span className="purpose-icon" aria-hidden="true">
                ✳
              </span>
            </div>

            <h3>Our Vision</h3>

            <p>
              To create a generation of Indonesian youth who
              understand the importance of financial skills,
              make responsible financial choices, become
              financially independent, and actively contribute
              to society.
            </p>

            <span className="purpose-decoration" aria-hidden="true">
              ✦
            </span>
          </article>

          <article className="purpose-card mission-card">
            <div className="purpose-card-top">
              <span className="purpose-number">
                02 / THE ACTION
              </span>

              <span className="purpose-icon" aria-hidden="true">
                ↗
              </span>
            </div>

            <h3>Our Mission</h3>

            <p>
              To make financial knowledge accessible to all,
              encourage healthy money habits, reach communities
              with fewer opportunities, and support young people
              in working together toward a better future.
            </p>

            <span className="purpose-decoration" aria-hidden="true">
              ✳
            </span>
          </article>
        </div>

        <div className="purpose-footer">
          <p>Want to learn more about what drives us?</p>

          <a className="text-link" href="/mission">
            Explore Our Purpose <span>→</span>
          </a>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}

      <section
        className="founder-section section-pad"
        id="founder"
      >
        {/* Decorative elements */}

        <span
          className="founder-decor founder-decor-star"
          aria-hidden="true"
        >
          ✳
        </span>

        <span
          className="founder-decor founder-decor-sparkle"
          aria-hidden="true"
        >
          ✦
        </span>

        <span
          className="founder-decor founder-decor-coin"
          aria-hidden="true"
        >
          $
        </span>

        {/* Heading */}

        <div className="founder-heading">
          <SectionLabel>A WORDS FROM OUR FOUNDER</SectionLabel>

          <h2>
            Nadine Andini Wirawan
            <br />
            <span>— the founder.</span>
          </h2>

          <p>Greetings from YouthFunded!</p>
        </div>

        {/* Founder content */}

        <div className="founder-layout">
          {/* Founder photo */}

          <div className="founder-photo">
            <img
              src="/images/founder.jpg"
              alt="Founder of YouthFunded"
              loading="lazy"
            />

            <div className="founder-photo-caption">
              <span>THE PERSON BEHIND THE PURPOSE</span>
              <span>YOUTHFUNDED ✳</span>
            </div>
          </div>

          {/* Founder message */}

          <div className="founder-content">
            <span
              className="founder-content-doodle"
              aria-hidden="true"
            >
              ✦
            </span>

            <span
              className="founder-quote-mark"
              aria-hidden="true"
            >
              “
            </span>

            <div className="founder-speech">
              <p>
                When I founded YouthFunded, I envisioned more than
                just an organization that teaches financial literacy.
                I wanted to create a community where young people
                are empowered to learn, lead, and turn their ideas
                into meaningful action.
              </p>

              <p>
                I believe that financial literacy is not merely about
                understanding money, but about having the knowledge,
                confidence, and opportunities to shape our own futures.
                Unfortunately, access to financial education remains
                unequal, and I hope YouthFunded can play a part in
                bridging that gap by making financial knowledge more
                accessible, practical, and engaging for everyone.
              </p>

               <p>
               Through YouthFunded, I hope to inspire young people to 
                  go beyond simply acquiring knowledge. I encourage you to 
                  ask questions, challenge perspectives, take initiative, 
                  and most importantly, use what you learn to empower others.
                  Whether through education, entrepreneurship, volunteering,
                  or community projects, I believe that even the smallest
                  contributions can create a lasting impact.
               </p>

               <p>
                  My greatest hope is for YouthFunded to become a platform 
                  where passionate individuals come together, exchange ideas, 
                  and transform their aspirations into real change. I want
                  everyone who becomes part of our journey to recognize that 
                  you do not have to wait until you are older to make a
                  <strong> difference. </strong> 
               </p>

               <p>
                  As we continue to grow, I invite you to learn with us, 
                  collaborate  with us, and become part of a generation 
                  that is not only financially informed, but also socially 
                  responsible and driven to create a better future.
               </p>

               <p>
                  Because at YouthFunded, we believe that empowering one 
                  young mind today can inspire countless possibilities tomorrow.
               </p>
               <p>
                  With gratitude and hope,
               </p>
            </div>

            {/* Signature */}

            <div className="founder-signature">
              <span>Nadine Andini Wirawan</span>

              <strong>
                Founder, President (2025-2026), Advisor (2026-Present), YouthFunded
              </strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

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

            <p>For Indonesia Emas 2045</p>

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
