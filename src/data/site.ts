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
  yearsExperience: 9,
  // Downloadable CV (served from /public).
  resumeFile: "/Zeeshan-Mahmood-CV.pdf",
  resumeUpdated: "September 2026",
  socials: {
    linkedin: "https://www.linkedin.com/in/zeeshanmahmood08",
    github: "https://github.com/offthemainthread",
  },
  // Short intro shown in the hero.
  intro:
    "Software architect and full-stack engineer with ~9 years of experience, from IoT platforms and microservices serving 50K+ users to a full cross-platform marketplace built end to end. Strongest on the backend and distributed systems, and comfortable across the stack and on mobile.",
  // Subtle availability note shown in the hero.
  status: "Open to full-stack, backend & architecture roles",
  // Longer about paragraphs.
  about: [
    "Over the past nine years I've worked across the stack, but my home is on the backend: distributed systems, microservices, event-driven architectures, and the observability and CI/CD tooling that keeps them healthy. I've led migrations, cut incident recovery times, and built platforms that scale.",
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
};

export const experience: Experience[] = [
  {
    company: "Stealth Startup",
    role: "Software Architect & Consultant",
    period: "May 2026 – Present",
    location: "Ontario, Canada",
    highlights: [
      "Architected and built a full-stack peer-to-peer marketplace end to end as sole developer: a cross-platform mobile app and web admin portal on Flutter and Supabase, structured with Clean Architecture and Riverpod.",
      "Designed a Stripe Connect payments system with escrow-style authorize-and-capture flows, deposit holds, seller payouts, and automated dispute settlement, implemented through serverless edge functions and webhooks.",
      "Architected a real-time location-tracking and safety platform (Flutter, Firebase, Google Maps) designed to scale to millions of location updates, with an event-driven geofencing pipeline that pushes and escalates alerts.",
      "Secured multi-tenant data with Postgres row-level security and Firestore RBAC rules, covered by automated tests.",
      "Established TDD and CI quality gates across unit, widget, integration and end-to-end tests, and isolated third-party SDKs behind provider-agnostic interfaces so vendors can be swapped without UI changes.",
    ],
  },
  {
    company: "Careem",
    role: "Senior Software Engineer",
    period: "Jul 2024 – Apr 2026",
    location: "Islamabad, Pakistan",
    highlights: [
      "Engineered and scaled an IoT platform integrating 1000+ smart mobility vehicles from two vendors into Go-based microservices over TCP, with IMEI-based connection validation.",
      "Improved reliability and performance: migrated observability to Dynatrace (−40% MTTR), tuned slow DB queries (−25% response times), and moved IoT device updates to Kafka (−10% update latency, decoupled from other services).",
      "Delivered compliance and fraud-prevention features, including geo-fencing in the backend and operations portal (100% regulatory compliance) and a backend pre-authorization workflow that cut financial losses by ~20%.",
      "Strengthened release safety and incident response with feature toggles for staged rollouts, RFCs, product-readiness reviews, and on-call leadership (−35% outage recovery time).",
      "Raised the team's test-coverage standard to 90% across unit, integration and acceptance tests while shipping 5+ operations-portal features and resolving 20+ critical bugs; mentored and onboarded new engineers.",
    ],
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
    items: ["Node.js", "NestJS", "Microservices", "REST APIs", "WebSockets", "Event-Driven Architecture", "System Design", "Clean Architecture"],
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
