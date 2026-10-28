
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
  sections: ArticleSection[];
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
    instagramUrl: "https://www.instagram.com/p/DbQKT5aAY9i/?rpxt=MXFhNm5wM3pmcXVobA=="
  },

  {
    slug: "preparing-for-the-future-of-work",
    title: "The Importance of Preparing Yourself to Avoid Unemployment",
    subtitle:
      "Why Young People Need to Prepare for a Changing Job Market",
    category: "Youth & Career",
    contributors: ["Alliyah", "Kenneth"],
    publishedAt: "August, 2026",
    excerpt:
      "Youth unemployment remains a challenge. Building useful skills, gaining experience, and learning to adapt can help young people prepare for the future of work.",
    coverImage: "",
    sections: [
      {
        heading: "What does "Unemployment" refers to?",
        paragraphs: [
          "Unemployment refers to someone who is jobless but is actively looking for a job and available for work.",
          "Recently, youth struggle to secure a job, especially a job with a steady position. Only 40.58% of them are in the formal sector, and unfortunately, the majority of them are trapped in informal employment facing unsteady incomes and zero safety nets.",
          "According to a new report by the International Labour Organization, the global youth unemployment rate climbed to 12.4% in 2025, leaving around 67 million people aged 15 to 24 without work. In our country, Indonesia, the unemployment rate among Indonesians aged 15–24 has inched up to 16.36% from 16.16% a year ago. This highlights the importance of addressing youth unemployment issues and preparing ourselves as early as possible so that we are not left behind when we enter the workforce."
        ]
      },
      {
        heading: "Introduction",
        paragraphs: [
          "The job market is changing faster than ever. In 2026, global unemployment is expected to remain around 4.9%, with about 186 million people unemployed. For young people, the situation is even tougher: youth unemployment will reach 12.4% in 2025, meaning millions of young people are struggling to get their first job.",
          "At the same time, AI and technology are changing the skills employers want. The World Economic Forum predicts that around 40% of the skills needed for jobs will change by 2030, while 59 out of every 100 workers may need to learn new skills. This means having good grades alone may not be enough. Communication, creativity, critical thinking, digital skills, and the ability to adapt are becoming just as important.",
          "Preparing for your future isn't about knowing exactly what job you'll have in the future. It's about making sure you're ready for whatever comes next. Learning useful skills, gaining experience, and staying adaptable can make you more competitive and less vulnerable when the job market changes. In a world where the jobs of tomorrow may not even exist today, the best advantage you can have is the ability to keep learning."
        ]
      },
      {
        heading: "Why Self-Preparation Matters",
        paragraphs: [
          "One of the main reasons why self-preparation matters is the existence of skill gaps in the labor market. Skill gaps can be defined as mismatches between the skills available in a firm and those required to meet current and future business needs. Factors such as technological advancement, shifting industry paradigms, and lack of access to professional development contribute to the emergence of skill gaps.",
          "According to the World Economic Forum's Future of Jobs Report, 63% of employers say that skill gaps are now the biggest barrier to business transformation. This serves as a sign for young people to prepare themselves for competitive industries marked by rapid changes such as technological disruption and emerging industry trends. As youth, we must not only rely on government intervention, but also try to make an effort ourselves."
        ]
      },
      {
        heading: "Forms of Preparation You Can Take",
        paragraphs: [
          "How to Future-Proof Yourself"
        ],
        bullets: [
          {
            title: "Build the Right Skills",
            paragraph:
              "Develop hard skills that match the career or industry you want to enter. Identify the abilities commonly required in your chosen field and look for opportunities to practise them."
          },
          {
            title: "Master Soft Skills",
            paragraph:
              "Improve communication, problem-solving, critical thinking, teamwork, and adaptability. These skills can help you work effectively with different people and respond to changing situations."
          },
          {
            title: "Get Real Experience",
            paragraph:
              "Internships, projects, freelancing, competitions, and organisations can turn your skills into practical experience. Start with opportunities that match your interests and current abilities."
          },
          {
            title: "Build Your Personal Brand",
            paragraph:
              "Make your CV, LinkedIn profile, and portfolio show employers what makes you stand out. Highlight your skills, projects, achievements, and experiences clearly and honestly."
          },
          {
            title: "Get Financially Prepared",
            paragraph:
              "Learn to manage your money and build an emergency fund when possible. Developing healthy financial habits can help you stay more secure when things don't go as planned."
          }
        ],
        closingParagraphs: [
          "Don't just prepare for your first job. Prepare to stay employable."
        ]
      },
      {
        heading: "Practical Tips / Actionable Steps",
        paragraphs: [
          "Start Preparing This Week",
          "Don't wait until you need a job to start preparing for one."
        ],
        bullets: [
          {
            title: "Update Your CV",
            paragraph:
              "Keep your CV clear, relevant, and up to date. Include your education, skills, projects, and experiences that are relevant to the opportunities you want."
          },
          {
            title: "Learn One New Skill",
            paragraph:
              "Take a short course, watch tutorials, or practise a skill related to your career interests. Small, consistent steps can help you build knowledge over time."
          },
          {
            title: "Look for Practical Experience",
            paragraph:
              "Explore competitions, volunteer activities, school projects, and other opportunities that let you apply what you learn."
          },
          {
            title: "Build a Learning Habit",
            paragraph:
              "Set aside regular time to learn, review your progress, and identify skills you want to improve next."
          }
        ]
      }
    ],
    instagramUrl: "https://www.instagram.com/p/DcqPHoFgf2X/?mdxt=MW81azU4M3JtMjFjNg=="
  }
];

const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] =
    useState<Article | null>(null);

  const renderArticleBody = (article: Article) => (
    <>
      {article.sections.map((section, index) => (
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
      ))}
    </>
  );

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
                          By {article.contributors.join(", ")}
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
          </>
        )}
      </div>
    </main>
  );
};

export default Articles;
