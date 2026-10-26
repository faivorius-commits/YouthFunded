
import React from "react";

type Article = {
  slug: string;
  title: string;
  contributors: string[];
  publishedAt: string;
  excerpt: string;
  coverImage: string;
  content: string[];
  instagramUrl?: string;
};

// Add published articles here.
const articles: Article[] = [
  // Example:
  // {
  //   slug: "nichel",
  //   title: "Tittle",
  //   contributors: ["Contributor Name"],
  //   publishedAt: "October 26, 2026",
  //   excerpt: "Discover why financial knowledge matters...",
  //   coverImage: "/images/financial-literacy-post.jpg",
  //   content: [
  //     "First paragraph of your article here.",
  //     "Continue the article."
  //   ],
  //   instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID/"
  // }
];

const styles = `
  .yf-articles {
    --ink: #26364a;
    --muted: #687386;
    --green: #81983b;
    --cream: #fffaf0;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    min-height: 70vh;
    padding: 70px 22px 90px;
    color: var(--ink);
    background: var(--cream);
    font-family: inherit;
  }

  .yf-articles *,
  .yf-articles *::before,
  .yf-articles *::after {
    box-sizing: border-box;
  }

  .yf-articles-inner {
    width: min(100%, 1080px);
    margin: 0 auto;
  }

  .yf-articles-orb {
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    pointer-events: none;
    opacity: .65;
  }

  .yf-articles-orb.one {
    width: 280px;
    height: 280px;
    top: -120px;
    right: -80px;
    background: #e6edbd;
  }

  .yf-articles-orb.two {
    width: 190px;
    height: 190px;
    top: 420px;
    left: -120px;
    background: #f8dfeb;
  }

  .yf-articles-heading {
    max-width: 700px;
    margin: 0 auto 44px;
    text-align: left;
  }

  .yf-articles-eyebrow {
    margin: 0 0 14px;
    color: var(--green);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }

  .yf-articles-heading h1,
  .yf-article-detail h1 {
    margin: 0;
    font-size: clamp(36px, 6vw, 58px);
    line-height: 1.15;
    letter-spacing: -1px;
    font-weight: 700;
  }

  .yf-articles-heading h1 span {
    color: var(--green);
  }

  .yf-articles-subtitle {
    max-width: 560px;
    margin: 16px auto 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.9;
  }

  .yf-articles-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }

  .yf-article-card {
    display: flex;
    min-width: 0;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #26364a18;
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 12px 35px #26364a0a;
    transition: transform .2s ease, box-shadow .2s ease;
  }

  .yf-article-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 42px #26364a15;
  }

  .yf-article-cover {
    display: block;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: linear-gradient(135deg, #e6edbd, #f8dfeb);
  }

  .yf-article-cover img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .25s ease;
  }

  .yf-article-card:hover .yf-article-cover img {
    transform: scale(1.035);
  }

  .yf-article-cover-placeholder {
    display: grid;
    width: 100%;
    height: 100%;
    min-height: 180px;
    place-items: center;
    padding: 24px;
    text-align: center;
    font-size: 22px;
    font-weight: 800;
  }

  .yf-article-card-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    padding: 22px;
  }

  .yf-article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 10px;
    margin-bottom: 12px;
    color: var(--green);
    font-size: 10px;
    font-weight: 700;
    line-height: 1.7;
  }

  .yf-article-card h2 {
    margin: 0 0 11px;
    font-size: 21px;
    line-height: 1.4;
    font-weight: 700;
  }

  .yf-article-card p {
    margin: 0;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.9;
  }

  .yf-article-contributors {
    margin-top: 14px !important;
    font-size: 11px !important;
  }

  .yf-article-read {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    padding-top: 20px;
    color: var(--ink);
    font-size: 11px;
    font-weight: 800;
    text-decoration: none;
  }

  .yf-article-read:hover {
    color: var(--green);
  }

  .yf-articles-empty {
    max-width: 650px;
    margin: 0 auto;
    padding: 42px 25px;
    border: 1px solid #26364a18;
    border-radius: 20px;
    background: #ffffffd9;
    text-align: center;
  }

  .yf-articles-empty-icon {
    margin-bottom: 15px;
    font-size: 30px;
    color: var(--green);
  }

  .yf-articles-empty h2 {
    margin: 0 0 10px;
    font-size: 25px;
  }

  .yf-articles-empty p {
    margin: 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.9;
  }

  .yf-article-detail {
    max-width: 780px;
    margin: 0 auto;
  }

  .yf-article-back {
    display: inline-block;
    margin-bottom: 28px;
    color: var(--ink);
    font-size: 12px;
    font-weight: 800;
    text-decoration: none;
  }

  .yf-article-detail h1 {
    margin-bottom: 18px;
    font-size: clamp(32px, 5vw, 48px);
  }

  .yf-article-detail-cover {
    display: block;
    width: 100%;
    max-height: 480px;
    margin: 28px 0;
    border-radius: 18px;
    object-fit: cover;
  }

  .yf-article-body {
    color: #354155;
    font-size: 15px;
    line-height: 2;
  }

  .yf-article-body p {
    margin: 0 0 22px;
  }

  .yf-article-not-found {
    padding: 60px 0;
    text-align: center;
  }

  @media (max-width: 760px) {
    .yf-articles {
      padding: 52px 17px 70px;
    }

    .yf-articles-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 15px;
    }

    .yf-article-card-content {
      padding: 17px;
    }

    .yf-article-card h2 {
      font-size: 18px;
    }
  }

  @media (max-width: 520px) {
    .yf-articles-grid {
      grid-template-columns: 1fr;
    }

    .yf-article-cover {
      aspect-ratio: 16 / 10;
    }

    .yf-article-card-content {
      padding: 21px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .yf-article-card,
    .yf-article-cover img {
      transition: none;
    }
  }
`;

