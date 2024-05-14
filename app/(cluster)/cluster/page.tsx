"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FileUploadComponent from "@/components/clusterpage/SDFUploader";
import DescriptorSelector from "@/components/clusterpage/DescriptorSelector";
import DescriptorParameters from "@/components/clusterpage/DescriptorParams";
import ClusteringOptions from "@/components/clusterpage/ClusteringOptions";
import ClusteringResultsChart from "@/components/clusterpage/ClusteringResultsChart";

import api from "@/utils/api";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
    selectedFiles: z.array(z.instanceof(File)),
    descriptor: z.enum(["E3FP", "RDKit"]),
    bits: z.number().min(0).default(1024),
    radius: z.number().min(0).default(1.5),
    rdkitInv: z.boolean().default(true),
    reductionMethod: z.enum(["PCA", "TSNE"]),
    clusterMethod: z.enum(["KNN", "DBSCAN"]),
    clusters: z.number().min(1).default(5),
    knnAlgro: z.enum(["lloyd", "elkan"]), // "auto", "full" are deprecated in sklearn.KMeans after version1.1
    eps: z.number().min(0).default(0.25),
    minSamples: z.number().min(1).default(5),
});

const ClusterPage: React.FC = () => {
    const [clusteringResults, setClusteringResults] = React.useState<any>(null);
    const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const { toast } = useToast();

    const handleFileChange = (files: File[]) => {
        setUploadedFiles(files);
        form.setValue("selectedFiles", files);
    };

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            selectedFiles: [],
            descriptor: "E3FP",
            bits: 1024,
            reductionMethod: "PCA",
            clusterMethod: "KNN",
            clusters: 2,
            knnAlgro: "lloyd",
        },
    });

    const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
        if (data.selectedFiles.length === 0) {
            // alert("Please select at least one file.");
            toast({
                title: "No files selected",
                description: "Please select at least one file.",
            });
            return;
        }

        setIsLoading(true);
        setErrorMessage("");

        const formData = new FormData();
        data.selectedFiles.forEach((file) => {
            formData.append("files", file);
        });

        try {
            const uploadResponse = await api.post(
                "/cluster/upload/sdf/",
                formData
            );
            console.log("Files uploaded successfully:", uploadResponse.data);

            const savedFolder = uploadResponse.data.saved_folder;
            const requestData = {
                saved_folder: savedFolder,
                descriptor: data.descriptor,
                bits: data.bits.toString(),
                radius: data.radius.toString(),
                rdkitInv: data.rdkitInv.toString(),
                reductionMethod: data.reductionMethod,
                clusterMethod: data.clusterMethod,
                clusters: data.clusters.toString(),
                knnAlgro: data.knnAlgro,
                eps: data.eps.toString(),
                minSamples: data.minSamples.toString(),
            };

            // Log the request data
            console.log("Request Data:", requestData);

            const clusteringResponse = await api.post(
                "/cluster/process/",
                requestData
            );
            setClusteringResults(clusteringResponse.data);
            toast({
                title: "Clustering completed",
                description:
                    "The clustering process has been successfully completed.",
            });
            console.log("Clustering completed:", clusteringResponse.data);
        } catch (error) {
            console.error("Error clustering files:", error);
            setErrorMessage("An error occurred while clustering the files.");

            toast({
                title: "Error",
                description: "An error occurred while clustering the files.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto items-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6"
                >
                    <FileUploadComponent
                        control={form.control}
                        name="selectedFiles"
                        onFileChange={handleFileChange}
                    />
                    <Separator className="h-1" />
                    <DescriptorSelector
                        control={form.control}
                        name="descriptor"
                    />
                    <Separator className="h-1" />
                    <DescriptorParameters
                        control={form.control}
                        descriptor={form.watch("descriptor")}
                    />
                    <Separator className="h-1" />
                    <ClusteringOptions
                        control={form.control}
                        fileListLength={form.watch("selectedFiles").length}
                        bits={form.watch("bits")}
                        clusterMethod={form.watch("clusterMethod")}
                    />

                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                </form>

                <Separator className="h-1" />

                {isLoading && (
                    <p>Sending request and waiting for response...</p>
                )}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {clusteringResults && (
                    <div>
                        <h2>Clustering Results</h2>
                        <ClusteringResultsChart results={clusteringResults} />
                    </div>
                )}

                {/* <p>
                            Coordinates:{" "}
                            {JSON.stringify(clusteringResults.coordinates)}
                        </p>
                        <p>
                            Class Numbers:{" "}
                            {JSON.stringify(clusteringResults.class_numbers)}
                        </p>
                        <p>IDs: {JSON.stringify(clusteringResults.ids)}</p> */}
            </Form>
        </div>
    );
};

export default ClusterPage;
