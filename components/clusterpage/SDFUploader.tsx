import React from "react";
import { Input } from "@/components/ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";

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
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            onFileChange(files);
        }
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
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FileUploadComponent;
