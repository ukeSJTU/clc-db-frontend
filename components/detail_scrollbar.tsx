import {
    AtomIcon,
    UserIcon,
    Rows3Icon,
    ViewIcon,
    LinkIcon,
} from "lucide-react";

const DetailPageScrollBar = () => {
    return (
        <div>
            <nav className="space-y-4">
                <a
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#molecule-name"
                >
                    <AtomIcon className="h-5 w-5" />
                    Molecule Name
                </a>
                <a
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#cas-id"
                >
                    <UserIcon className="h-5 w-5" />
                    CAS ID
                </a>
                <a
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#class-type"
                >
                    <Rows3Icon className="h-5 w-5" />
                    Class Type
                </a>
                <a
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#smile"
                >
                    <AtomIcon className="h-5 w-5" />
                    SMILE
                </a>
                <a
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#smile-type"
                >
                    <AtomIcon className="h-5 w-5" />
                    SMILE Type
                </a>
                <a
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#description"
                >
                    <ViewIcon className="h-5 w-5" />
                    Description
                </a>
                <a
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#urls"
                >
                    <LinkIcon className="h-5 w-5" />
                    URLs
                </a>
            </nav>
        </div>
    );
};

export default DetailPageScrollBar;
