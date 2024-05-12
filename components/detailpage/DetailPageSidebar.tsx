import {
    AtomIcon,
    UserIcon,
    Rows3Icon,
    ViewIcon,
    LinkIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

interface SectionProps {
    id: string;
    label: string;
    icon: React.ReactNode;
}

const sections: SectionProps[] = [
    {
        id: "molecule-name",
        label: "Molecule Name",
        icon: <AtomIcon className="h-5 w-5" />,
    },
    {
        id: "cas-id",
        label: "CAS ID",
        icon: <UserIcon className="h-5 w-5" />,
    },
    {
        id: "category",
        label: "Category",
        icon: <Rows3Icon className="h-5 w-5" />,
    },
    {
        id: "image",
        label: "Image",
        icon: <ViewIcon className="h-5 w-5" />,
    },
    {
        id: "structure",
        label: "3D Structure",
        icon: <ViewIcon className="h-5 w-5" />,
    },
    {
        id: "smile",
        label: "SMILE",
        icon: <AtomIcon className="h-5 w-5" />,
    },
    {
        id: "smile-type",
        label: "SMILE Type",
        icon: <AtomIcon className="h-5 w-5" />,
    },
    {
        id: "description",
        label: "Description",
        icon: <ViewIcon className="h-5 w-5" />,
    },
    {
        id: "urls",
        label: "URLs",
        icon: <LinkIcon className="h-5 w-5" />,
    },
];

const DetailPageSidebar = () => {
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = Array.from(document.querySelectorAll("section"));
            const scrollPosition = window.pageYOffset + window.innerHeight / 2; // Consider the middle of the viewport
            const navbarHeight = 64; // Adjust this value to match your navbar's height

            const activeSection = sections.findLast((section) => {
                const sectionTop = section.offsetTop - navbarHeight;
                const sectionBottom = sectionTop + section.offsetHeight;
                return (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                );
            });

            setActiveSectionId(activeSection?.id || null);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSidebarLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 64; // Adjust this value to match your navbar's height
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
    };

    return (
        <div className="w-24 lg:w-64 xl:w-72 lg:sticky lg:top-0 overflow-y-auto rounded-lg border border-gray-200 bg-white p-2 lg:p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <nav className="space-y-4">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        className={`flex items-center gap-2 text-sm font-medium ${
                            activeSectionId === section.id
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        }`}
                        href={`#${section.id}`}
                        onClick={(event) =>
                            handleSidebarLinkClick(event, section.id)
                        }
                    >
                        {section.icon}
                        {/* Hide the text label on small devices (below 'md') */}
                        <span className="hidden md:block">{section.label}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default DetailPageSidebar;
