import { MoleculeProps } from "@/types/molecule";

const MoleculeDescription = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <>
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="text-xl">
                {molecule.remark || "No remarks available"}
            </p>
        </>
    );
};

export default MoleculeDescription;
