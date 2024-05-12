import { MoleculeProps } from "@/types/molecule";
import DetailPageScrollBar from "@/components/detailpage/detail_scrollbar";
import { SelectDownloadButton } from "@/components/DownloadButtons";
import { sections } from "./sections";

const MoleculeDetailSheet = (molecule: MoleculeProps) => {
    const sdfFiles = [`/all_sdfs/${molecule.cas_id}.sdf`];

    return (
        <div className="grid grid-cols-[min-content_1fr] gap-4 lg:gap-8 p-4 lg:p-8">
            {/* Scroll bar */}
            <div className="w-24 lg:w-64 xl:w-72 lg:sticky lg:top-8 overflow-y-auto rounded-lg border border-gray-200 bg-white p-2 lg:p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <DetailPageScrollBar />
            </div>
            {/* Main content */}
            <div className="overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 lg:p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                {/* Download Button positioned above the main content */}
                <div className="mb-4 flex justify-end">
                    <SelectDownloadButton
                        molecules={[molecule]}
                        sdfFiles={sdfFiles}
                    />
                </div>
                {/* Sections displaying molecule details */}
                <div className="space-y-8">
                    {Object.entries(sections).map(([sectionId, section]) => (
                        <section key={sectionId} id={sectionId}>
                            {section.content(molecule)}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoleculeDetailSheet;
