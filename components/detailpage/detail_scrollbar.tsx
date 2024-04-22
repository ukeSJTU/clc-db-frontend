import { sections } from "./sections";

const DetailPageScrollBar = () => {
    return (
        <div className="sticky top-8 h-[calc(100vh-2rem)] overflow-y-auto rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <nav className="space-y-4">
                {Object.entries(sections).map(([sectionId, section]) => (
                    <a
                        key={section.sidenav.id}
                        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={`#${section.sidenav.id}`}
                    >
                        {section.sidenav.icon}
                        {section.sidenav.label}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default DetailPageScrollBar;
