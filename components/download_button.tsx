"use client";

import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import downloadFiles from "@/lib/download";
import { MoleculeProps } from "@/types/molecule";
import { DownloadIcon } from "lucide-react";

interface DownloadButtonProps {
    molecules: MoleculeProps[];
    sdfFiles: string[]; // Array of URLs or paths to .sdf files
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
    molecules,
    sdfFiles,
}) => {
    const [downloadOption, setDownloadOption] = useState("zip");

    const handleDownload = () => {
        downloadFiles(downloadOption, molecules, sdfFiles);
    };

    return (
        <div className="flex flex-row gap-2 items-center">
            <Select
                onValueChange={(value) => setDownloadOption(value)}
                defaultValue="zip"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Download Both (ZIP)" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="sdf">SDF</SelectItem>
                    <SelectItem value="zip">Both (ZIP)</SelectItem>
                </SelectContent>
            </Select>
            {/* Add a button to manually trigger the download */}
            <Button onClick={handleDownload} title="Download">
                <DownloadIcon />
            </Button>
        </div>
    );
};

export default DownloadButton;
