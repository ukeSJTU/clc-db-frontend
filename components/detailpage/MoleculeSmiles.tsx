import { MoleculeProps } from "@/types/molecule";

const MoleculeSmiles = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <>
            <h3 className="text-xl font-semibold">SMILE</h3>
            <p>{molecule.smiles || "N/A"}</p>
        </>
    );
};

export default MoleculeSmiles;
