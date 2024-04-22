import { completeMoleculeProps } from "@/types/molecule";
import Link from "next/link";

export const sections = {
    "molecule-name": {
        title: "Molecule Name",
        content: (molecule: completeMoleculeProps) => (
            <>
                <h2 className="text-2xl font-bold">{molecule.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Also known as ... ({molecule.cas_id})
                </p>
            </>
        ),
    },
    "cas-id": {
        title: "CAS ID",
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">CAS ID</h3>
                <p>{molecule.cas_id}</p>
            </>
        ),
    },
    "class-type": {
        title: "Class Type",
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">Class Type</h3>
                <p>
                    {molecule.class_type.map((type, index) => (
                        <span key={index}>
                            {type.name}
                            {index < molecule.class_type.length - 1 ? ", " : ""}
                        </span>
                    ))}
                </p>
            </>
        ),
    },
    smile: {
        title: "SMILE",
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">SMILE</h3>
                <p>{molecule.smiles}</p>
            </>
        ),
    },
    "smile-type": {
        title: "SMILE Type",
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">SMILE Type</h3>
                <p>{molecule.smiles_type.map((st) => st.smile).join(", ")}</p>
            </>
        ),
    },
    description: {
        title: "Description",
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="text-xl">{molecule.remark || "No remarks"}</p>
            </>
        ),
    },
    urls: {
        title: "URLs",

        content: (molecule: completeMoleculeProps) => (
            <>
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
            </>
        ),
    },
};
