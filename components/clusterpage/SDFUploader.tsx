import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";
import UploadedFile from "./UploadedFile";

interface FileUploadComponentProps {
    control: Control<any>;
    name: string;
    onFileChange: (files: File[]) => void;
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
    control,
    name,
    onFileChange,
}) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
            onFileChange(files);
        }
    };

    const handleFileDelete = (index: number) => {
        const updatedFiles = [...uploadedFiles];
        updatedFiles.splice(index, 1);
        setUploadedFiles(updatedFiles);
        onFileChange(updatedFiles);
    };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Select Files</FormLabel>
                    <FormControl>
                        <Input
                            type="file"
                            accept=".sdf"
                            multiple
                            onChange={handleFileChange}
                            className="w-full"
                        />
                    </FormControl>
                    <FormMessage />
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {uploadedFiles.map((file, index) => (
                            <UploadedFile
                                key={file.name}
                                file={file}
                                onDelete={() => handleFileDelete(index)}
                            />
                        ))}
                    </div>
                </FormItem>
            )}
        />
    );
};

export default FileUploadComponent;
