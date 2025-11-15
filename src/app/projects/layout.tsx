import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore Harsh Porwal's Flutter projects including CloudCertify (Google Cloud certification platform), MoviesBox (movie discovery app), and CSE Learning Hub (student learning platform). Built with Firebase, FastAPI, and clean architecture.",
    keywords: ["Flutter Projects", "CloudCertify", "MoviesBox", "CSE Learning Hub", "Mobile Apps", "Firebase", "FastAPI", "Clean Architecture"],
    openGraph: {
        title: "Projects - Harsh Porwal",
        description: "Explore my Flutter projects including CloudCertify, MoviesBox, and CSE Learning Hub. Built with Firebase, FastAPI, and clean architecture.",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
