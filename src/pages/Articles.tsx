
import React, { useState } from "react";
import "./style.css";

type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  closingParagraphs?: string[];
};

type Article = {
  slug: string;
  title: string;
  subtitle?: string;
  category?: string;
  contributors: string[];
  publishedAt: string;
  excerpt: string;
  coverImage: string;
  content?: string[];
  sections?: ArticleSection[];
  instagramUrl?: string;
};

const articles: Article[] = [
  // Add your articles here.
  // Example:
  /*
  {
    slug: "financial-literacy",
    title: "The Importance of Financial Literacy",
    subtitle: "Building Better Financial Habits for Young People",
    category: "Education",
    contributors: ["Your Name"],
    publishedAt: "October 28, 2026",
    excerpt:
      "Discover why financial literacy matters and how young people can develop better money management skills.",
    coverImage: "/images/financial-literacy.jpg",
    sections: [
      {
        heading: "Why Financial Literacy Matters",
        paragraphs: [
          "Financial literacy helps young people make informed financial decisions."
        ],
        bullets: [
          "Understanding budgeting and saving.",
          "Learning to manage personal expenses.",
          "Making informed financial decisions."
        ],
        closingParagraphs: [
          "By developing these skills early, young people can build healthier financial habits and prepare for the future."
        ]
      },
      {
        heading: "Building Financial Habits",
        paragraphs: [
          "Good financial habits can be developed through consistent practice."
        ],
        bullets: [
          "Set realistic financial goals.",
          "Track income and expenses.",
          "Save regularly whenever possible."
        ],
        closingParagraphs: [
          "Small, consistent actions can help young people become more confident in managing their finances."
        ]
      }
    ],
    instagramUrl: "https://www.instagram.com/"
  }
  */
];

const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] =
    useState<Article | null>(null);

  const renderArticleBody = (article: Article) => {
    if (article.sections && article.sections.length > 0) {
      return article.sections.map((section, index) => (
        <section
          className="yf-article-section"
          key={`${article.slug}-section-${index}`}
        >
          {section.heading && (
            <h2 className="yf-article-section-heading">
              {section.heading}
            </h2>
          )}

          {section.paragraphs?.map((paragraph, paragraphIndex) => (
            <p key={`paragraph-${paragraphIndex}`}>
              {paragraph}
            </p>
          ))}

          {section.bullets && section.bullets.length > 0 && (
            <ul className="yf-article-bullets">
              {section.bullets.map((bullet, bulletIndex) => (
                <li key={`bullet-${bulletIndex}`}>
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {section.closingParagraphs?.map(
            (paragraph, paragraphIndex) => (
              <p key={`closing-${paragraphIndex}`}>
                {paragraph}
              </p>
            )
          )}
        </section>
      ));
    }

    return article.content?.map((paragraph, index) => (
      <p key={`content-${index}`}>{paragraph}</p>
    ));
  };

  return (
    <main className="yf-articles-page">
      <div className="yf-articles-container">
        {selectedArticle ? (
          <article className="yf-article-detail">
            <button
              type="button"
              className="yf-article-back"
              onClick={() => setSelectedArticle(null)}
            >
              ← Back to Articles
            </button>

            {selectedArticle.category && (
              <span className="yf-article-category">
                {selectedArticle.category}
              </span>
            )}

            <h1 className="yf-article-title">
              {selectedArticle.title}
            </h1>

            {selectedArticle.subtitle && (
              <p className="yf-article-subtitle">
                {selectedArticle.subtitle}
              </p>
            )}

            <div className="yf-article-meta">
              <span>{selectedArticle.publishedAt}</span>
              <span>
                By {selectedArticle.contributors.join(", ")}
              </span>
            </div>

            {selectedArticle.coverImage && (
              <img
                className="yf-article-cover"
                src={selectedArticle.coverImage}
                alt={selectedArticle.title}
              />
            )}

            <div className="yf-article-content">
              {renderArticleBody(selectedArticle)}
            </div>

            {selectedArticle.instagramUrl && (
              <a
                className="yf-article-instagram"
                href={selectedArticle.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more on Instagram ↗
              </a>
            )}
          </article>
        ) : (
          <>
            <header className="yf-articles-header">
              <p className="yf-articles-eyebrow">
                YOUTHFUNDED JOURNAL
              </p>

              <h1 className="yf-articles-heading">
                Ideas Worth <span>Sharing.</span>
              </h1>

              <p className="yf-articles-description">
                Explore ideas, perspectives, and stories that
                inspire meaningful change.
              </p>
            </header>

            {articles.length > 0 ? (
              <div className="yf-articles-grid">
                {articles.map((article) => (
                  <article
                    className="yf-article-card"
                    key={article.slug}
                  >
                    <button
                      type="button"
                      className="yf-article-card-button"
                      onClick={() => setSelectedArticle(article)}
                    >
                      {article.coverImage && (
                        <img
                          className="yf-article-card-image"
                          src={article.coverImage}
                          alt={article.title}
                        />
                      )}

                      <div className="yf-article-card-content">
                        {article.category && (
                          <span className="yf-article-category">
                            {article.category}
                          </span>
                        )}

                        <h2>{article.title}</h2>

                        {article.subtitle && (
                          <p className="yf-article-card-subtitle">
                            {article.subtitle}
                          </p>
                        )}

                        <p className="yf-article-excerpt">
                          {article.excerpt}
                        </p>

                        <div className="yf-article-card-meta">
                          <span>{article.publishedAt}</span>
                          <span>
                            {article.contributors.join(", ")}
                          </span>
                        </div>

                        <span className="yf-article-read-more">
                          Read Article ↗
                        </span>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="yf-articles-empty">
                <h2>Articles Coming Soon</h2>
                <p>
                  We are preparing new stories and insights.
                  Check back soon.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Articles;
