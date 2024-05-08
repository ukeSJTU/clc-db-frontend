import { completeMoleculeProps } from "@/types/molecule";
import Link from "next/link";

import ClassTypeBadge from "@/components/class_type_badge";

import {
    AtomIcon,
    UserIcon,
    Rows3Icon,
    ViewIcon,
    LinkIcon,
} from "lucide-react";

export const sections = {
    "molecule-name": {
        title: "Molecule Name",
        sidenav: {
            id: "molecule-name",
            label: "Molecule Name",
            icon: <AtomIcon className="h-5 w-5" />,
        },
        content: (molecule: completeMoleculeProps) => (
            <>
                <h2 className="text-2xl font-bold">{molecule.name || "N/A"}</h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Also known as ... ({molecule.cas_id || "N/A"})
                </p>
            </>
        ),
    },
    "cas-id": {
        title: "CAS ID",
        sidenav: {
            id: "cas-id",
            label: "CAS ID",
            icon: <UserIcon className="h-5 w-5" />,
        },
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">CAS ID</h3>
                <p>{molecule.cas_id || "N/A"}</p>
            </>
        ),
    },
    "class-type": {
        title: "Class Type",
        sidenav: {
            id: "class-type",
            label: "Class Type",
            icon: <Rows3Icon className="h-5 w-5" />,
        },
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">Class Type</h3>
                <div className="flex flex-wrap">
                    {(molecule.class_type || []).map((type, index) => (
                        <ClassTypeBadge key={index} classType={type} />
                    ))}
                </div>
            </>
        ),
    },
    image: {
        title: "Image",
        sidenav: {
            id: "image",
            label: "Image",
            icon: <ViewIcon className="h-5 w-5" />,
        },
        content: (molecule: completeMoleculeProps) => {
            const moleculeId = molecule.pubchem_url?.split("/")?.pop() ?? null;
            console.log("Molecule ID:", moleculeId);

            return (
                <>
                    <h3 className="text-xl font-semibold">Image</h3>
                    {moleculeId ? (
                        <img
                            src={`https://pubchem.ncbi.nlm.nih.gov/image/imagefly.cgi?cid=${moleculeId}&width=500&height=500`}
                            alt="Molecule Image"
                            className="h-[200px] rounded-lg"
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </>
            );
        },
    },
    smile: {
        title: "SMILE",
        sidenav: {
            id: "smile",
            label: "SMILE",
            icon: <AtomIcon className="h-5 w-5" />,
        },
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">SMILE</h3>
                <p>{molecule.smiles || "N/A"}</p>
            </>
        ),
    },
    "smile-type": {
        title: "SMILE Type",
        sidenav: {
            id: "smile-type",
            label: "SMILE Type",
            icon: <AtomIcon className="h-5 w-5" />,
        },
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">SMILE Type</h3>
                <p>
                    {(molecule.smiles_type || [])
                        .map((st) => st.smile)
                        .join(", ") || "N/A"}
                </p>
            </>
        ),
    },
    description: {
        title: "Description",
        sidenav: {
            id: "description",
            label: "Description",
            icon: <ViewIcon className="h-5 w-5" />,
        },
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="text-xl">
                    {molecule.remark || "No remarks available"}
                </p>
            </>
        ),
    },
    urls: {
        title: "URLs",
        sidenav: {
            id: "urls",
            label: "URLs",
            icon: <LinkIcon className="h-5 w-5" />,
        },
        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">URLs</h3>
                <ul className="space-y-2">
                    {molecule.url ? (
                        <li>
                            <Link href={molecule.url} target="_blank">
                                Link
                            </Link>
                        </li>
                    ) : null}
                    {molecule.pubchem_url ? (
                        <li>
                            <Link href={molecule.pubchem_url} target="_blank">
                                PubChem
                            </Link>
                        </li>
                    ) : null}
                    <li>
                        <Link href="#">ChemSpider</Link>
                    </li>
                </ul>
            </>
        ),
    },
};
