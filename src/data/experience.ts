export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  technologies?: string[];
};

export const experience: Experience[] = [
  {
    company: "Visa",
    role: "Senior Software Engineer",
    period: "Jan 2025 - Present",
    location: "Singapore",
    summary:
      "Appointed as one of two GenAI practitioners for a regional clearing and settlement engineering organization, while continuing to build high-performance payment systems.",
    bullets: [
      "Conducted workshops on LLM tooling and agentic AI workflows for roughly 60 engineers and directors.",
      "Designed reentrant C++ components for fee and interchange calculation modules that support global settlement and revenue computation.",
      "Optimized production transaction processing to roughly 500 microseconds, with local test paths reaching roughly 200 microseconds against an initial 3 millisecond target.",
      "Architected socket and Go-based APIs that improved throughput from roughly 5,000 to 25,000 transactions per second.",
      "Designed an internal AI system with tool-calling, an LLM backend, and an Angular chat interface to support natural-language access to transaction-clearing API documentation."
    ],
    technologies: ["C++", "Go", "Python", "Boost", "Sockets", "Angular", "LLMs"]
  },
  {
    company: "Visa",
    role: "Software Engineer",
    period: "Jun 2022 - Dec 2024",
    location: "Singapore",
    summary:
      "Built and maintained payment software components supporting client validation workflows before transaction submission to VisaNet.",
    bullets: [
      "Developed C++ components and Python scripts for a client-facing transaction validation product.",
      "Supported a product contributing more than 20M USD in annual revenue.",
      "Worked in business-critical payment domains where correctness, reliability, and maintainability are core engineering constraints."
    ],
    technologies: ["C++", "Python", "Payments"]
  },
  {
    company: "Visa",
    role: "Software Engineer Intern",
    period: "May - Aug 2021",
    location: "Singapore",
    summary:
      "Worked on a REST API and web application stack for transaction testing and validation workflows.",
    bullets: [
      "Developed UI components and REST APIs using Angular, Spring Boot, and MSSQL.",
      "Supported bank-facing workflows used to verify transaction accuracy and speed within VisaNet."
    ],
    technologies: ["Angular", "Java", "Spring Boot", "MSSQL"]
  },
  {
    company: "DBS Bank",
    role: "Service Reliability Intern",
    period: "Jun - Aug 2020",
    location: "Singapore",
    summary:
      "Built API and reliability-monitoring features for internal service availability and performance reporting.",
    bullets: [
      "Created REST APIs for performance data ingestion and dashboard retrieval.",
      "Integrated API workflows with React interfaces and MongoDB-backed data stores.",
      "Helped integrate static analysis and dependency security tooling into Jenkins pipelines."
    ],
    technologies: ["Node.js", "React", "MongoDB", "Jenkins", "Postman"]
  }
];
