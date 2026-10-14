import React from "react";

const colors = {
  navy: "#26364a",
  cream: "#fffaf0",
  lime: "#C6D95B",
  blue: "#B8E3F5",
  white: "#ffffff",
  muted: "#667487",
};

const container: React.CSSProperties = {
  width: "min(1080px, 88%)",
  margin: "0 auto",
};

const eyebrow: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 800,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  margin: "0 0 12px",
};

const heading: React.CSSProperties = {
  fontFamily: "'Fredoka', sans-serif",
  fontSize: "clamp(25px, 3.2vw, 34px)",
  lineHeight: 1.25,
  fontWeight: 600,
  margin: "0 0 12px",
};

/* =====================================
   MONEY ILLUSTRATION
===================================== */

function MoneyIllustration() {
  return (
    <div
      className="yf-money-scene"
      role="img"
      aria-label="Illustration of money and coins"
    >
      <div className="yf-money-circle" />

      <span className="yf-money-spark yf-spark-one">✳</span>
      <span className="yf-money-spark yf-spark-two">✦</span>

      <div className="yf-banknote yf-banknote-back">
        <div className="yf-banknote-inner">
          <span className="yf-currency">$</span>
          <span className="yf-money-dot dot-one" />
          <span className="yf-money-dot dot-two" />
        </div>
      </div>

      <div className="yf-banknote yf-banknote-front">
        <div className="yf-banknote-inner">
          <span className="yf-currency">$</span>
          <span className="yf-money-dot dot-three" />
          <span className="yf-money-dot dot-four" />
        </div>
      </div>

      <div className="yf-coin yf-coin-one">$</div>
      <div className="yf-coin yf-coin-two">¢</div>
    </div>
  );
}

/* =====================================
   SDG CARD
===================================== */

function SDGCard({
  number,
  title,
  image,
  description,
  color,
}: {
  number: string;
  title: string;
  image: string;
  description: string;
  color: string;
}) {
  return (
    <article className="yf-sdg-card">
      <div className="yf-sdg-header">
        <img
          src={image}
          alt={`SDG ${number}`}
          className="yf-sdg-icon"
        />

        <span
          className="yf-sdg-number"
          style={{ background: color }}
        >
          SDG {number}
        </span>
      </div>

      <h3 className="yf-card-title">{title}</h3>

      <p className="yf-card-description">{description}</p>
    </article>
  );
}

/* =====================================
   MISSION CARD
===================================== */

