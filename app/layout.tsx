import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";

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
                    <NavbarComponent />
                    <div className="pt-16 mb-auto">{children}</div>
                    {/* The pt-16 is explicitly set to move the content below the navbar */}
                    <div>
                        <FooterComponent />
                    </div>
                </div>
            </body>
        </html>
    );
}
