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
                <div className="flex flex-col min-h-screen justify-between">
                    <div className="h-18">
                        <Navbar />
                    </div>
                    <div className="top-18">
                        <main className="mb-auto">{children}</main>
                    </div>

                    <Footer />
                </div>
            </body>
        </html>
    );
}