function MissionCard({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <article className="yf-mission-card">
      <div
        className="yf-mission-icon"
        style={{ background: color }}
      >
        <img src={icon} alt="" />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}

/* =====================================
   MAIN PAGE
===================================== */

export default function Mission() {
  return (
    <main className="yf-purpose-page">
      <style>{`
        .yf-purpose-page {
          background: ${colors.cream};
          color: ${colors.navy};
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          overflow-x: clip;
        }

        .yf-purpose-page *,
        .yf-purpose-page *::before,
        .yf-purpose-page *::after {
          box-sizing: border-box;
        }

        /* HERO */

        .yf-hero {
          padding: clamp(40px, 6vw, 65px) 0;
        }

        .yf-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 35px;
        }

        .yf-hero h1 {
          font-family: 'Fredoka', sans-serif;
          font-size: clamp(35px, 4.5vw, 49px);
          line-height: 1.12;
          letter-spacing: -0.7px;
          margin: 0 0 18px;
          font-weight: 600;
        }

        .yf-hero-description {
          max-width: 430px;
          color: ${colors.muted};
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 20px;
        }

        .yf-hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          background: ${colors.lime};
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
        }

        /* MONEY */

        .yf-money-scene {
          position: relative;
          width: 100%;
          max-width: 400px;
          height: 290px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          isolation: isolate;
        }

        .yf-money-circle {
          position: absolute;
          width: min(74%, 260px);
          aspect-ratio: 1;
          border-radius: 50%;
          background: #e6edbd;
          z-index: -1;
        }

        .yf-banknote {
          position: absolute;
          width: 185px;
          height: 108px;
          border: 2px solid ${colors.navy};
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 4px 5px 0 ${colors.navy};
        }

        .yf-banknote-back {
          background: ${colors.blue};
          transform: rotate(-17deg) translate(-22px, -12px);
        }

        .yf-banknote-front {
          background: ${colors.lime};
          transform: rotate(12deg) translate(20px, 17px);
        }

        .yf-banknote-inner {
          position: relative;
          width: 85%;
          height: 76%;
          border: 1.5px dashed ${colors.navy};
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .yf-currency {
          font-family: 'Fredoka', sans-serif;
          font-size: 48px;
          font-weight: 600;
          line-height: 1;
        }

        .yf-money-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${colors.navy};
        }

        .dot-one { top: 7px; left: 7px; }
        .dot-two { right: 7px; bottom: 7px; }
        .dot-three { top: 7px; right: 7px; }
        .dot-four { bottom: 7px; left: 7px; }

        .yf-coin {
          position: absolute;
          width: 57px;
          height: 57px;
          border-radius: 50%;
          border: 2px solid ${colors.navy};
          background: #f1c96c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 600;
          box-shadow: 3px 4px 0 ${colors.navy};
        }

        .yf-coin-one {
          right: 6%;
          top: 12%;
        }

        .yf-coin-two {
          left: 7%;
          bottom: 11%;
          width: 46px;
          height: 46px;
          font-size: 20px;
          background: ${colors.cream};
        }

        .yf-money-spark {
          position: absolute;
          font-size: 24px;
          font-weight: 700;
          color: ${colors.navy};
        }

        .yf-spark-one { top: 10%; left: 12%; }
        .yf-spark-two { right: 9%; bottom: 12%; color: #7c9634; }

        /* SECTION */

        .yf-section {
          padding: clamp(43px, 6vw, 65px) 0;
        }

        .yf-section-intro {
          max-width: 570px;
          margin-bottom: 26px;
        }

        .yf-section-description {
          color: ${colors.muted};
          font-size: 13px;
          line-height: 1.85;
          margin: 0;
        }

        /* SDG */

        .yf-sdg-section {
          background: #f4f1e5;
        }

        .yf-sdg-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .yf-sdg-card {
          background: ${colors.white};
          border: 1px solid #26364a12;
          border-radius: 16px;
          padding: 23px;
          min-width: 0;
          transition: transform 180ms ease;
        }

        .yf-sdg-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 19px;
        }

        .yf-sdg-icon {
          width: 62px;
          height: 62px;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
          border-radius: 4px;
        }

        .yf-sdg-number {
          padding: 7px 10px;
          border-radius: 7px;
          font-size: 10px;
          font-weight: 800;
        }

        .yf-card-title {
          font-family: 'Fredoka', sans-serif;
          font-size: clamp(20px, 2.5vw, 24px);
          line-height: 1.3;
          margin: 0 0 9px;
          font-weight: 600;
        }

        .yf-card-description {
          color: ${colors.muted};
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
        }

        /* VISION */

        .yf-vision-layout {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 35px;
          align-items: center;
        }

        .yf-vision-quote {
          background: ${colors.navy};
          color: ${colors.cream};
          padding: 28px;
          border-radius: 18px;
        }

        .yf-vision-quote-mark {
          font-size: 28px;
          color: ${colors.lime};
          margin-bottom: 12px;
        }

        .yf-vision-quote p {
          font-family: 'Fredoka', sans-serif;
          font-size: clamp(21px, 2.5vw, 26px);
          line-height: 1.5;
          margin: 0;
        }

        /* MISSION */

        .yf-mission-section {
          background: #eaf4f5;
        }

        .yf-mission-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .yf-mission-card {
          background: ${colors.white};
          border: 1px solid #26364a12;
          border-radius: 16px;
          padding: 21px;
          min-width: 0;
          transition: transform 180ms ease;
        }

        .yf-mission-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          padding: 10px;
          margin-bottom: 17px;
        }

        .yf-mission-icon img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .yf-mission-card h3 {
          font-family: 'Fredoka', sans-serif;
          font-size: 18px;
          line-height: 1.4;
          margin: 0 0 9px;
          font-weight: 600;
        }

        .yf-mission-card p {
          color: ${colors.muted};
          font-size: 12px;
          line-height: 1.85;
          margin: 0;
        }

        /* BELIEF */

        .yf-belief {
          text-align: center;
          max-width: 700px;
        }

        .yf-belief-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${colors.lime};
          border-radius: 100px;
          padding: 11px 16px;
          margin-top: 22px;
          font-size: 11px;
          font-weight: 800;
        }

        @media (hover: hover) {
          .yf-sdg-card:hover,
          .yf-mission-card:hover {
            transform: translateY(-3px);
          }
        }

        @media (max-width: 760px) {
          .yf-hero-layout,
          .yf-vision-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 24px;
          }

          .yf-sdg-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
          }

          .yf-mission-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .yf-hero h1 {
            font-size: clamp(36px, 9vw, 46px);
          }

          .yf-money-scene {
            height: 255px;
            max-width: 340px;
          }

          .yf-sdg-card {
            padding: 20px;
          }

          .yf-mission-card {
            padding: 19px;
          }
        }

        @media (max-width: 380px) {
          .yf-banknote {
            width: 150px;
            height: 90px;
          }

          .yf-currency {
            font-size: 40px;
          }

          .yf-money-scene {
            height: 225px;
          }

          .yf-coin {
            width: 49px;
            height: 49px;
          }

          .yf-sdg-icon {
            width: 55px;
            height: 55px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .yf-sdg-card,
          .yf-mission-card {
            transition: none;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="yf-hero">
        <div className="yf-hero-layout" style={container}>
          <div>
            <p style={eyebrow}>YOUTHFUNDED · OUR PURPOSE</p>

            <h1>
              What We
              <br />
              Stand For
              <span style={{ color: "#8ca33a" }}>.</span>
            </h1>

            <p className="yf-hero-description">
              Financial literacy gives young people the knowledge
              to make informed decisions and build a better future.
            </p>

            <div className="yf-hero-pill">
              Financial literacy for every young mind <span>↗</span>
            </div>
          </div>

          <MoneyIllustration />
        </div>
      </section>

      {/* PURPOSE */}

      <section className="yf-section yf-sdg-section">
        <div style={container}>
          <div className="yf-section-intro">
            <p style={eyebrow}>OUR PURPOSE</p>

            <h2 style={heading}>
              Knowledge creates opportunities.
            </h2>

            <p className="yf-section-description">
              We support quality education and inclusive economic
              opportunities through financial literacy.
            </p>
          </div>

          <div className="yf-sdg-grid">
            <SDGCard
              number="4"
              title="Quality Education"
              image="/images/sdg4.png"
              color={colors.blue}
              description="We make financial knowledge easier to access and understand, helping young people learn about budgeting, saving, and responsible financial decisions."
            />

            <SDGCard
              number="8"
              title="Decent Work & Economic Growth"
              image="/images/sdg8.png"
              color={colors.lime}
              description="We encourage financial responsibility and entrepreneurial thinking so young people can prepare for future work and economic opportunities."
            />
          </div>
        </div>
      </section>

      {/* VISION */}

      <section className="yf-section">
        <div className="yf-vision-layout" style={container}>
          <div>
            <p style={eyebrow}>OUR VISION</p>

            <h2 style={heading}>
              A financially confident generation.
            </h2>

            <p className="yf-section-description">
              A future where young people understand money,
              make responsible choices, and pursue opportunities
              with confidence.
            </p>
          </div>

          <div className="yf-vision-quote">
            <div className="yf-vision-quote-mark">✳</div>

            <p>
              Our vision is to create a young generation of 
              Indonesia aware of the importance of financial 
              skill and willing to create responsible financial 
              choices, to become financially independent, and 
              to contribute to society.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className="yf-section yf-mission-section">
        <div style={container}>
          <div className="yf-section-intro">
            <p style={eyebrow}>OUR MISSION</p>

            <h2 style={heading}>
              Small steps, meaningful impact.
            </h2>

            <p className="yf-section-description">
              Making financial literacy accessible and relevant
              to young people.
            </p>
          </div>

          <div className="yf-mission-grid">
            <MissionCard
              icon="/images/accessiblelearning.png"
              title="Accessible Learning"
              description="Make financial literacy easy to understand by 
              turning complex ideas into engaging, practical 
              lessons anyone can follow."
              color={colors.blue}
            />

            <MissionCard
              icon="/images/responsiblehabits.png"
              title="Responsible Habits"
              description="Build a healthy culture of smart money management
              and responsible financial decisions from an early age."
              color={colors.lime}
            />

            <MissionCard
              icon="/images/inclusiveoutreach.png"
              title="Inclusive Outreach"
              description="Reach communities with fewer opportunities so 
              everyone gets equal access to financial knowledge."
              color="#f1c96c"
            />

            <MissionCard
              icon="images/youthcollaboration.png"
              title="Youth Collaboration"
              description="Empower young people to learn, create, 
              and grow together through community-led initiatives"
              color="f2c6de"
            />
            
          </div>
        </div>
      </section>

      <section className="yf-section">
        <div className="yf-belief" style={container}>
          <p style={eyebrow}>QUOTE OF THE DAY</p>

          <h2 style={heading}>
            "Money is only a tool. It will take you wherever 
            you wish, but it will not replace you as the driver."
          </h2>

          <p className="yf-section-description">
            Ayn Rand
          </p>

          <div className="yf-belief-pill">
            Small Steps, Big Impact <span>✳</span>
          </div>
        </div>
      </section>
    </main>
  );
}
