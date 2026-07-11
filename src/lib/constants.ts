export const PERSONAL_INFO = {
    name: 'Harsh Porwal',
    profession: 'Flutter Developer',
    overview: "Passionate Software Engineer with expertise in Flutter, Next.js, FastAPI, and Google Cloud Platform, building scalable AI-powered web and mobile applications. Experienced in AI-assisted development, applying Clean Architecture, SOLID principles, and industry best practices to deliver maintainable, production-ready software. Creator of products like TestSpecX, Maya AI, ReviewQR, and CloudCertify, leveraging Vertex AI, Gemini AI, FastAPI, and modern cloud technologies. Google Cloud Associate Cloud Engineer, Generative AI Leader, and Claude-certified professional dedicated to building innovative, user-centric solutions that solve real-world problems.",
    profileCartoon2: "/harsh_cartoon.png",
    email: 'Porwalharsh007@gmail.com',
    phone: '+91 8460946542',
    cvPath: '/cv.pdf',
};

export const SOCIAL_LINKS = {
    linkedin: 'https://linkedin.com/in/erharshporwal',
    github: 'https://github.com/MrHarsh007',
    instagram: 'https://www.instagram.com/hrporwal_007',
};

export const BUTTON_LABELS = {
    contactMe: 'Contact Me',
    downloadCV: 'Download CV',
};

export const ABOUT_ME = {
    detailedOverview: `Passionate Software Engineer with 2+ years of experience building scalable, high-performance mobile and web applications using Flutter and Next.js. I enjoy transforming ideas into impactful digital products by leveraging AI-assisted development while adhering to Clean Architecture, SOLID principles, coding standards, and industry best practices. My expertise includes Flutter, Next.js, BLoC, GetX, REST APIs, Firebase, Google Cloud Platform, and modern development workflows.

I have built and launched innovative products including TestSpecX, an AI-powered API testing platform; Maya AI, a multilingual devotional AI assistant; ReviewQR, an AI-driven review generation SaaS; and CloudCertify, a platform that helps learners prepare for Google Cloud certifications. These projects reflect my passion for combining AI, cloud technologies, and intuitive user experiences to solve real-world problems.

Certified as a Google Cloud Associate Cloud Engineer, Google Cloud Generative AI Leader, and Claude Code 101 & Introduction to Claude professional, I bring hands-on expertise in Google Cloud Platform (GCP), Vertex AI, cloud-native development, and AI-powered solutions. Driven by curiosity and continuous learning, I thrive in collaborative environments where I solve complex engineering challenges, explore emerging technologies, and build reliable, scalable products that create meaningful impact.`,
};

export const CERTIFICATIONS = [
    {
        title: "Associate Cloud Engineer Certification",
        issuer: "Google",
        issueDate: "Jan 2026",
        expiryDate: "Jan 2029",
        credentialId: "3539357db9b3442dbb68636f12523979",
        credentialUrl: "https://www.credly.com/badges/93ed2cd3-f7a6-4541-8402-5c687ff8fae7/public_url",
        icon: "Cloud",
        skills: [
            "Google Cloud Platform (GCP)",
            "Cloud Engineering",
            "Compute Engine",
            "Cloud Storage",
            "Virtual Machines",
            "Application Deployment",
            "Virtual Private Cloud (VPC)",
            "Cloud Networking",
            "Identity and Access Management (IAM)",
            "Associate Cloud Engineer"
        ]
    },
    {
        title: "Generative AI Leader Certification",
        issuer: "Google",
        issueDate: "Nov 2025",
        expiryDate: "Nov 2028",
        credentialId: "dd67d216022e42cdb1fc124701b6050e",
        credentialUrl: "https://www.credly.com/badges/595449fc-b699-4811-88b0-6253086e6e0a/public_url",
        icon: "Sparkles",
        skills: [
            "Artificial Intelligence (AI)",
            "Artificial Intelligence for Business",
            "Cloud Computing",
            "Generative AI",
            "Google Cloud Platform (GCP)"
        ]
    }
];



