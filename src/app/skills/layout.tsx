import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
    description: "Explore Harsh Porwal's technical skills: Flutter, Dart, BLoC, GetX, Firebase, Google Cloud Platform, REST APIs, Clean Architecture, and more. 10+ categories covering programming, state management, tools, and professional skills.",
    keywords: ["Flutter Skills", "Dart", "BLoC", "GetX", "Firebase", "Google Cloud Platform", "REST APIs", "Clean Architecture", "Mobile Development Skills"],
    openGraph: {
        title: "Skills - Harsh Porwal",
        description: "Technical expertise in Flutter, Dart, BLoC, Firebase, GCP, and clean architecture. 10+ skill categories covering programming, state management, and professional capabilities.",
    },
};

export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
