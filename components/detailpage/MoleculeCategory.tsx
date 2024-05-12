import { MoleculeProps } from "@/types/molecule";
import CategoryBadge from "@/components/CategoryBadge";

const MoleculeCategory = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <>
            <h3 className="text-xl font-semibold">Category</h3>
            <div className="flex flex-wrap">
                {(molecule.category || []).map((type, index) => (
                    <CategoryBadge
                        key={index}
                        category={type}
                        abbreviate={false}
                    />
                ))}
            </div>
        </>
    );
};

export default MoleculeCategory;
