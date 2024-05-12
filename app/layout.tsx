import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ChemNexus",
    description:
        "A collection of chemical resources for students and educators.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col h-screen justify-between">
                    <Navbar />
                    <div className="mb-auto">{children}</div>
                    {/* The pt-16 is explicitly set to move the content below the navbar */}
                    <div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
