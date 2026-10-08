// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit this file to update the site; no component changes needed.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Zeeshan Mahmood",
  shortName: "Zeeshan",
  role: "Software Architect & Full-Stack Engineer",
  tagline:
    "Software architect and full-stack engineer with deep backend and distributed-systems experience.",
  location: "ON, Canada",
  email: "hello@offthemainthread.com",
  yearsExperience: 8,
  // Downloadable CV (served from /public).
  resumeFile: "/Zeeshan-Mahmood-CV.pdf",
  resumeUpdated: "October 2026",
  socials: {
    linkedin: "https://www.linkedin.com/in/zeeshanmahmood08",
    github: "https://github.com/offthemainthread",
  },
  // Short intro shown in the hero.
  intro:
    "Software architect and full-stack engineer with 8 years of experience, from IoT platforms and microservices serving 50K+ users to a full cross-platform marketplace built end to end. Strongest on the backend and distributed systems, and comfortable across the stack and on mobile.",
  // Subtle availability note shown in the hero.
  status: "Open to full-stack, backend & architecture roles",
  // Longer about paragraphs.
  about: [
    "Over the past eight years I've worked across the stack, but my home is on the backend: distributed systems, microservices, event-driven architectures, and the observability and CI/CD tooling that keeps them healthy. I've led migrations, cut incident recovery times, and built platforms that scale.",
    "I've shipped in Go, Node.js/NestJS, and TypeScript on AWS, with Kafka for event streaming and Dynatrace, New Relic, and Sentry for observability. More recently I've architected and built full products end to end, like a cross-platform Flutter app with a Supabase/Postgres backend and Stripe Connect payments. I still enjoy the engineering-leadership side too: authoring RFCs, running product-readiness reviews, mentoring teammates, and raising the bar on quality and delivery speed.",
    "I'm pursuing a Master of Applied Computing at Wilfrid Laurier University (2025 to 2027) and hold a Bachelor of Mechatronics Engineering from NUST CEME. I'm based in Brantford, Ontario.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Stealth Startup",
    role: "Software Architect & Consultant",
    period: "May 2026 – Present",
    location: "Ontario, Canada",
    highlights: [
      "Architected and shipped a peer-to-peer marketplace solo in 2 months, now in active beta with 200+ testers: a cross-platform Flutter app and web admin portal on Supabase using Clean Architecture and Riverpod.",
      "Designed a Stripe Connect payments system (authorize-and-capture escrow, deposit holds, seller payouts, automated dispute settlement) on serverless edge functions and webhooks, removing manual payout and dispute handling.",
      "Built a real-time location-tracking and safety platform (Flutter, Firebase, Google Maps) with an event-driven geofencing pipeline that sends push alerts and escalates unacknowledged ones.",
      "Enforced multi-tenant data isolation with Postgres row-level security and Firestore RBAC rules (zero cross-tenant access in security tests), and set up TDD and CI gates across unit, widget, integration and end-to-end tests.",
      "Isolated third-party SDKs behind provider-agnostic interfaces, so database and auth swaps needed no UI changes.",
    ],
    tags: ["Flutter", "Supabase", "PostgreSQL", "Firebase", "Stripe Connect", "Clean Architecture", "Serverless", "Multi-tenancy", "TDD"],
  },
  {
    company: "Careem",
    role: "Senior Software Engineer",
    period: "Jul 2024 – Apr 2026",
    location: "Islamabad, Pakistan",
    highlights: [
      "Scaled an IoT platform by integrating 1000+ smart mobility vehicles from two vendors into Go microservices over TCP with IMEI-based connection validation.",
      "Cut MTTR by 40% by migrating observability to Dynatrace, sped up responses by 25% by tuning slow database queries, and reduced IoT update latency by 10% by moving to Kafka events.",
      "Reduced financial losses by ~20% with a backend pre-authorization workflow, and delivered geo-fencing across the backend and the Next.js operations portal to meet regulatory requirements.",
      "Designed for graceful degradation over full failure and led incident response, cutting outage recovery time by 35% through staged rollouts, RFCs, Product Readiness Reviews and incident documentation.",
      "Raised the team's test coverage standard to 90%, shipped 5+ operations portal features, resolved 20+ critical bugs, and mentored and onboarded new engineers.",
    ],
    tags: ["Go", "Java", "Spring Boot", "Kafka", "Microservices", "IoT", "Dynatrace", "Next.js", "Incident response", "Feature flags", "TDD"],
  },
  {
    company: "Fiber Mountain",
    role: "Senior Software Engineer",
    period: "Sep 2022 – Jul 2024",
    location: "Islamabad, Pakistan",
    highlights: [
      "Devised and executed an automation strategy on AWS and GitHub Actions, establishing efficient build pipelines and cutting packaging time ~15%.",
      "Introduced coding standards across 6+ projects (linting, pre-commit hooks, sanity builds, contribution guidelines, TDD), reducing 50+ code smells and lifting coverage ~30%.",
      "Translated product requirements into RFCs and allocated work across the team, improving efficiency and reducing feature development time.",
      "Led the transition from a synchronous system architecture to an events-based framework, improving real-time data update speed ~15%.",
      "Migrated Git repositories from legacy on-prem systems to GitHub with sanity pipelines, branch protection, and code-owner configurations.",
    ],
    tags: ["Event-driven architecture", "AWS", "GitHub Actions", "CI/CD", "TDD", "RFCs", "Mentoring"],
  },
  {
    company: "Retailo",
    role: "Senior Software Engineer",
    period: "Oct 2021 – Sep 2022",
    location: "Islamabad, Pakistan",
    highlights: [
      "Transitioned 5+ monolithic modules to microservices, improving API response time ~25%.",
      "Led the revamp of core infrastructure services (authorization, configuration) to support a fast-growing user base of 50K+.",
      "Rebuilt the authentication mechanism and shipped a private NPM auth utility via GitLab CI/CD, adopted across 15+ backend services.",
      "Standardized logging and internal API documentation, cutting cloud costs 15%+, and designed a custom architecture for distributed transactions across microservices.",
      "Integrated system monitoring (New Relic, Sentry) for deeper insight into bottlenecks and service crashes.",
    ],
    tags: ["Node.js", "Microservices", "Distributed transactions", "GitLab CI/CD", "New Relic", "Sentry", "Authorization"],
  },
  {
    company: "Xgrid",
    role: "Software Engineer II",
    period: "Jan 2019 – Sep 2021",
    location: "Islamabad, Pakistan",
    highlights: [
      "Used service workers to move data processing to the background, boosting UI performance ~20%.",
      "Developed and maintained the frontend for a scalable system handling large data volumes with Angular v8, REST APIs, and WebSockets.",
      "Built serverless APIs with Auth0 authentication using AWS Lambda and API Gateway.",
    ],
    tags: ["Angular", "WebSockets", "REST APIs", "AWS Lambda", "API Gateway", "Auth0", "Service workers"],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Master of Applied Computing",
    school: "Wilfrid Laurier University",
    location: "Canada",
    period: "Sep 2025 – Dec 2027 (Expected)",
  },
  {
    degree: "Bachelor of Mechatronics Engineering",
    school: "NUST CEME",
    location: "Pakistan",
    period: "Sep 2014 – Jul 2018",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Go", "TypeScript", "JavaScript", "Dart", "Java", "Bash"] },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Spring Boot", "Microservices", "REST APIs", "WebSockets", "Event-Driven Architecture", "System Design", "Clean Architecture"],
  },
  { label: "Frontend & Mobile", items: ["React", "Next.js", "Angular", "Flutter", "Riverpod"] },
  { label: "Cloud & Data", items: ["AWS", "Firebase", "Supabase", "PostgreSQL", "Kafka", "Stripe Connect"] },
  { label: "DevOps & CI/CD", items: ["GitHub Actions", "GitLab CI/CD", "Git", "Linux", "TDD", "CI/CD"] },
  { label: "Observability", items: ["Dynatrace", "New Relic", "Sentry"] },
  { label: "Ways of working", items: ["Agile", "RFCs", "Documentation", "Mentoring"] },
];

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/#contact" },
];
