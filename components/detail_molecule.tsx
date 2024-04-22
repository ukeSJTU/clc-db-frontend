import { completeMoleculeProps } from "@/types/molecule";
import Link from "next/link";

import DetailPageScrollBar from "@/components/detail_scrollbar";

const MoleculeDetailSheet = (molecule: completeMoleculeProps) => {
    return (
        <div className="flex gap-8 p-8">
            <div className="flex flex-col sticky top-8  w-[300px] overflow-y-auto rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <DetailPageScrollBar />
            </div>
            <div className="space-y-8 ">
                <section id="molecule-name">
                    <h2 className="text-2xl font-bold">{molecule.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Also known as ... ({molecule.cas_id})
                    </p>
                </section>
                <section id="cas-id">
                    <h3 className="text-xl font-semibold">CAS ID</h3>
                    <p>{molecule.cas_id}</p>
                </section>
                <section id="class-type">
                    <h3 className="text-xl font-semibold">Class Type</h3>
                    <p>
                        {molecule.class_type.map((type, index) => (
                            <span key={index}>
                                {type.name}
                                {index < molecule.class_type.length - 1
                                    ? ", "
                                    : ""}
                            </span>
                        ))}
                    </p>
                </section>
                <section id="smile">
                    <h3 className="text-xl font-semibold">SMILE</h3>
                    <p>{molecule.smiles}</p>
                </section>
                <section id="smile-type">
                    <h3 className="text-xl font-semibold">SMILE Type</h3>
                    <p>
                        {molecule.smiles_type.map((st) => st.smile).join(", ")}
                    </p>
                </section>

                <section id="description">
                    <h3 className="text-xl font-semibold">Description</h3>
                    <p>{molecule.remark || "No remarks"}</p>
                </section>
                <section id="urls">
                    <h3 className="text-xl font-semibold">URLs</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href={molecule.url} target="_blank">
                                Link
                            </Link>
                        </li>
                        <li>
                            <Link href={molecule.pubchem_url} target="_blank">
                                PubChem
                            </Link>
                        </li>
                        <li>
                            <Link href="#">ChemSpider</Link>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default MoleculeDetailSheet;
