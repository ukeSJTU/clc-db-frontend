"use client";

import React, { useState } from "react";
import axios from "axios";
import api from "@/utils/api";

const SDFUploader: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(Array.from(event.target.files));
        }
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) {
            alert("Please select at least one file.");
            return;
        }

        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append("files", file);
        });

        try {
            const response = await api.post("/cluster/upload/sdf/", formData);
            console.log("Files uploaded successfully:", response.data);
            // Display the names of the uploaded files
            const uploadedFileNames = selectedFiles.map((file) => file.name);
            alert(`Uploaded files: ${uploadedFileNames.join(", ")}`);
        } catch (error) {
            console.error("Error uploading files:", error);
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
            <button onClick={handleUpload}>Upload Files</button>
            {selectedFiles.length > 0 && (
                <div>
                    <h3>Selected Files:</h3>
                    <ul>
                        {selectedFiles.map((file) => (
                            <li key={file.name}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SDFUploader;
