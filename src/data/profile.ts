export const profile = {
  name: "Shawn Lee Shi Jie",
  location: "Singapore",
  email: "shawnlsj97@gmail.com",
  siteUrl: "https://shawnlsj97.github.io",
  ogImage: "/og-image.svg",
  role: "Senior Software Engineer",
  headline:
    "Senior software engineer building low-latency payment systems and AI-powered engineering tools.",
  summary:
    "I work on Visa's global clearing and settlement systems, with recent focus on agentic AI workflows, incident intelligence, and developer productivity.",
  image: {
    src: "/images/profile/shawn-profile.jpg",
    alt: "Shawn Lee on a misty mountain lake."
  },
  resumeUrl: "/resume.pdf",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shawnlsj97/"
    },
    {
      label: "GitHub",
      href: "https://github.com/shawnlsj97"
    },
    {
      label: "Email",
      href: "mailto:shawnlsj97@gmail.com"
    }
  ]
};

export const metrics = [
  {
    value: "60+",
    label: "engineers supported",
    detail: "Led GenAI workflow enablement for engineers and directors across a regional Visa organization."
  },
  {
    value: "25k TPS",
    label: "API throughput",
    detail: "Improved socket and Go-based service throughput from 5k to 25k transactions per second."
  },
  {
    value: "500us",
    label: "production processing time",
    detail: "Optimized high-throughput C++ payment components, with local test paths reaching roughly 200us."
  },
  {
    value: "$20M+",
    label: "annual product revenue",
    detail: "Supported business-critical payment validation software contributing more than $20M annually."
  }
];
