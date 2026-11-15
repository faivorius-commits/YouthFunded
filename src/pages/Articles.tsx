import React, { useState } from "react";
import { useEffect } from "react";

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
    slug: "global-supply-chain-disruptions-household-budgets",
    title: "Global Supply Chain Disruptions Can Affect Household Budgets and the Prices of Everyday Products",
    subtitle: "Understanding how international disruptions influence the cost of everyday essentials",
    category: "Economy & Everyday Life",
    contributors: ["YouthFunded Team"],
    publishedAt: "October, 2026",
    excerpt:
      "Global supply chain disruptions can increase the prices of everyday products, putting pressure on household budgets. Learn how businesses and families can respond.",
    coverImage: "images/global-supply-chain-disruptions-household-budgets.jpg",
    sections: [
      {
        heading: "What Are Global Supply Chains?",
        paragraphs: [
          "A global supply chain is the process of making and delivering a product using people and businesses from different countries."
        ]
      },
      {
        heading: "How Can They Affect Household Budgets and the Prices of Everyday Products?",
        paragraphs: [
          "Global supply chains can affect how much we pay for everyday products. For example, imagine you want to buy a pair of sneakers. If the cost of fuel or shipping goes up, the sneakers may become more expensive. If a factory experiences problems or there is a shortage of materials, fewer sneakers may be available, which can also push prices up.",
          "This means families may have to spend more money on groceries, clothes, electronics, and other everyday products. When prices rise, there is less money left for things like savings, entertainment, or treats. Even the humble household budget is not safe from international chaos."
        ]
      },
      {
        heading: "How Can Companies Reduce the Impact?",
        paragraphs: [
          "To prevent supply chain problems from hurting everyday shoppers, companies can make their shipping networks stronger and more flexible."
        ],
        bullets: [
          {
            title: "Work with Multiple Suppliers",
            paragraph:
              "Companies can buy materials from several different local and regional suppliers instead of relying on just one overseas source."
          },
          {
            title: "Use Smart Tracking Software",
            paragraph:
              "Companies can use smart software to track shipments and predict delays before they happen."
          },
          {
            title: "Keep Extra Inventory",
            paragraph:
              "Keeping extra inventory stored in warehouses helps businesses continue selling products even when shipping gets delayed."
          }
        ]
      },
      {
        heading: "How Can Families Protect Their Budgets?",
        paragraphs: [
          "Families can also take simple steps to protect their monthly budgets when prices rise."
        ],
        bullets: [
          {
            title: "Buy Non-Perishable Items in Bulk",
            paragraph:
              "Purchasing non-perishable foods and household supplies in bulk during sales allows families to save money and stay prepared."
          },
          {
            title: "Choose Lower-Cost Alternatives",
            paragraph:
              "Being willing to switch to store brands or lower-cost alternatives when major brands become too expensive is another way to keep grocery bills low."
          },
          {
            title: "Build Emergency Savings",
            paragraph:
              "Keeping a small emergency savings fund helps households handle sudden price increases without putting too much pressure on their monthly finances."
          }
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Global supply chain disruptions can directly affect household budgets because higher shipping, labor, and material costs may force companies to raise their retail prices. When major events like bad weather or transportation delays happen, consumers can end up paying more for everyday items.",
          "Even though global events cannot be completely avoided, companies can reduce the impact by using multiple suppliers, while families can protect their budgets by planning carefully and choosing flexible alternatives."
        ]
      }
    ],
    instagramUrl: "https://www.instagram.com/p/DeZNInCgXUI/?mdxt=NzB0dTljaHBvbXM="
  },

  
  {
    slug: "understanding-supply-chains-grocery-bills",
    title: "Understanding Supply Chains Explains Your Rising Grocery Bills",
    subtitle: "How Supply-Chain Costs Can Affect the Prices Consumers Pay",
    category: "Economy & Everyday Life",
    contributors: ["Zeska", "Nady"],
    publishedAt: "October, 2026",
    excerpt:
      "From fuel and raw materials to transportation and distribution, discover how supply-chain disruptions can contribute to higher grocery prices.",
    coverImage: "images/supply-chains-grocery-bills.jpg",
    sections: [
      {
        heading: "What Are Supply Chains?",
        paragraphs: [
          "A supply chain is the entire network of people, organizations, activities, and resources involved in creating and moving a product or service from its origin as raw materials to the final customers."
        ],
        bullets: [
          {
            title: "Manufacturers",
            paragraph:
              "Manufacturers transform raw materials into finished products. This can involve several stages, such as processing, assembly, packaging, and quality testing."
          },
          {
            title: "Logistics Providers",
            paragraph:
              "Logistics providers — including transportation companies, freight forwarders, and third-party logistics providers — move products between suppliers, factories, warehouses, distribution centers, and retailers."
          },
          {
            title: "Distribution Centers",
            paragraph:
              "Distribution centers receive and consolidate products before sending them to stores, regional warehouses, or e-commerce fulfillment centers."
          },
          {
            title: "Retailers",
            paragraph:
              "Retailers sell the final products to consumers through physical stores, online marketplaces, or direct-to-consumer channels."
          }
        ]
      },
      {
        heading: "How Can Supply Chains Increase Prices?",
        paragraphs: [
          "Supply-chain problems can contribute to higher consumer prices because a product usually passes through multiple stages before reaching the customer. When the cost of one stage increases, businesses may absorb some of the additional expense, while some of it can be reflected in the price paid by consumers."
        ]
      },
      {
        heading: "1. Fuel Price Increases",
        paragraphs: [
          "Transportation is an important part of the food supply chain. Trucks, ships, and other forms of transport are needed to move food from farms and processing facilities to warehouses and supermarkets. When fuel prices increase, transportation becomes more expensive.",
          "Higher transportation costs can increase the cost of moving food through the supply chain. The additional costs can eventually contribute to higher wholesale and retail prices. The OECD-FAO Agricultural Outlook explains that higher energy and transportation costs can contribute to higher food prices. It also notes that maritime transportation costs affect the prices of imported food products."
        ],
        bullets: [
          {
            title: "A Simple Supply-Chain Example",
            paragraph:
              "Farm → Processing facility → Truck → Distribution center → Supermarket → Consumer. If fuel becomes more expensive, the cost of transporting the product from the farm to the processing facility and then to the supermarket increases. If other costs also rise, the final price consumers pay may increase."
          }
        ]
      },
      {
        heading: "2. Shortages of Raw Materials",
        paragraphs: [
          "A supply chain can also become more expensive when there is a shortage of an important raw material. For example, if a poor harvest reduces the supply of a particular agricultural commodity, there may be less of that commodity available for food manufacturers. If demand remains strong, the limited supply can put upward pressure on prices.",
          "The FAO explains that disruptions to food production, transportation, and markets can affect food availability and prices. During COVID-19, for example, restrictions and labor and transportation problems disrupted food supply chains in many countries."
        ]
      },
      {
        heading: "3. Transportation Delays and Bottlenecks",
        paragraphs: [
          "Supply chains depend on products moving smoothly between different locations. A shortage of trucks, shipping capacity, workers, or warehouse space can create bottlenecks.",
          "When products are delayed, companies may face additional costs for storage, labor, transportation, or finding alternative suppliers and routes. These additional costs can contribute to higher prices."
        ]
      },
      {
        heading: "4. Higher Labor and Operating Costs",
        paragraphs: [
          "Factories, warehouses, transportation companies, and supermarkets all have operating costs. These include wages, electricity, fuel, rent, equipment, and maintenance. If these costs increase significantly, businesses may adjust their prices to cover some of the additional expenses."
        ]
      },
      {
        heading: "Real-Life Example: The Price of Cooking Oil",
        paragraphs: [
          "During the COVID-19 pandemic and the disruptions that followed, transportation costs, labor shortages, and shortages of certain raw materials increased costs throughout supply chains. For cooking oil, higher costs of producing, transporting, and distributing the product could be passed from suppliers to manufacturers, distributors, retailers, and eventually consumers.",
          "Raw materials → Processing → Transportation → Distribution center → Supermarket → Consumer.",
          "If fuel prices rise, the cost of transporting palm oil from plantations or processing facilities to factories and then to supermarkets also rises. If there are transportation delays or shortages, businesses may face additional storage and operating costs. Retailers may then increase the selling price to cover some of these higher costs.",
          "For example, if transporting a bottle of cooking oil becomes more expensive because fuel and shipping costs increase, the final supermarket price may rise even though the bottle itself has not changed. This demonstrates that a grocery price is influenced not only by the cost of the product itself, but also by the many stages involved in getting it from its source to the consumer."
        ]
      },
      {
        heading: "Sources",
        paragraphs: [
          "The following publications provide further information about agricultural markets, food supply-chain disruptions, and transportation bottlenecks."
        ],
        bullets: [
          {
            title: "Food and Agriculture Organization of the United Nations (FAO)",
            paragraph:
              "https://openknowledge.fao.org/items/30870338-f114-4923-b241-9dd8225a37e7"
          },
          {
            title: "OECD-FAO Agricultural Outlook 2022–2031",
            paragraph:
              "https://www.oecd.org/en/publications/2022/06/oecd-fao-agricultural-outlook-2022-2031_e00c413c.html"
          },
          {
            title: "OECD-FAO Agricultural Outlook 2026–2035",
            paragraph:
              "https://www.oecd.org/en/publications/2026/06/oecd-fao-agricultural-outlook-2026-2035_5610f218.html"
          },
          {
            title: "Federal Reserve — Measurement and Effects of Supply Chain Bottlenecks Using Natural Language Processing (2023)",
            paragraph:
              "https://www.federalreserve.gov/econres/notes/feds-notes/measurement-and-effects-of-supply-chain-bottlenecks-using-natural-language-processing-20230206.html"
          }
        ]
      }
    ],
    instagramUrl: "https://www.instagram.com/p/DeHKPbIge3e/?srtk=MWttOHgwbGE1Y25uaA=="
  },

  
{
  slug: "scarcity-and-choice",
  title: "Scarcity & Choice",
  subtitle: "Understanding limited resources, decision-making, and opportunity costs",
  category: "Economics & Everyday Life",
  contributors: ["YouthFunded Team"],
  publishedAt: "October, 2026",
  excerpt: "Time, energy, and money are limited resources. Learn how scarcity shapes everyday decisions and why every choice comes with an opportunity cost.",
  coverImage: "",
  sections: [
    {
      heading: "Fun Fact",
      paragraphs: [
        "Did you know that time is one of the most limited resources? You only get 24 hours a day, so deciding to spend two hours practicing with the varsity team means actively choosing not to spend those two hours studying or hanging out with friends!"
      ]
    },
    {
      heading: "What Are Scarcity and Choice?",
      paragraphs: [
        "Scarcity happens when people want more things than there are available resources to provide. Human wants — like wanting good grades, high athletic performance, and social time — are endless, but resources like time, energy, and money are strictly limited.",
        "Because you cannot have or do everything at once, scarcity forces you to make a choice. Making a choice simply means deciding which needs or goals to prioritize first and which ones to set aside."
      ],
      bullets: [
        {
          title: "Limited Resources",
          paragraph: "Things like daily hours, physical energy, and personal budgets have strict limits."
        },
        {
          title: "Unlimited Wants",
          paragraph: "Students and athletes naturally want to excel in academics, sports, and social lives all at once."
        }
      ]
    },
    {
      heading: "Then Comes Opportunity Cost",
      paragraphs: [
        "Scarcity forces choices, and every choice comes with an opportunity cost. Opportunity cost is the value of the best alternative you give up when making a choice.",
        "Imagine you are given three different scholarship offers: Rp500 million, Rp350 million, and Rp400 million. If you choose the Rp500 million scholarship, your opportunity cost is the next-best alternative: the Rp400 million scholarship."
      ]
    },
    {
      heading: "Opportunity Costs in Everyday Life",
      paragraphs: [
        "Opportunity cost can be considered in many situations, including how we manage our time and make decisions about school."
      ],
      bullets: [
        {
          title: "Student-Athlete Dilemma",
          paragraph: "Choosing whether to dedicate your evening to extra varsity team drills or use that time to complete a major research paper."
        },
        {
          title: "College Course Choice",
          paragraph: "Deciding whether to register for an advanced academic seminar or an elective that fits your training schedule better."
        },
        {
          title: "School Budgeting",
          paragraph: "A school district deciding whether to allocate its limited funding toward upgrading sports facilities or expanding academic equipment."
        }
      ]
    },
    {
      heading: "What Can We Do? Real-Life Actions",
      bullets: [
        {
          title: "Create a Time Budget",
          paragraph: "Map out your 24 hours each day to balance entertainment, study sessions, and rest."
        },
        {
          title: "Establish Priority Lists",
          paragraph: "Rank your tasks based on your priorities and what you consider most important."
        },
        {
          title: "Evaluate Opportunity Costs",
          paragraph: "Before committing to a new extracurricular activity, pause and consider what you will have to give up to make room for it."
        }
      ]
    },
    {
      heading: "Resources",
      bullets: [
        {
          title: "Scientific Research Publishing",
          paragraph: "https://www.scirp.org/reference/referencespapers?referenceid=3387658"
        },
        {
          title: "INOMICS — Scarcity and Choice",
          paragraph: "https://inomics.com/terms/scarcity-and-choice-1428501"
        },
        {
          title: "Ruangguru — Pengertian Biaya Peluang (Opportunity Cost)",
          paragraph: "https://www.ruangguru.com/blog/pengertian-biaya-peluang-opportunity-cost"
        }
      ]
    }
  ]
},
{
  slug: "smart-spending-habits-consumerism-social-media",
  title: "Developing Smart Spending Habits in a World of Consumerism and Social Media",
  subtitle: "How to make thoughtful spending decisions in a trend-driven digital world",
  category: "Financial Literacy",
  contributors: ["YouthFunded Team"],
  publishedAt: "October, 2026",
  excerpt: "Social media trends and online recommendations can influence what we buy. Explore practical ways to manage spending and make more informed choices.",
  coverImage: "",
  sections: [
    {
      heading: "Have You Ever Bought Something You Barely Used?",
      paragraphs: [
        "Have you ever bought something you barely used after purchasing it? This can happen because of social media influence and consumerism. So, what should we do?",
        "Let's learn about smart spending habits in a world of consumerism and social media."
      ]
    },
    {
      heading: "What Are Smart Spending Habits?",
      paragraphs: [
        "Having smart spending habits means learning how to manage money more wisely, think before buying, and resist the temptations created by influencers, online trends, and advertising.",
        "Financial literacy helps people make informed financial decisions and improve their financial well-being. We do not have to stop shopping or stop using social media; instead, we need to become more aware of and manage our spending habits."
      ]
    },
    {
      heading: "Unhealthy vs. Smart Spending Habits",
      bullets: [
        {
          title: "Unhealthy: Impulsive Buying",
          paragraph: "Buying things immediately without taking time to think the purchase through."
        },
        {
          title: "Unhealthy: Following Trends",
          paragraph: "Buying something just because it is trendy or because you are afraid of missing out (FOMO)."
        },
        {
          title: "Smart: Prioritizing Needs Over Wants",
          paragraph: "Paying for things you need before spending money on things you simply like or want."
        },
        {
          title: "Smart: Planning a Budget",
          paragraph: "Deciding in advance how your money should be spent."
        }
      ]
    },
    {
      heading: "Fun Fact",
      paragraphs: [
        "Online shops can use your browsing and purchase history to recommend products that match your interests and encourage you to shop more."
      ]
    },
    {
      heading: "How Can We Spend More Wisely?",
      bullets: [
        {
          title: "Use a Priority List",
          paragraph: "Separate your wants and needs, then list which products or items you should prioritize buying first."
        },
        {
          title: "Create a Simple Budget",
          paragraph: "Record your allowance and spending, then review them regularly to make more informed decisions."
        },
        {
          title: "Wait Before Buying",
          paragraph: "Try waiting 24–48 hours before making a non-urgent purchase. This can help you decide whether you genuinely need or want the item, rather than buying impulsively."
        }
      ]
    },
    {
      heading: "References",
      bullets: [
        {
          title: "OECD — Student Financial Literacy",
          paragraph: "https://www.oecd.org/en/topics/student-financial-literacy.html"
        },
        {
          title: "OECD — Financial Education",
          paragraph: "https://www.oecd.org/en/topics/sub-issues/financial-education.html"
        }
      ]
    }
  ]
},
{
  slug: "same-price-less-filling-shrinkflation",
  title: "Same Price, Less Filling? What Happened to My Snacks?",
  subtitle: "Understanding inflation, shrinkflation, and the real price of everyday products",
  category: "Economy & Everyday Life",
  contributors: ["YouthFunded Team"],
  publishedAt: "October, 2026",
  excerpt: "Have your favorite snacks become smaller while their prices stay the same? Discover how shrinkflation changes the amount consumers receive for their money.",
  coverImage: "",
  sections: [
    {
      heading: "What Happened to My Snacks?",
      paragraphs: [
        "Have you ever bought your favorite chocolate bar and noticed that it seems smaller than before? You might be experiencing shrinkflation!"
      ]
    },
    {
      heading: "What Is Inflation?",
      paragraphs: [
        "Inflation is a general increase in the prices of goods and services over time. When the costs of ingredients, packaging, electricity, and transportation increase, chocolate manufacturers may face higher production costs.",
        "Businesses may respond by increasing prices or reducing the amount of chocolate in each package."
      ]
    },
    {
      heading: "What Is Shrinkflation?",
      paragraphs: [
        "Shrinkflation happens when a product's quantity decreases while its price stays the same or sometimes increases.",
        "For example, imagine a chocolate bar changes from 100 grams to 85 grams, but its price remains Rp15,000. You pay the same amount but receive 15% less chocolate."
      ]
    },
    {
      heading: "How Does It Affect Consumers?",
      paragraphs: [
        "Imagine a chocolate bar originally contained 100 grams and cost Rp15,000. Its original price was Rp150 per gram. If the bar later contains only 85 grams at the same price, you pay approximately Rp176.47 per gram.",
        "That means the price per gram increases by about 17.6%, even though the price printed on the package has not changed."
      ]
    },
    {
      heading: "How Can We Be Smarter Consumers?",
      bullets: [
        {
          title: "Check the Product's Weight",
          paragraph: "Look at the weight or net contents printed on the package."
        },
        {
          title: "Compare Unit Prices",
          paragraph: "Compare the price per gram instead of looking only at the package price."
        },
        {
          title: "Read the Packaging Carefully",
          paragraph: "Pay attention to the product's size and quantity, as they may change over time."
        }
      ],
      closingParagraphs: [
        "The takeaway: Inflation can increase production costs, and shrinkflation is one way companies may respond. Always check how much product you are actually getting for your money!"
      ]
    }
  ]
},
{
  slug: "building-a-resilient-investment-portfolio",
  title: "Building a Resilient Investment Portfolio: Diversification and Risk Management",
  subtitle: "Understanding financial security, diversification, and the relationship between risk and return",
  category: "Financial Literacy",
  contributors: ["YouthFunded Team"],
  publishedAt: "October, 2026",
  excerpt: "Why does diversification matter? Explore how spreading risk, maintaining emergency savings, and reviewing financial goals can contribute to a more resilient financial plan.",
  coverImage: "",
  sections: [
    {
      heading: "A Thought-Provoking Question",
      paragraphs: [
        "Imagine you put all your money into one company's stock. If that stock loses much of its value, what could happen to your savings?",
        "The saying 'Don't put all your eggs in one basket' captures an important idea in finance: relying on a single investment can expose a portfolio to concentrated risk. Diversification is one approach to managing that risk."
      ]
    },
    {
      heading: "What Is Financial Security?",
      paragraphs: [
        "Financial security means having sufficient resources and a stable financial position to cover living expenses, respond to unexpected financial shocks, and work toward long-term goals without severe financial stress."
      ]
    },
    {
      heading: "What Is a Diversified Investment Portfolio?",
      paragraphs: [
        "Diversification means spreading investments across different asset classes — such as stocks, bonds, real estate, and cash equivalents — and across sectors. The goal is to avoid depending too heavily on one investment or one part of the market.",
        "Diversification does not eliminate investment risk or guarantee that a portfolio will avoid losses. It is a way to manage concentration risk."
      ]
    },
    {
      heading: "What Is Risk Management?",
      paragraphs: [
        "Risk management is the process of identifying, assessing, and responding to potential financial losses. Strategies can include maintaining emergency savings, balancing investments, and choosing financial products that are appropriate for a person's circumstances and risk tolerance."
      ]
    },
    {
      heading: "What Can Make a Portfolio More Resilient?",
      bullets: [
        {
          title: "Mix Different Types of Assets",
          paragraph: "A portfolio may combine growth-oriented assets, such as stocks, with assets that have different risk and return characteristics, such as bonds. The appropriate mix depends on an individual's goals, time horizon, and ability to handle risk."
        },
        {
          title: "Avoid Concentrating Everything in One Investment",
          paragraph: "Different investments may respond differently to market conditions. Holding a variety of assets can reduce the impact of poor performance in a single company, sector, or asset class, although losses are still possible."
        },
        {
          title: "Maintain Emergency Savings",
          paragraph: "Keeping accessible savings for unexpected expenses can reduce the need to sell long-term investments at an inconvenient time."
        },
        {
          title: "Review Your Financial Plan Periodically",
          paragraph: "Reviewing a portfolio from time to time can help determine whether its allocation still matches the original goals and risk tolerance. Rebalancing may be considered when the mix changes significantly."
        }
      ]
    },
    {
      heading: "Understanding Risk and Return Across Asset Classes",
      paragraphs: [
        "Risk and returns vary by product, market, currency, time period, and economic conditions. No asset class guarantees a particular return."
      ],
      bullets: [
        {
          title: "Cash and Money Market Instruments",
          paragraph: "Generally lower volatility and greater liquidity, often used for short-term needs and emergency reserves. Returns are usually more limited and may not keep pace with inflation."
        },
        {
          title: "Bonds and Fixed Income",
          paragraph: "May provide interest income and can have different risk levels depending on the issuer, maturity, and market conditions. Bond values can still fall."
        },
        {
          title: "Exchange-Traded Funds (ETFs)",
          paragraph: "An ETF is a fund traded on an exchange. Its risk depends on the assets it holds; an ETF can invest in shares, bonds, or other instruments and is not automatically low-risk."
        },
        {
          title: "Individual Stocks",
          paragraph: "Shares in a single company can have higher company-specific risk. Their value can rise or fall substantially, and investors may lose money."
        }
      ]
    },
    {
      heading: "A Hypothetical Example: Alex and Sarah",
      paragraphs: [
        "The following scenarios are simplified illustrations, not predictions of investment performance or recommendations."
      ],
      bullets: [
        {
          title: "Scenario A: Alex — Concentrated in One Investment",
          paragraph: "Alex puts all of his hypothetical investment savings into one technology company's stock. If that company's share price falls sharply, Alex's portfolio is heavily affected. If he also has no separate emergency savings, he may feel pressure to sell his investment to cover unexpected expenses."
        },
        {
          title: "Scenario B: Sarah — A More Diversified Mix",
          paragraph: "Sarah's hypothetical portfolio is spread across broad index funds, government bonds, and cash savings. If stock prices fall, other parts of her finances may respond differently. Her accessible savings may also help cover immediate expenses without requiring her to sell long-term investments."
        }
      ]
    },
    {
      heading: "A Financial Resilience Checklist",
      bullets: [
        {
          title: "Build a Safety Net",
          paragraph: "Learn about emergency savings and consider what level of accessible savings may be appropriate for your circumstances."
        },
        {
          title: "Understand Diversified Funds",
          paragraph: "Learn how broad index funds and ETFs work, what they hold, and what fees and risks they involve before making any financial decisions."
        },
        {
          title: "Be Careful with Automated Investing",
          paragraph: "Automated investing services and recurring contributions are financial tools that involve risk and may not be suitable for everyone. Understand the service, fees, and local rules before using them."
        },
        {
          title: "Review Your Goals",
          paragraph: "Revisit your financial goals and risk tolerance periodically. Consider seeking guidance from a qualified financial professional when appropriate."
        }
      ],
      closingParagraphs: [
        "Financial education is about understanding choices, risks, and long-term goals. Diversification and emergency savings are concepts worth learning, but no investment strategy can guarantee profits or prevent all losses. This article is for educational purposes only and is not personal investment advice."
      ]
    },
    {
      heading: "References",
      bullets: [
        {
          title: "Bodie, Kane, and Marcus (2021) — Investments, 12th Edition",
          paragraph: "McGraw-Hill Education."
        },
        {
          title: "Bogle (2017) — The Little Book of Common Sense Investing",
          paragraph: "John Wiley & Sons."
        },
        {
          title: "Consumer Financial Protection Bureau (2015) — Financial Well-Being: The Goal of Financial Education",
          paragraph: "CFPB Research Report."
        },
        {
          title: "Fabozzi and Markowitz (2011) — Equity Valuation and Portfolio Management",
          paragraph: "John Wiley & Sons."
        },
        {
          title: "Lander and Seay (2017) — Emergency Savings and Financial Stress: The Buffer Effect",
          paragraph: "Journal of Financial Counseling and Planning, 28(2), 214–227."
        },
        {
          title: "Malkiel (2020) — A Random Walk Down Wall Street, 12th Edition",
          paragraph: "W. W. Norton & Company."
        },
        {
          title: "Markowitz (1952) — Portfolio Selection",
          paragraph: "The Journal of Finance, 7(1), 77–91."
        },
        {
          title: "Vanguard Research (2021) — Getting Back on Track: The Imperative of Portfolio Rebalancing",
          paragraph: "Vanguard Investment Strategy Group."
        }
      ]
    }
  ]
}

  
  {
    slug: "where-does-your-money",
    title: "Where Does Your Money Really Go?",
    subtitle:
      "Understanding the Habits Behind Your Spending",
    category: "Finance & Lifestyle",
    contributors: ["YouthFunded Team"],
    publishedAt: "September, 2026",
    excerpt: "Learn how tracking your spending can help you make more deliberate financial decisions.",
    coverImage: "/images/dompetkosong.jpg",
    sections: [
      {
        heading: "",
        paragraphs: [
          "Have you ever checked your bank balance and wondered where all your money went? It seems to disappear, even though you cannot recall making any big purchases that month. If someone asked where your money goes, you might list school supplies, transportation, skincare, food, and other daily necessities. But after adding them all up, you might still wonder where the rest went",
          "Well, a few small purchases each day can add up to a considerable amount over several weeks. Money that could have gone toward savings, an emergency fund, or a future plan gradually disappears without us noticing. Understanding our spending habits is the first step toward making better use of what we have.",
        ]
      },
      {
        heading: "The Cost of Small Expenses",
        paragraphs: [
          "Managing personal finances often feels like trying to hold water in your hands. If you aren't paying close attention, it quickly slips through your fingers. The classic advice, `Tracking where your money goes stops you from wondering where it went,` hits the heart of good financial health. Most people do not lose their savings on huge, single purchases. Instead, their hard-earned paycheck slowly leaks away through small, daily spending. Bringing focus to your cash flow turns money from a mystery into a tool you control.",
          "When you do not track your daily choices, you fall victim to hidden costs. Small expenses like forgotten streaming subscriptions, daily coffee runs, and quick takeout orders feel tiny at the time. However, added up over a month, these small purchases quietly eat away at hundreds of dollars. That is money that could have built a safety net or paid for a trip. Tracking your spending shines a light on these habits, showing you exactly where your money vanishes.",
          "Tracking your money gives you clear facts to make better choices. Knowing your numbers is not about feeling guilty for buying things you enjoy. It is about making sure your spending matches your real goals. Once you see where your cash goes each week, you can make smart adjustments without feeling stressed. You stop worrying about a low bank balance at the end of the month because you are actively guiding your funds.",
          "Tracking your money moves you from constant stress to real confidence. The uneasy feeling of wondering where your paycheck went disappears when you take control. By taking a few minutes each week to review your receipts or check your banking app, you trade guesswork for stability. You ensure every dollar you earn helps build the life you actually want.",
        ]
      }
    ],
    instagramUrl: 
      "https://www.instagram.com/p/Ddlr4W1AT8D/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
  },
  
  {
    slug: "building-a-saving-habit",
    title: "Building a Saving Habit Early Creates Financial Security in the Future",
    subtitle:
      "Why Starting Small Today Can Help You Build a More Secure Tomorrow",
    category: "Finance & Lifestyle",
    contributors: ["YouthFunded Team"],
    publishedAt: "September, 2026",
    excerpt:
      "Saving is more than putting money aside. It builds discipline, helps us reach our goals, prepares us for unexpected expenses, and creates financial security for the future.",
    coverImage: "/images/saving-habit.jpg",
    sections: [
      {
        heading: "Introduction: A Small Habit with a Big Impact",
        paragraphs: [
          "Have you ever put your spare allowance into a pig-shaped piggy bank? That small habit many of us practised during childhood is an example of saving.",
          "Saving simply means setting aside a portion of our income and reserving it for future use. Although it may seem like a small action, consistently saving money can help us develop healthier financial habits and become better prepared for the future.",
          "So, why is saving important, what challenges can make it difficult, and how can we start building this habit from an early age?"
        ]
      },
      {
        heading: "The Benefits of Saving",
        bullets: [
          {
            title: "1. Building Financial Discipline",
            paragraph:
              "Regularly setting aside part of our allowance teaches us consistency and self-control. Over time, this discipline can support other financial habits, including budgeting and learning about investing. Saving also helps us practise delayed gratification: the ability to resist an immediate reward in favour of a more meaningful future benefit (Ungvarsky & Janine, 2021). Instead of making decisions based only on our feelings, we learn to consider our future needs and priorities."
          },
          {
            title: "2. Making Our Goals Easier to Achieve",
            paragraph:
              "Everyone has personal goals, from buying something online to planning for further education. Rather than borrowing money or going into debt to fulfil these goals, we can save gradually and consistently. Setting aside a portion of our money for specific purposes helps us work towards our goals while developing patience and avoiding unnecessary spending (PermataBank, 2024)."
          },
          {
            title: "3. Preparing for Emergencies",
            paragraph:
              "An emergency fund is money reserved specifically for unexpected expenses or financial emergencies (Consumer Financial Protection Bureau, 2025). These situations may include losing a job, a car breakdown, an illness, or an unexpected expense involving a family member or pet (Rutgers Cooperative Extension, 2009). Regular saving helps us prepare for unforeseen events and may reduce our need to rely on credit cards or loans that could lead to debt."
          }
        ]
      },
      {
        heading: "The Challenges of Saving",
        bullets: [
          {
            title: "1. Lack of Budgeting Can Lead to Overspending",
            paragraph:
              "Budgeting involves planning and tracking how we spend our money and how much we intend to save over a particular period. Without a budget, it can be easy to spend too much on non-essential items, leaving less money available for savings. One way to organise our finances is the 50/30/20 rule, which divides after-tax income into three categories: 50% for needs, 30% for wants, and 20% for savings and financial goals."
          },
          {
            title: "2. FOMO (Fear of Missing Out)",
            paragraph:
              "FOMO is the fear of missing out on something exciting, important, or valuable if we do not act immediately. It can encourage impulsive purchases, especially when we see trending products, online promotions, or what other people are buying. As spending increases, the money we planned to save may gradually disappear. Learning to pause before making a purchase and asking whether it is truly necessary can help us stay focused on our financial goals."
          },
          {
            title: "3. Lack of Financial Literacy",
            paragraph:
              "Financial literacy means having the knowledge, skills, and attitudes needed to understand financial concepts and risks and make informed decisions in different financial situations (OECD, 2022). Research on student financial literacy highlights the importance of financial knowledge and positive financial behaviour, including saving. However, access to financial education can vary depending on factors such as socioeconomic background and family environment. Schools and governments can help by ensuring that students from different backgrounds have opportunities to learn essential financial skills."
          }
        ]
      },
      {
        heading: "Why Saving Creates Financial Security",
        paragraphs: [
          "Financial security means being able to meet our financial obligations, manage debt responsibly, and feel more confident about our financial future (Zell, 2025). Building a saving habit early can help us move towards this goal because even small amounts can accumulate over time.",
          "More importantly, regular savings provide a financial cushion when unexpected expenses arise. This can reduce our reliance on borrowing and help us manage difficult situations with greater confidence.",
          "Saving early also gives us more time to prepare for bigger goals, such as pursuing higher education, starting a business, or making other important life decisions.",
          "Ultimately, financial security does not depend only on earning a large income. It also depends on how effectively we manage the money we already have."
        ]
      },
      {
        heading: "Practical Ways to Start Saving",
        paragraphs: [
          "According to Bank of America (2022), one of the first steps towards saving is understanding where our money goes. Tracking daily expenses helps us identify which costs are necessary and which ones we may be able to reduce."
        ],
        bullets: [
          {
            title: "1. Track Your Spending",
            paragraph:
              "Write down your daily expenses or use a budgeting app or spreadsheet. Reviewing your spending helps you recognise patterns and identify opportunities to save."
          },
          {
            title: "2. Set a Realistic Savings Target",
            paragraph:
              "Decide how much you can comfortably save from your allowance or income. Start with an achievable amount and adjust it as your financial situation changes."
          },
          {
            title: "3. Give Your Savings a Purpose",
            paragraph:
              "Set a clear goal, such as saving for a book, an educational course, or another important purchase. Having a specific target and timeframe can make saving feel more meaningful and help you stay motivated."
          },
          {
            title: "4. Review Your Progress Regularly",
            paragraph:
              "Check your budget and savings at the end of each week or month. This helps you see whether you are making progress and whether you need to adjust your spending."
          }
        ],
        closingParagraphs: [
          "Remember, saving does not have to be perfect from the beginning. What matters most is starting with a realistic plan and staying consistent."
        ]
      },
      {
        heading: "Conclusion: Start Small, Think Long-Term",
        paragraphs: [
          "Building a saving habit is about developing better financial habits today to support greater stability in the future. Saving teaches us discipline, helps us set and achieve our goals, and prepares us for unexpected situations.",
          "Although challenges such as overspending, FOMO, and limited financial literacy can make saving more difficult, small and consistent steps can make the habit easier to maintain.",
          "Financial security is built over time. The earlier we learn to manage our money and set some of it aside, the more prepared we can become for the opportunities and challenges ahead."
        ]
      },
      {
        heading: "Bibliography",
        paragraphs: [
          "The following resources provide further information about saving, financial literacy, budgeting, and financial security."
        ],
        bullets: [
          {
            title: "Bank of America (2022) — 8 Simple Ways to Save Money",
            paragraph:
              "https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/ways-to-save-money"
          },
          {
            title: "Citizens Bank — Barriers to Saving Money",
            paragraph:
              "https://www.citizensbank.com/learning/barriers-to-saving-money.aspx"
          },
          {
            title: "Consumer Financial Protection Bureau (2025) — An Essential Guide to Building an Emergency Fund",
            paragraph:
              "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"
          },
          {
            title: "Investopedia (2026) — Savings",
            paragraph:
              "https://www.investopedia.com/terms/s/savings.asp"
          },
          {
            title: "Jim Rohn International (2026) — The Discipline of Saving",
            paragraph:
              "https://www.jimrohn.com/wisdom/articles/discipline-of-saving"
          },
          {
            title: "OECD (2022) — Student Financial Literacy",
            paragraph:
              "https://www.oecd.org/en/topics/student-financial-literacy.html"
          },
          {
            title: "PermataBank (2024) — 6 Benefits of Saving Money at a Young Age",
            paragraph:
              "https://www.permatabank.com"
          },
          {
            title: "Partner Bank (2026) — FOMO and FOBO: Saving and Wealth Building",
            paragraph:
              "https://www.partnerbank.at/en/fomo-and-fobo-saving-and-wealth-building"
          },
          {
            title: "Rutgers Cooperative Extension (2009) — Finance",
            paragraph:
              "https://njaes.rutgers.edu/sshw/message/message.php?p=Finance&m=122"
          },
          {
            title: "SoFi — Zell (2025), Guide to Financial Security and Achieving It",
            paragraph:
              "https://www.sofi.com/learn/content/achieving-financial-security/"
          }
        ]
      }
    ],
    instagramUrl: ""
  },
  
  {
    slug: "the-50-30-20-rule",
    title: "The 50/30/20 Rule for Budgeting",
    subtitle:
      "A Simple Guide to Managing Your Money and Building Healthy Financial Habits",
    category: "Finance & Lifestyle",
    contributors: ["YouthFunded Team"],
    publishedAt: "September, 2026",
    excerpt:
      "Learn how the 50/30/20 budgeting rule can help you balance essential expenses, personal wants, and savings while building healthier financial habits for the future.",
    coverImage: "/images/50-30-20.jpg",
    sections: [
      {
        heading: "What Is the 50/30/20 Rule?",
        paragraphs: [
          "Managing money doesn't have to be complicated. The 50/30/20 rule is a simple budgeting method that helps you become more aware of your spending habits, avoid overspending, and save for your future.",
          "The idea is to divide your after-tax income into three categories: 50% for needs, 30% for wants, and 20% for savings and financial goals. This approach gives you a clearer picture of where your money goes and helps you make more intentional financial decisions."
        ]
      },
      {
        heading: "50% for Needs",
        paragraphs: [
          "Needs are essential expenses that support your health, safety, and everyday life. These are things you generally cannot avoid paying for."
        ],
        bullets: [
          {
            title: "Housing",
            paragraph:
              "Rent or mortgage payments that provide you with a place to live."
          },
          {
            title: "Utilities",
            paragraph:
              "Essential bills such as electricity, water, and other basic household services."
          },
          {
            title: "Healthcare",
            paragraph:
              "Necessary medical expenses, healthcare services, and essential medication."
          },
          {
            title: "Groceries",
            paragraph:
              "Food and other basic household necessities that you need for daily living."
          }
        ],
        closingParagraphs: [
          "Ideally, these expenses should take up around 50% of your after-tax income. If your needs exceed this amount, review your spending and see whether there are practical ways to reduce costs. However, essential needs should not be neglected just to meet a percentage.",
          "If your essential expenses are below 50%, you can consider putting the extra money toward savings, financial goals, or other budget categories."
        ]
      },
      {
        heading: "30% for Wants",
        paragraphs: [
          "Wants are things that make life more enjoyable but are not essential for everyday living. Unlike needs, these are expenses you can usually adjust or postpone when necessary."
        ],
        bullets: [
          {
            title: "Entertainment and Hobbies",
            paragraph:
              "Activities such as gaming, reading for fun, or pursuing personal interests."
          },
          {
            title: "Holidays and Travel",
            paragraph:
              "Trips and vacations that allow you to explore new places and enjoy your free time."
          },
          {
            title: "Dining Out",
            paragraph:
              "Eating at restaurants, ordering food, or visiting cafés for enjoyment."
          },
          {
            title: "Digital Subscriptions",
            paragraph:
              "Optional services such as Netflix, Amazon subscriptions, and other streaming platforms."
          }
        ],
        closingParagraphs: [
          "Keeping wants within your budget doesn't mean you have to stop enjoying life. Instead, look for ways to spend more thoughtfully. For example, cooking at home can often cost less than eating out regularly. Planning your meals ahead of time may help you save money without giving up enjoyable experiences."
        ]
      },
      {
        heading: "20% for Savings and Financial Goals",
        paragraphs: [
          "Savings are the money you set aside for your future. Allocating around 20% of your after-tax income to savings and financial goals can help you prepare for unexpected expenses and work toward long-term plans.",
          "One important goal is building an emergency fund. Unexpected situations, such as a car repair or medical bill, can happen at any time. Having savings available may reduce the need to rely on borrowed money or credit cards."
        ],
        bullets: [
          {
            title: "Build an Emergency Fund",
            paragraph:
              "Set aside money for unexpected expenses so that you have a financial cushion when life does not go according to plan."
          },
          {
            title: "Prepare for Future Goals",
            paragraph:
              "Save gradually for important milestones, such as further education, buying a home, or starting a business."
          },
          {
            title: "Explore Long-Term Saving and Investing",
            paragraph:
              "Once your immediate needs and financial circumstances are considered, learn about suitable saving and investment options. Understand the risks before making investment decisions."
          }
        ],
        closingParagraphs: [
          "Remember that saving consistently is more important than following a percentage perfectly. If your current income is limited, start with an amount you can realistically set aside and adjust as your circumstances change."
        ]
      },
      {
        heading: "Make the Rule Work for You",
        paragraphs: [
          "The 50/30/20 rule shows that budgeting does not need to be overly complicated. It provides a simple starting point for enjoying your money today while preparing for tomorrow.",
          "However, everyone's financial situation is different. Housing costs, family responsibilities, income, and personal goals can affect how much you need to spend. Treat these percentages as a guide rather than a strict requirement, and adjust them to fit your circumstances.",
          "Being on a budget is not about restricting yourself from everything you enjoy. It is about understanding your priorities, making thoughtful choices, and developing habits that support your future."
        ],
        closingParagraphs: [
          "Start small, stay consistent, and give your future self something to thank you for. :)"
        ]
      },
      {
        heading: "Sources",
        paragraphs: [
          "Explore these resources to learn more about the 50/30/20 budgeting rule and the difference between needs and wants."
        ],
        bullets: [
          {
            title: "UNFCU — The 50/30/20 Rule",
            paragraph:
              "https://www.unfcu.org/financial-wellness/50-30-20-rule/"
          },
          {
            title: "Zurich Ireland — What Is the 50/30/20 Rule in Budgeting?",
            paragraph:
              "https://www.zurich.ie/blog/what-is-50-30-20-rule-in-budgeting-rule/"
          },
          {
            title: "Academia.edu — What Is a Need?",
            paragraph:
              "https://www.academia.edu/28281144/What_is_a_need"
          },
          {
            title: "ICICI Prudential Life Insurance — The 50/30/20 Budgeting Rule",
            paragraph:
              "https://www.iciciprulife.com/protection-saving-plans/what-is-the-50-30-20-rule-for-budgeting.html"
          }
        ]
      }
    ],
    instagramUrl:
      "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTI1NTQ0Nzc4NzA2MjQ5?story_media_id=3954528930601483337_74820423310&rpxt=czF1dnBoY3U1OHBk"
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
    coverImage: "/images/avoiding-unemployment.jpg",
    sections: [
      {
        heading: "What does Unemployment refers to?",
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
  },
  
  {
    slug: "need-vs-want",
    title: "Need vs Want: Which Is More Important?",
    subtitle: "Understanding the difference between what we need and what we want",
    category: "Youth & Career",
    contributors: ["Neca", "Bianca"],
    publishedAt: "August, 2026",
    excerpt:
      "Understanding the difference between needs and wants can help us make smarter financial decisions in a world full of trends, advertisements, and social media influence.",
    coverImage: "/images/need-vs-want.jpg",
    sections: [
      {
        heading: "I NEED that",
        paragraphs: [
          "We all know the feeling when you’re scrolling through Instagram or TikTok and suddenly see a pair of shoes, a new gadget, or something you didn’t even know existed before. And somehow, you immediately say, “I NEED that.”",
          "But do you actually need it? Understanding the difference between needs and wants might sound simple, but it can be surprisingly difficult in everyday life. We live in a world where ads, trends, influencers, and social media constantly encourage us to buy more things. Sometimes it’s something we want; sometimes it’s something we need.",
          "What’s the actual difference?"
        ]
      },
      {
        heading: "What Is a Need?",
        paragraphs: [
          "Needs are things that are essential to our everyday lives, such as food, health care, safety, and other basic necessities.",
          "Needs usually come before wants because they are necessary for us to live and function properly. For example, if you need a notebook for school, buying one is a need because it helps you complete something important.",
          "However, not everybody’s needs are the same. For one person, transportation might mean paying for a bus, while for another, it might mean maintaining a car because they need it to get to work."
        ]
      },
      {
        heading: "What Is a Want?",
        paragraphs: [
          "Wants are things we would like to have but can live without. Maybe you want the newest phone even though your current one works perfectly. Maybe you want to order your favorite food instead of eating what you already have at home. Or maybe you want a new pair of shoes even though you already own several pairs.",
          "Here’s the thing: there’s nothing wrong with wanting these things. Wants can make life more enjoyable. They give us opportunities to have fun, express ourselves, and enjoy the money we’ve earned."
        ]
      },
      {
        heading: "Why Does the Difference Matter?",
        paragraphs: [
          "Knowing the difference between needs and wants can help you make better choices with your money. It doesn’t mean you should never buy things you want. Wants are okay! You’re allowed to enjoy your money and treat yourself.",
          "The important thing is making sure your needs come first and your wants fit into what you can actually afford.",
          "So, before you buy something, ask yourself:",
          "“Do I need it, or do I just really, really want it?”"
        ]
      },
      {
        heading: "Sources",
        bullets: [
          {
            title: "Investopedia",
            paragraph:
              "https://www.investopedia.com/difference-between-needs-and-wants-8612333"
          },
          {
            title: "MABS Ireland",
            paragraph:
              "https://www.mabs.ie/en/blog/needs-vs-wants-what-is-the-difference/"
          }
        ]
      }
    ],
    instagramUrl: "https://www.instagram.com/p/DcYDraPgWWE/?mdxt=ZTJmOGFjMXIxajBo"
  },
  {
    slug: "indonesias-nickel-industry",
    title: "Indonesia's Nickel Industry",
    subtitle:
      "Understanding the Benefits and Challenges of Nickel Mining",
    category: "Economy & Environment",
    contributors: ["Bianca H.", "Neca"],
    publishedAt: "July, 2026",
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
        ],
      }
    ],
    instagramUrl: "https://www.instagram.com/p/DbQKT5aAY9i/?rpxt=MXFhNm5wM3pmcXVobA=="
  },

];

const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] =
    useState<Article | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [selectedArticle]);
  

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
              <p className="section-label">YOUTHFUNDED · OUR ARTICLES</p>

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
