import {
    AtomIcon,
    UserIcon,
    Rows3Icon,
    ViewIcon,
    LinkIcon,
} from "lucide-react";

const DetailPageScrollBar = () => {
    const sections = [
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
            id: "class-type",
            label: "Class Type",
            icon: <Rows3Icon className="h-5 w-5" />,
        },
        { id: "smile", label: "SMILE", icon: <AtomIcon className="h-5 w-5" /> },
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
        { id: "urls", label: "URLs", icon: <LinkIcon className="h-5 w-5" /> },
    ];

    return (
        <div className="sticky top-8 h-[calc(100vh-2rem)] overflow-y-auto rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <nav className="space-y-4">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={`#${section.id}`}
                    >
                        {section.icon}
                        {section.label}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default DetailPageScrollBar;
