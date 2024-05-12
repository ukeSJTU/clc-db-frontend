import CategoryBadge from "@/components/CategoryBadge";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ClassTypeLayoutProps {
    children: React.ReactNode;
    params: { category: string };
}

export default function ClassTypeLayout({
    children,
    params,
}: ClassTypeLayoutProps) {
    const decodedClassType = decodeURIComponent(params.category);

    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Shared header between all pages in this directory */}
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row justify-start items-center">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 px-3">
                        Searching for Molecules of:
                    </h2>
                    <CategoryBadge
                        category={{ name: decodedClassType }}
                        abbreviate={false}
                    />
                </div>
            </div>
            {/* This will render any child pages in this directory */}
            <div>{children}</div>
        </div>
    );
}
