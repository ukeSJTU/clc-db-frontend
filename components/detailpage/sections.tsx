import { completeMoleculeProps } from "@/types/molecule";
import Link from "next/link";

import {
    AtomIcon,
    UserIcon,
    Rows3Icon,
    ViewIcon,
    LinkIcon,
} from "lucide-react";
import { Skeleton } from "../ui/skeleton";

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
                <h2 className="text-2xl font-bold">{molecule.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Also known as ... ({molecule.cas_id})
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
                <p>{molecule.cas_id}</p>
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
    image: {
        title: "Image",
        sidenav: {
            id: "image",
            label: "Image",
            icon: <ViewIcon className="h-5 w-5" />,
        },

        content: (molecule: completeMoleculeProps) => (
            <>
                <h3 className="text-xl font-semibold">Image</h3>
                <Skeleton className="h-[200px] rounded-lg" />
            </>
        ),
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
                <p>{molecule.smiles}</p>
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
                <p>{molecule.smiles_type.map((st) => st.smile).join(", ")}</p>
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
                <p className="text-xl">{molecule.remark || "No remarks"}</p>
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
