import { completeMoleculeProps } from "@/types/molecule";

import DetailPageScrollBar from "@/components/detailpage/detail_scrollbar";
import { sections } from "./sections";

const MoleculeDetailSheet = (molecule: completeMoleculeProps) => {
    return (
        <div className="grid grid-cols-[300px_1fr] gap-8 p-8">
            <DetailPageScrollBar />
            <div className="sticky top-8 h-[calc(100vh-2rem)] overflow-y-auto rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="space-y-8 ">
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
