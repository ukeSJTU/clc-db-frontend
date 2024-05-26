"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import ExampleSelector from "@/components/clusterpage/ExampleSelector";
import FileUploadComponent from "@/components/clusterpage/SDFUploader";
import DescriptorSelector from "@/components/clusterpage/DescriptorSelector";
import DescriptorParameters from "@/components/clusterpage/DescriptorParams";
import ClusteringOptions from "@/components/clusterpage/ClusteringOptions";
import ClusteringResultsChart from "@/components/clusterpage/ClusteringResultsChart";

import api from "@/utils/api";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

import { Accordion, AccordionItem } from "@/components/ui/accordion";

const FormSchema = z.object({
    selectedFiles: z.array(z.instanceof(File)),
    descriptor: z.enum(["E3FP", "RDKit"]),
    bits: z.number().min(0).default(1024),
    radius: z.number().min(0).default(1.5),
    rdkitInv: z.boolean().default(true),
    rdkitRadius: z.number().min(0).default(2),
    rdkitUseFeatures: z.boolean().default(false),
    rdkitUseBondTypes: z.boolean().default(false),
    rdkitUseChirality: z.boolean().default(false),
    reductionMethod: z.enum(["PCA", "TSNE"]),
    clusterMethod: z.enum(["K-Means", "DBSCAN"]),
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
            radius: 1.5,
            rdkitInv: true,
            rdkitRadius: 2,
            rdkitUseFeatures: false,
            rdkitUseBondTypes: false,
            rdkitUseChirality: false,
            reductionMethod: "PCA",
            clusterMethod: "K-Means",
            clusters: 2,
            knnAlgro: "lloyd",
            eps: 0.25,
            minSamples: 5,
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

    const handleExampleClick = async (exampleType: string) => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await api.post("/cluster/process/example/", {
                example_type: exampleType,
            });
            setClusteringResults(response.data);
            toast({
                title: "Example clustering completed",
                description:
                    "The example clustering has been successfully completed.",
            });
        } catch (error) {
            console.error("Error running example clustering:", error);
            setErrorMessage(
                "An error occurred while running the example clustering."
            );
            toast({
                title: "Error",
                description:
                    "An error occurred while running the example clustering.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Cluster Analysis
                </h2>
                <p className="text-gray-600">
                    Upload your .sdf files to perform cluster analysis.
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <ExampleSelector
                        onExampleClick={handleExampleClick}
                        isLoading={isLoading}
                    />
                </div>
                <Accordion type="single" collapsible>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="space-y-6"
                        >
                            <AccordionItem value="item-1">
                                <FileUploadComponent
                                    control={form.control}
                                    name="selectedFiles"
                                    onFileChange={handleFileChange}
                                />
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <DescriptorSelector
                                    control={form.control}
                                    name="descriptor"
                                />
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <DescriptorParameters
                                    control={form.control}
                                    descriptor={form.watch("descriptor")}
                                />
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <ClusteringOptions
                                    control={form.control}
                                    fileListLength={
                                        form.watch("selectedFiles").length
                                    }
                                    bits={form.watch("bits")}
                                    clusterMethod={form.watch("clusterMethod")}
                                />
                            </AccordionItem>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full"
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </Button>
                        </form>
                    </Form>
                </Accordion>

                <Separator className="my-6" />

                <div className="mt-8 text-center">
                    {isLoading && (
                        <div className="text-gray-600">
                            Sending request and waiting for response...
                        </div>
                    )}
                    {errorMessage && (
                        <div className="text-red-500">{errorMessage}</div>
                    )}
                    {clusteringResults && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">
                                Clustering Results
                            </h2>
                            <div className="flex justify-center">
                                <ClusteringResultsChart
                                    results={clusteringResults}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClusterPage;
