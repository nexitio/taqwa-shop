import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
    title: "Taqwa Shop - Organic food for everyone.",
    description: "Organic food for everyone."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 bg-foreground/5 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