const Projects = [
    {
        title: "TestSpec-AI — Automated API Testing Platform",
        designation: "Founder & Developer",
        desc: "An AI-powered testing platform for FastAPI and OpenAPI endpoints. Users can dynamically generate, execute, and schedule test cases by simply providing a ReDoc link or OpenAPI schema. Features include automated test generation, custom workflow creation, detailed test summaries, and an integrated AI chatbot for testing assistance.",
        link: "https://www.testspec.tech/",
        techStack: ["Next.js", "FastAPI", "Google Cloud Platform", "Vertex AI", "Python", "TypeScript"],
    },
    {
        title: "Maya AI — Devotional AI Chat & Voice Assistant",
        designation: "Creator & Developer",
        desc: "A devotional AI chatbot inspired by the Bhagavad Gita, enabling users to interact via text and voice calls in both Hindi and English. Built to provide context-aware responses based on spiritual teachings.",
        link: "https://maya-ai-one.vercel.app/",
        techStack: ["Next.js", "FastAPI", "Google Cloud Platform", "ElevenLabs AI", "Python", "TypeScript"],
    },
    {
        title: "ReviewQR — AI-Powered Review Generation Platform",
        designation: "Founder & Developer",
        desc: "ReviewQR is a professional SaaS platform designed to help businesses and sales professionals boost their online reputation. It simplifies the customer feedback loop by combining personalized QR codes with AI-powered review assistance. Key features include AI-powered review generation leveraging Google Gemini AI to help customers draft high-quality, professional reviews in seconds, custom QR & ID card generation for branded QR posters and professional digital ID cards, an employee dashboard for sales staff to manage profiles and review links, and a mobile-first design with zero downloads required.",
        link: "https://reviewqr-ai.vercel.app",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini AI", "Firebase", "shadcn/ui", "Framer Motion", "Sentry"],
    },
    {
        title: "CloudCertify",
        designation: "Co-Founder & Developer",
        desc: "CloudCertify is your smart companion for Google Cloud certification prep. It offers daily practice quizzes, full-length mock tests, performance tracking, and curated resources — all in one seamless platform. Built with a modern full-stack approach, the app uses Firebase for authentication and hosting, FastAPI for backend APIs deployed on Cloud Run, and Elasticsearch for fast search and analytics. The UI, developed in Next.js, ensures a responsive and intuitive user experience. CloudCertify helps users prepare consistently and pass GCP exams with confidence.",
        link: "https://cloudcertify.web.app",
        techStack: ["Flutter", "Firebase", "FastAPI", "Bloc", "GoRouter", "Dio", "GetIt", "Injectable", "Clean Architecture"],
    },
    {
        "title": "MoviesBox",
        "designation": "Client Project",
        "desc": "Developed a comprehensive Flutter application for movie and TV show enthusiasts, enabling users to discover trending movies, explore detailed information, track favorites, and enjoy quizzes and notes for a personalized experience. Integrated Firebase services for analytics, crash reporting, and remote configuration, along with Google Mobile Ads for monetization. Implemented offline support with SQLite and ensured a smooth, modern UI with responsive design and onboarding screens.",
        "link": "https://github.com/MrHarsh007/moviebox",
        "techStack": ["Flutter", "BLoC", "Clean Architecture", "Firebase", "SQLite", "Dio", "Go Router", "Google Mobile Ads", "Get It", "Injectable"]
    },
    {
        title: "CSE Learning Hub",
        designation: "Founder & Developer",
        desc: "Developed a mobile app that streamlined the study experience for computer engineering students, providing access to over 1,500 previous papers, study materials, books, and DE reports from multiple colleges. Demonstrated strong problem-solving and product delivery skills by identifying student needs and delivering a high-impact solution.",
        link: "https://drive.google.com/drive/folders/1xfiahDTFZfNaA2IcU6Fb1R-IHu8Fseal",
        techStack: ["Flutter", "Firebase", "FireStore", "Remote Config",],
    },

];

export const ProjectPage = {
    projects: Projects,
    description: "Developed scalable mobile and web applications using Flutter, Next.js, Firebase, REST APIs, and Google Cloud Platform. Leveraged AI-assisted development to accelerate delivery while adhering to Clean Architecture, SOLID principles, coding standards, and industry best practices. Built feature-rich, high-performance applications with offline support, analytics, monetization, and seamless user experiences."
}


