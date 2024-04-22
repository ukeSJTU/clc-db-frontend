"use client";

import { completeMoleculeProps } from "@/types/molecule";
import React, { useEffect, useState } from "react";
import axios from "axios";

type ClassTypeGroup = {
    class_type: string;
    molecules: completeMoleculeProps[];
};

const DownloadTableComponent = () => {
    const [data, setData] = useState<ClassTypeGroup[]>([]);

    useEffect(() => {
        // Fetch all data on component mount
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://www.ukehome.top/api/download/classes/all"
                );
                setData(response.data);
            } catch (error) {
                console.error("There was an error fetching the data:", error);
            }
        };

        fetchData();
    }, []);

    const handleDownload = async (
        molecules: completeMoleculeProps[],
        class_type: string
    ): Promise<void> => {
        // Prepare the molecule data for download
        const jsonString = JSON.stringify({ class_type, molecules }, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        // Create and trigger a download action
        const a = document.createElement("a");
        a.href = url;
        a.download = `${class_type}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clean up the URL
        URL.revokeObjectURL(url);
    };

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class Type
                    </th>
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
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((group) =>
                    group.molecules.map((molecule, index) => (
                        <tr key={index} className="hover:bg-gray-300/10">
                            <td className="px-6 py-4 whitespace-nowrap truncate">
                                {index === 0 ? group.class_type : ""}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap truncate">
                                {molecule.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {molecule.cas_id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    onClick={() =>
                                        handleDownload(
                                            group.molecules,
                                            group.class_type
                                        )
                                    }
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default DownloadTableComponent;
