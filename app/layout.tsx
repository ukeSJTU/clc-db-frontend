import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "CLC-DB",
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
            <body>
                <div className="flex flex-col min-h-screen justify-between">
                    <div className="h-18">
                        <Navbar />
                    </div>
                    <div className="top-18">
                        <main className="mb-auto">{children}</main>
                    </div>

                    <Footer />
                </div>
                <Toaster />
            </body>
        </html>
    );
}
