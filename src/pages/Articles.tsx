
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
  {
    slug: "indonesia's-nickel-industry",
    title: "Indonesia's Nickel Industry",
    subtitle: "Building Better Financial Habits for Young People",
    category: "Education",
    contributors: ["Bianca H., Neca"],
    publishedAt: "August, 2026",
    excerpt:
      "Nickel supports job opportunities, economic growth, and EV battery development.
However, mining also brings challenges like deforestation, water pollution, and
impacts on local communities.",
    coverImage: "/images/nickel-industry.jpg",
    sections: [
      {
        heading: "What is the nickel Industry?",
        paragraphs: [
          "Globally, Indonesia is known for lots of things, such as our culture, our nature, and our food.
Over the past years, Indonesia has slowly developed its industry, specifically their very own
nickel industry. As of now, Indonesia’s nickel industry is considered the biggest sector for the
mining, processing, and refining of nickel, responsible for more than 1.8 million tonnes of
nickel in 2023-2024 alone. These mines are usually located in Sulawesi and Maluku,
controlling about 65% of the global mined output."
        ],
      },
      {
        heading: "The Good Side of Nickel Mining",
        bullets: [
          "Open up many job vacancies",
        ],
        paragraphs: ["Nickel mining and processing opens up many job vacancies opportunities for
Indonesians, especially in areas where nickel is being produced. These jobs
help improve people’s income, support local business and increase the quality
of life for many families."] 
        ],
        bullets: [
          "Boost the economy",
        ],
       paragraphs: ["Indonesia is one of the world’s largest nickel producers. Which means making
nickel is an important contributor to the county’s economy. This industry
attracts foreign investment, increases export revenues and helps fund
infrastructure and public development projects."] 
        ],
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
