import React from "react";
import { useRouter } from "next/navigation";

type MoleculeTableProps = {
    molecules: {
        name: string;
        cas_id: string;
    }[];
};

const DownloadTableComponent = ({ molecules }: MoleculeTableProps) => {
    const router = useRouter();

    const handleClick = (cas_id: string) => {
        router.push(`/detail/${cas_id}`);
    };

    const handleDownload = async (
        cas_id: string,
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation(); // Prevent the row click event (goto detail) from firing

        const apiUrl = `http://www.ukehome.top/api/download/molecules/?search=${cas_id}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();

            // Convert the data to a string and create a Blob object
            const jsonString = JSON.stringify(data);
            const blob = new Blob([jsonString], { type: "application/json" });

            // Create a URL for the blob
            const url = URL.createObjectURL(blob);

            // Create a temporary anchor element and trigger download
            const a = document.createElement("a");
            a.href = url;
            a.download = `molecule-${cas_id}.json`; // Name of the downloaded file
            document.body.appendChild(a); // Append the anchor to body to make it "clickable"
            a.click();

            // Clean up by revoking the object URL and removing the anchor element
            URL.revokeObjectURL(url);
            document.body.removeChild(a);

            console.log(`Downloading molecule with CAS ID: ${cas_id}`);
        } catch (error) {
            console.error("Failed to download the molecule data:", error);
        }
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
                        Download
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
                        <td className="px-6 py-4 whitespace-nowrap truncate">
                            {molecule.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {molecule.cas_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button
                                onClick={(event) =>
                                    handleDownload(molecule.cas_id, event)
                                }
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Download
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DownloadTableComponent;
