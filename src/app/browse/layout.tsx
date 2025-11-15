import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Browse",
    description: "Navigate through Harsh Porwal's portfolio sections: Home, About, Projects, Skills, and Experience. Choose your destination to explore more.",
    keywords: ["Portfolio Navigation", "Browse Portfolio", "Harsh Porwal Sections"],
    openGraph: {
        title: "Browse Portfolio - Harsh Porwal",
        description: "Navigate through portfolio sections: Home, About, Projects, Skills, and Experience.",
    },
};

export default function BrowseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
