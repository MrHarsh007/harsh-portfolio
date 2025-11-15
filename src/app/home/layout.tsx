import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Harsh Porwal - Flutter Developer with experience in building scalable mobile and web applications using BLoC, GetX, and REST APIs. Contact me or download my CV.",
    keywords: ["Harsh Porwal", "Flutter Developer", "Mobile Developer", "Contact", "CV"],
    openGraph: {
        title: "Harsh Porwal - Flutter Developer",
        description: "Flutter Developer with experience in building scalable mobile and web applications using BLoC, GetX, and REST APIs.",
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
