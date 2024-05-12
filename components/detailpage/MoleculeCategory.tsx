import { MoleculeProps } from "@/types/molecule";
import CategoryBadge from "@/components/CategoryBadge";

const MoleculeCategory = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <>
            <h3 className="text-xl font-semibold">Class Type</h3>
            <div className="flex flex-wrap">
                {(molecule.class_type || []).map((type, index) => (
                    <CategoryBadge
                        key={index}
                        classType={type}
                        abbreviate={false}
                    />
                ))}
            </div>
        </>
    );
};

export default MoleculeCategory;