export const Skills = [
    {
        category: "Programming",
        icon: "Code2",
        skills: ["HTML", "CSS", "Python", "Flutter", "Dart"]
    },
    {
        category: "State Management",
        icon: "GitBranch",
        skills: ["BLoC", "GetX", "Dependency Injection", "GetIt", "Injectable"]
    },
    {
        category: "Google Cloud Platform",
        icon: "Cloud",
        skills: [
            "Compute Engine",
            "Cloud Storage",
            "Identity and Access Management (IAM)",
            "Cloud Run",
            "Cloud Functions",
            "Google ADK"
        ]
    },
    {
        category: "AI & Machine Learning",
        icon: "Brain",
        skills: [
            "Artificial Intelligence (AI)",
            "Generative AI",
            "AI for Business",
            "Machine Learning Basics",
            "Google Cloud AI Solutions"
        ]
    },
    {
        category: "Firebase Services",
        icon: "Flame",
        skills: ["Firestore", "Firebase Auth", "Remote Config", "Firebase Analytics", "Firebase Crashlytics", "REST APIs"]
    },
    {
        category: "Database & Storage",
        icon: "Database",
        skills: ["SQLite", "Firestore", "Postman", "Elasticsearch"]
    },
    {
        category: "Backend & APIs",
        icon: "Server",
        skills: ["FastAPI", "REST APIs", "Dio", "Microservices", "Serverless Computing", "Dio"]
    },
    {
        category: "Tools & Dev Practices",
        icon: "Wrench",
        skills: ["VS Code", "Git & GitHub", "Jira", "Bitbucket", "Confluence", "Agile Workflow", "CI/CD", "Google Workspace", "Slack", "Figma"]
    },
    {
        category: "UI/UX & Frontend",
        icon: "Palette",
        skills: ["Responsive Design", "Animations", "Figma"]
    },
    {
        category: "Operating Systems",
        icon: "Monitor",
        skills: ["Windows", "MacOS"]
    },
    {
        category: "Security & Networking",
        icon: "Shield",
        skills: ["Cloud Security", "Virtual Machines", "VPC", "IAM"]
    },
    {
        category: "Professional Skills",
        icon: "Users",
        skills: ["Teamwork", "Communication", "Leadership", "Problem-Solving"]
    },
    {
        category: "Monetization & Analytics",
        icon: "LineChart",
        skills: ["Google Mobile Ads", "Firebase Analytics"]
    }
];

export const SkillsPageData = {
    title: "My Skills",
    description: "A comprehensive overview of my technical expertise and professional capabilities",
    stats: [
        {
            label: "Categories",
            value: Skills.length,
            icon: "Layers"
        },
        {
            label: "Total Skills",
            value: Skills.reduce((acc, cat) => acc + cat.skills.length, 0),
            icon: "Sparkles"
        },
        {
            label: "Experience",
            value: "2+",
            icon: "Award"
        },
        {
            label: "Projects",
            value: "10+",
            icon: "Rocket"
        }
    ]
};

export const AboutPage = {
    title: "About Me",
    subtitle: "Harsh Porwal – Mobile App Developer | Google Cloud Certified | AI Enthusiast",
    highlights: [
        {
            icon: "Code2",
            title: "Mobile Development",
            description: "Flutter, BLoC, GetX, Clean Architecture"
        },
        {
            icon: "Briefcase",
            title: "Full Project Ownership",
            description: "End-to-end project delivery, from concept to deployment"
        },
        {
            icon: "Rocket",
            title: "Published Apps",
            description: "Play Store & App Store releases"
        },
        {
            icon: "Users",
            title: "Impact",
            description: "1500+ students helped via CSE Learning Hub"
        }
    ],
    coreValues: [
        {
            icon: "Lightbulb",
            title: "Innovation",
            description: "Constantly exploring better solutions"
        },
        {
            icon: "Award",
            title: "Excellence",
            description: "Delivering high-quality solutions"
        },
        {
            icon: "GraduationCap",
            title: "Growth",
            description: "Continuously learning & improving"
        }
    ]
};


export const Experience = [
    {
        company: "Aviato Consulting",
        location: "Sydney, Australia [Remote]",
        duration: "May 2024 - Present",
        role: "Flutter Developer",
        icon: "Briefcase",
        description: "Working as a Flutter Developer, building scalable applications with clean architecture, BLoC, and GetX. Handling end-to-end project development, including API integration, state management, and deployment to Play Store and App Store."
    },
    {
        company: "Aviato Consulting",
        location: "Sydney, Australia [Remote]",
        duration: "March 2024 - April 2024",
        role: "Junior Flutter Developer",
        icon: "Code2",
        description: "Assisted in developing Flutter applications, focusing on UI implementation, state management, and collaborating with the senior development team on app features."
    },
    {
        company: "Spike Point Infotech Private Limited",
        location: "Gandhinagar, Gujarat, India",
        duration: "January 2024 - February 2024",
        role: "Intern Lead",
        icon: "Users",
        description: "Led and supported other interns, mentoring them to learn and grow. Contributed to application development, solving technical problems and assisting with project deliverables."
    },
    {
        company: "Spike Point Infotech Private Limited",
        location: "Gandhinagar, Gujarat, India",
        duration: "August 2023 - January 2024",
        role: "Flutter Developer Intern",
        icon: "GraduationCap",
        description: "Developed a grocery application handling both frontend and backend using a PHP API. Translated Figma designs into functional app interfaces and contributed to frontend development of the Shop-On clothing app, ensuring user-friendly UI/UX."
    }
];

export const ExperiencePage = {
    title: "Work Experience",
    description: "A comprehensive overview of my career path, illustrating how I’ve contributed to real-world projects, collaborated with teams, taken ownership of complex tasks, and grown into a developer capable of delivering end-to-end mobile solutions with confidence and clarity.",
    experiences: Experience
};
