import { MoleculeProps } from "@/types/molecule";
import Link from "next/link";

const MoleculeURLs = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
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
    );
};

export default MoleculeURLs;
