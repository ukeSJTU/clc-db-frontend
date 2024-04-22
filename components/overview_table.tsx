import React from "react";
import { useRouter } from "next/navigation";

type MoleculeTableProps = {
    molecules: {
        name: string;
        cas_id: string;
        class_type: { name: string }[];
    }[];
};

const MoleculeTable = ({ molecules }: MoleculeTableProps) => {
    const router = useRouter();

    const handleClick = (cas_id: string) => {
        router.push(`/detail/${cas_id}`);
    };

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        CAS ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class Type
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
                {molecules.map((molecule, index) => (
                    <tr
                        key={index}
                        onClick={() => handleClick(molecule.cas_id)}
                        className="hover:bg-gray-300/10"
                    >
                        <td className="px-6 py-4 whitespace-nowrap">
                            {molecule.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {molecule.cas_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {molecule.class_type[0].name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MoleculeTable;
