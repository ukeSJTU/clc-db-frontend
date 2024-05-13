"use client";

import React, { useState } from "react";
import api from "../utils/api";

const SDFUploader: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [descriptor, setDescriptor] = useState<string>("E3FP");
    const [bits, setBits] = useState<number>(1024);
    const [radius, setRadius] = useState<number>(1.5);
    const [rdkitInv, setRdkitInv] = useState<boolean>(true);
    const [reductionMethod, setReductionMethod] = useState<string>("PCA");
    const [clusterMethod, setClusterMethod] = useState<string>("KNN");
    const [clusters, setClusters] = useState<number>(5);
    const [knnAlgro, setKnnAlgro] = useState<string>("lloyd");
    const [eps, setEps] = useState<number>(0.25);
    const [minSamples, setMinSamples] = useState<number>(5);
    const [clusteringResults, setClusteringResults] = useState<any>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(Array.from(event.target.files));
        }
    };

    const handleSubmit = async () => {
        if (selectedFiles.length === 0) {
            alert("Please select at least one file.");
            return;
        }

        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append("files", file);
        });

        try {
            // Upload SDF files to the server
            const uploadResponse = await api.post(
                "/cluster/upload/sdf/",
                formData
            );
            console.log("Files uploaded successfully:", uploadResponse.data);

            // Get the saved folder path from the upload response
            const savedFolder = uploadResponse.data.saved_folder;

            // Append the selected options and saved folder path to the request data
            const requestData = {
                saved_folder: savedFolder,
                descriptor,
                bits: bits.toString(),
                radius: radius.toString(),
                rdkitInv: rdkitInv.toString(),
                reductionMethod,
                clusterMethod,
                clusters: clusters.toString(),
                knnAlgro,
                eps: eps.toString(),
                minSamples: minSamples.toString(),
            };

            // Process the uploaded files and perform clustering
            const clusteringResponse = await api.post(
                "/cluster/process/",
                requestData
            );
            setClusteringResults(clusteringResponse.data);
            console.log("Clustering completed:", clusteringResponse.data);
        } catch (error) {
            console.error("Error clustering files:", error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <div>
            <input
                type="file"
                accept=".sdf"
                multiple
                onChange={handleFileChange}
            />

            {/* Add radio buttons and checkboxes for the options */}
            {/* ... */}

            <button onClick={handleSubmit}>Submit</button>

            {clusteringResults && (
                <div>
                    <h2>Clustering Results</h2>
                    <p>
                        Coordinates:{" "}
                        {JSON.stringify(clusteringResults.coordinates)}
                    </p>
                    <p>
                        Class Numbers:{" "}
                        {JSON.stringify(clusteringResults.class_numbers)}
                    </p>
                    <p>IDs: {JSON.stringify(clusteringResults.ids)}</p>
                </div>
            )}
        </div>
    );
};

export default SDFUploader;
