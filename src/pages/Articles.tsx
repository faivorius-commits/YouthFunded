
import React, { useState } from "react";

type ArticleBullet = {
  title: string;
  paragraph: string;
};

type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: ArticleBullet[];
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
    slug: "indonesias-nickel-industry",
    title: "Indonesia's Nickel Industry",
    subtitle:
      "Understanding the Benefits and Challenges of Nickel Mining",
    category: "Economy & Environment",
    contributors: ["Bianca H.", "Neca"],
    publishedAt: "August, 2026",
    excerpt:
      "Nickel supports job opportunities, economic growth, and EV battery development. However, mining also brings challenges such as deforestation, water pollution, and impacts on local communities.",
    coverImage: "/images/nickel-industry.jpg",
    sections: [
      {
        heading: "What is the Nickel Industry?",
        paragraphs: [
          "Globally, Indonesia is known for many things, including its culture, nature, and food. Over the past years, Indonesia has continued to develop its industries, including the nickel industry. Nickel mining, processing, and refining have become important parts of the country's economy. Nickel mines and processing facilities are concentrated in regions such as Sulawesi and Maluku, making the industry an important part of Indonesia's role in the global nickel supply chain."
        ]
      },
      {
        heading: "The Good Side of Nickel Mining",
        bullets: [
          {
            title: "Open Up Job Opportunities",
            paragraph:
              "Nickel mining and processing create job opportunities for Indonesians, especially in areas where nickel is produced. These jobs can improve people's incomes, support local businesses, and contribute to the quality of life for many families."
          },
          {
            title: "Boost the Economy",
            paragraph:
              "Indonesia is one of the world's largest nickel producers, making the industry an important contributor to the country's economy. It attracts foreign investment, increases export revenues, and can help support infrastructure and public development projects."
          },
          {
            title: "Encourage Industrial Downstreaming",
            paragraph:
              "Instead of exporting raw nickel, Indonesia can process it into higher-value products such as battery materials, stainless steel, and electric vehicle components. This can create more value for the country, encourage technological development, and provide more skilled job opportunities for Indonesians."
          }
        ]
      },
      {
        heading: "The Bad Side of Nickel Mining",
        bullets: [
          {
            title: "Deforestation",
            paragraph:
              "Nickel mining can lead to the loss of forests because it may require clearing land to access mineral deposits. This can destroy wildlife habitats, reduce biodiversity, and contribute to climate change by reducing the number of trees that absorb carbon dioxide."
          },
          {
            title: "Water Pollution",
            paragraph:
              "Mining activities can produce waste that contaminates rivers, lakes, and other water sources. Polluted water can harm fish and other aquatic life, reduce water quality, and affect communities that depend on these sources for drinking, farming, and fishing."
          },
          {
            title: "Impacts on Local Communities",
            paragraph:
              "Although the nickel industry creates jobs, some local communities also face environmental and social challenges. Mining activities can affect their health, reduce access to clean water, change traditional livelihoods, and sometimes create conflicts over land use."
          }
        ]
      },
      {
        heading: "Ways to Solve These Problems",
        paragraphs: [
          "The benefits of the nickel industry should be balanced with environmental protection and the well-being of local communities. The following approaches can help make nickel production more responsible and sustainable."
        ],
        bullets: [
          {
            title: "1. Support Industrial Downstreaming",
            paragraph:
              "Instead of exporting raw nickel, Indonesia can process it into products such as batteries and electric vehicle (EV) components. This can help the country generate more economic value, create jobs, and develop better technology. Environmental impacts should also be addressed through improved waste management and the restoration of mining areas."
          },
          {
            title: "2. Recycle Used Batteries",
            paragraph:
              "Many used batteries contain valuable materials, including nickel, that can be recovered and reused. Recycling batteries properly can reduce the need for newly mined materials, lower waste, and support a more sustainable circular economy."
          },
          {
            title: "3. Practice Responsible Mining",
            paragraph:
              "Mining companies should follow environmental regulations by reducing pollution, treating mining waste safely, protecting nearby rivers, and replanting trees after mining activities are completed. Responsible mining can help balance economic growth with environmental protection."
          }
        ]
      },
      {
        heading: "Save Money = Save Resources",
        paragraphs: [
          "Fun fact: Saving money can also help save the planet.",
          "Instead of buying a new phone or laptop every time, try repairing your device and using it for longer. Only buy what you truly need. This helps reduce electronic waste and the demand for new batteries, which can decrease the need for additional nickel mining."
        ]
      },
      
{
  heading: "Sources",
  paragraphs: [
    "The following sources provide further information about Indonesia's nickel industry and resource sustainability."
  ],
  bullets: [
    {
      title: "World Bank — Indonesia Economic Prospects",
      paragraph:
        "https://www.worldbank.org/en/country/indonesia/publication/indonesia-economic-prospects"
    },
    {
      title: "United Nations Environment Programme — Minerals and Metals",
      paragraph:
        "https://www.unep.org/explore-topics/resource-efficiency/what-we-do/minerals-and-metals"
    },
    {
      title: "Jurnal Sylva Lestari",
      paragraph:
        "https://sylvalestari.fp.unila.ac.id/index.php/JHT/article/view/847"
    },
    {
      title: "IMA API — Nickel Supply in 2026",
      paragraph:
        "https://ima-api.org/capacity-additions-to-lift-indonesias-nickel-supply-in-2026"
    },
    {
      title: "TMS Consulting — Nickel Oversupply in Indonesia",
      paragraph:
        "https://tms-consulting.co.id/nickel-oversupply-2025-indonesia/"
    }
  ]
}

    ],
    instagramUrl: "https://www.instagram.com/p/DbQKT5aAY9i/?psln=MXFhNm5wM3pmcXVobA=="
  }
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
            <strong>{bullet.title}</strong>

      {section.heading === "Sources" ? (
        <p>
          <a
            href={bullet.paragraph}
            target="_blank"
            rel="noopener noreferrer"
          >
            {bullet.paragraph}
          </a>
        </p>
      ) : (
        <p>{bullet.paragraph}</p>
      )}
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
                By {selectedArticle.contributors.join(" and ")}
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
