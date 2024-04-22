import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar";

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
                <NavbarComponent />
                <div className="pt-16">{children}</div>{" "}
                {/* The pt-16 is explicitly set to move the content below the navbar */}
            </body>
        </html>
    );
}
