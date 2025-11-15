import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn about Harsh Porwal's journey as a Flutter Developer. Discover my passion for creating user-focused mobile applications, experience with international clients, and expertise in clean architecture and cloud technologies.",
    keywords: ["About Harsh Porwal", "Flutter Developer Journey", "Mobile Development Experience", "Clean Architecture", "Google Cloud"],
    openGraph: {
        title: "About Harsh Porwal - Flutter Developer",
        description: "Learn about my journey as a Flutter Developer, experience with international clients, and expertise in clean architecture and cloud technologies.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
