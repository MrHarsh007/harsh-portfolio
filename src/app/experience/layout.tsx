import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Harsh Porwal's professional experience as a Flutter Developer at Aviato Consulting (Sydney, Australia) and Spike Point Infotech (India). Learn about my journey from intern to full-time developer, handling international clients and leading teams.",
    keywords: ["Flutter Developer Experience", "Aviato Consulting", "Spike Point Infotech", "Mobile Development Career", "Professional Experience"],
    openGraph: {
        title: "Work Experience - Harsh Porwal",
        description: "Professional experience as a Flutter Developer at Aviato Consulting and Spike Point Infotech. Journey from intern to full-time developer handling international clients.",
    },
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