export default function Articles({
  slug,
}: {
  slug?: string;
}) {
  const article = slug
    ? articles.find((item) => item.slug === slug)
    : undefined;

  if (slug && !article) {
    return (
      <main className="yf-articles">
        <style>{styles}</style>
        <div className="yf-articles-inner yf-article-not-found">
          <p className="yf-articles-eyebrow">
            YOUTHFUNDED · OUR ARTICLES
          </p>
          <h1>Article Not Found</h1>
          <a className="yf-article-back" href="/articles">
            ← Back to Our Articles
          </a>
        </div>
      </main>
    );
  }

  if (article) {
    return (
      <main className="yf-articles">
        <style>{styles}</style>
        <article className="yf-articles-inner yf-article-detail">
          <a className="yf-article-back" href="/articles">
            ← Back to Our Articles
          </a>

          <p className="yf-articles-eyebrow">
            YOUTHFUNDED • OUR ARTICLES
          </p>

          <h1>{article.title}</h1>

          <div className="yf-article-meta">
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span>
              By {article.contributors.join(", ")}
            </span>
          </div>

          {article.coverImage && (
            <img
              className="yf-article-detail-cover"
              src={article.coverImage}
              alt={article.title}
            />
          )}

          <div className="yf-article-body">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {article.instagramUrl && (
            <a
              className="yf-article-read"
              href={article.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Instagram Post ↗
            </a>
          )}
        </article>
      </main>
    );
  }

  return (
    <main className="yf-articles">
      <style>{styles}</style>

      <span className="yf-articles-orb one" aria-hidden="true" />
      <span className="yf-articles-orb two" aria-hidden="true" />

      <div className="yf-articles-inner">
        <header className="yf-articles-heading">
          <p className="yf-articles-eyebrow">
            YOUTHFUNDED · OUR ARTICLES
          </p>

          <h1>
            Ideas Worth <span>Sharing.</span>
          </h1>

          <p className="yf-articles-subtitle">
            Explore our perspectives on financial literacy,
            youth empowerment, and the ideas shaping a more
            financially aware generation.
          </p>
        </header>

        {articles.length > 0 ? (
          <div className="yf-articles-grid">
            {articles.map((item) => (
              <article className="yf-article-card" key={item.slug}>
                <a
                  className="yf-article-cover"
                  href={`/articles/${item.slug}`}
                  aria-label={`Read ${item.title}`}
                >
                  {item.coverImage ? (
                    <img
                      src={item.coverImage}
                      alt={`Cover for ${item.title}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="yf-article-cover-placeholder">
                      YOUTHFUNDED
                    </div>
                  )}
                </a>

                <div className="yf-article-card-content">
                  <div className="yf-article-meta">
                    <span>{item.publishedAt}</span>
                    <span>•</span>
                    <span>
                      {item.contributors.length} Contributor
                      {item.contributors.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>

                  <p className="yf-article-contributors">
                    <strong>Contributors:</strong>{" "}
                    {item.contributors.join(", ")}
                  </p>

                  <a
                    className="yf-article-read"
                    href={`/articles/${item.slug}`}
                  >
                    Read Article <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <section className="yf-articles-empty">
            <div className="yf-articles-empty-icon" aria-hidden="true">
              ✳
            </div>

            <h2>Stories in the Making</h2>

            <p>
              We are preparing articles from the YouthFunded team.
              Check back soon to explore our ideas, insights, and
              perspectives on financial literacy and youth empowerment.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
