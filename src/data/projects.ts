export type Project = {
  title: string;
  eyebrow: string;
  period: string;
  summary: string;
  impact: string[];
  technologies: string[];
  image?: {
    src: string;
    alt: string;
  };
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Visa Aegis",
    eyebrow: "AI-driven incident intelligence platform",
    period: "Apr - May 2026",
    summary:
      "An agentic platform that automates production incident triage, root-cause analysis, and severity assessment for complex operational workflows.",
    image: {
      src: "/images/projects/visa-aegis.png",
      alt: "Architecture diagram for a multi-agent incident intelligence workflow."
    },
    impact: [
      "Designed and built a multi-agent system that performs targeted troubleshooting, reducing manual investigation across high-friction incident response phases.",
      "Built a LangGraph pipeline with parallel fan-out context retrieval, cross-model self-critique, and conditional human-in-the-loop gating.",
      "Combined backend RAG retrieval over runbooks and historical incident knowledge with tool-calling capabilities for post-analysis Q&A."
    ],
    technologies: ["Python", "LangGraph", "RAG", "ChromaDB", "GPT-5.4", "Claude Opus 4.7"]
  },
  {
    title: "Random Forest Stock Trader",
    eyebrow: "Machine learning for trading",
    period: "Oct - Nov 2024",
    summary:
      "A Random Forest strategy trained with Bollinger Bands, Relative Strength Index, and Stochastic Oscillator indicators as part of Georgia Tech CS7646.",
    image: {
      src: "/images/projects/stock-trader.png",
      alt: "Out-of-sample trading performance chart comparing manual strategy and benchmark."
    },
    impact: [
      "Outperformed the benchmark buy-and-hold strategy by 150% in-sample and 40% out-of-sample.",
      "Built manual and learned strategies for controlled comparison across the same trading constraints.",
      "Used bagging with 20 randomized decision trees to generate trading signals."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    links: [
      {
        label: "Source code",
        href: "https://github.com/shawnlsj97/RandomForestStockTradingModel/tree/main"
      },
      {
        label: "Project report",
        href: "https://github.com/shawnlsj97/RandomForestStockTradingModel/blob/main/project_report.pdf"
      }
    ]
  },
  {
    title: "StalkFish",
    eyebrow: "Full-stack price intelligence platform",
    period: "Aug - Nov 2021",
    summary:
      "A microservices web application for a Singapore SME to monitor e-commerce competitor prices through web scraping, data visualization, and machine learning.",
    image: {
      src: "/images/projects/stalkfish.png",
      alt: "StalkFish dashboard showing competitor product monitoring for e-commerce pricing."
    },
    impact: [
      "Built a platform that automated competitor price monitoring across multiple e-commerce channels.",
      "Implemented dashboards, Telegram notifications, and pricing-model support for business users.",
      "Designed a cloud-native stack across React, AWS, Nginx, Kubernetes, MongoDB, PostgreSQL, Hasura GraphQL, and Python services."
    ],
    technologies: ["React", "AWS", "Kubernetes", "MongoDB", "PostgreSQL", "Hasura", "Python"],
    links: [
      {
        label: "Technical report",
        href: "https://docs.google.com/document/d/11ro6iKeZqZN_eop-1AZro9bEkF0jwL9_VqBuDsF4sAw/edit?usp=sharing"
      },
      {
        label: "Demo slides",
        href: "https://docs.google.com/presentation/d/17tcmA6D-BCUwxuKrqWu6UN3NiuGNfVtKlPhJNbjj6MQ/edit?usp=sharing"
      }
    ]
  }
];
