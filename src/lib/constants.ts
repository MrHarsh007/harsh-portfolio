export const PERSONAL_INFO = {
    name: 'Harsh Porwal',
    profession: 'Flutter Developer',
    overview: "I'm a Flutter Developer with experience building scalable mobile and web applications using BloC/ GetX and REST APIs.I've created projects such as CSE Learning Hub and Cloud Certify, gaining hands-on experience with the Google Cloud GUI while learning GCP and Google ADK. Recognized for strong problem-solving skills, leadership, and teamwork, I'm dedicated to developing efficient, user - focused digital solutions.",
    profileImage: '/harsh_main.png',
    profileImage2: '/harsh.png',
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
    detailedOverview: `I am a dedicated and adaptable Flutter Developer with hands - on experience in building scalable, user- focused mobile and web applications.I enjoy turning ideas into real, functional products and thrive in environments where I can solve problems, collaborate with diverse teams, and continuously learn new technologies.

My journey in software development has allowed me to work with international clients, take ownership of project modules, and deliver high - quality solutions within tight deadlines.I have experience implementing clean architecture, integrating REST APIs, managing state with BloC and GetX, and enhancing user experience through intuitive UI / UX design.I also have practical exposure to the complete app release cycle for both the Google Play Store and Apple App Store.

I am passionate about creating products that genuinely help users—this is reflected in the applications I've built, such as CSE Learning Hub, which has supported over 1500 engineering students, and Cloud Certify, a platform designed to help learners prepare for Google Cloud certifications.

Along with mobile development, I also have hands - on experience with Google Cloud's GUI, working with essential GCP tools and services.I possess foundational knowledge of Google Cloud concepts and am actively learning Google Cloud Platform(GCP) and Google - ADK to expand my skill set and strengthen my cloud expertise.

Beyond technical skills, I am recognized for my leadership, communication, and problem - solving abilities.Whether guiding interns, collaborating with cross - functional teams, or exploring new cloud technologies, I approach every challenge with curiosity, responsibility, and a strong desire to improve.

I am constantly exploring better ways to build efficient, maintainable, and impactful digital solutions—and I'm motivated to continue growing as a developer while contributing meaningfully to the projects I work on.`,
};



const Projects = [
    {
        title: "CloudCertify",
        designation: "Co-Founder & Developer",
        desc: "CloudCertify is your smart companion for Google Cloud certification prep. It offers daily practice quizzes, full-length mock tests, performance tracking, and curated resources — all in one seamless platform. Built with a modern full-stack approach, the app uses Firebase for authentication and hosting, FastAPI for backend APIs deployed on Cloud Run, and Elasticsearch for fast search and analytics. The UI, developed in Next.js, ensures a responsive and intuitive user experience. CloudCertify helps users prepare consistently and pass GCP exams with confidence.",
        link: "https://cloudcertify.tech",
        techStack: ["Flutter", "Firebase", "FastAPI", "Bloc", "GoRouter", "Dio", "GetIt", "Injectable", "Clean Architecture"],
    },
    {
        "title": "MoviesBox",
        "designation": "Client Project",
        "desc": "Developed a comprehensive Flutter application for movie and TV show enthusiasts, enabling users to discover trending movies, explore detailed information, track favorites, and enjoy quizzes and notes for a personalized experience. Integrated Firebase services for analytics, crash reporting, and remote configuration, along with Google Mobile Ads for monetization. Implemented offline support with SQLite and ensured a smooth, modern UI with responsive design and onboarding screens.",
        "link": "https://www.themoviedb.org/",
        "techStack": ["Flutter", "Bloc Pattern", "Clean Architecture", "Firebase", "SQLite", "Dio", "Go Router", "Google Mobile Ads", "Get It", "Injectable"]
    },
    {
        title: "CSE Learning Hub",
        designation: "Founder & Developer",
        desc: "Developed a mobile app that streamlined the study experience for computer engineering students, providing access to over 1,500 previous papers, study materials, books, and DE reports from multiple colleges. Demonstrated strong problem-solving and product delivery skills by identifying student needs and delivering a high-impact solution.",
        link: "https://drive.google.com/drive/folders/1xfiahDTFZfNaA2IcU6Fb1R-IHu8Fseal",
        techStack: ["Flutter", "Firebase", "FireStore", "Remote Config",],
    }
];

export const ProjectPage = {
    projects: Projects,
    description: "Developed multiple Flutter applications leveraging Firebase, Google Cloud Platform, and clean architecture. Built scalable, user-friendly apps for movie discovery, exam preparation, and student learning, integrating features like offline support, analytics, and monetization."
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
        skills: ["Bloc Pattern", "GetX", "Dependency Injection", "GetIt", "Injectable"]
    },
    {
        category: "Google Services",
        icon: "Flame",
        skills: ["Firestore", "Firebase Auth", "Remote Config", "Firebase Analytics", "Firebase Crashlytics", "REST APIs", "Dio", "Google ADK"]
    },
    {
        category: "Database & Storage",
        icon: "Database",
        skills: ["SQLite", "Firestore", "Postman"]
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
        category: "Cloud Platforms",
        icon: "Cloud",
        skills: ["Google Cloud Platform (GCP)"]
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
    subtitle: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.profession}`,
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
        location: "Sydney, Australia",
        duration: "May 2024 - Present",
        role: "Flutter Developer",
        icon: "Briefcase",
        description: "Working as a Flutter Developer, building scalable applications with clean architecture, BLoC, and GetX. Handling end-to-end project development, including API integration, state management, and deployment to Play Store and App Store."
    },
    {
        company: "Aviato Consulting",
        location: "Sydney, Australia",
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
