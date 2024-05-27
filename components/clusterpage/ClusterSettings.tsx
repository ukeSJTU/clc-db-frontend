import React from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

interface ClusteringExampleSettingsProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ClusteringExampleSettings: React.FC<ClusteringExampleSettingsProps> = ({
    open,
    onOpenChange,
}) => {
    const { getValues } = useFormContext();

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Clustering Example Settings</SheetTitle>
                    <SheetDescription>
                        These are the parameter settings used in the clustering
                        example.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    {/* Add parameter settings here */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="descriptor" className="text-right">
                            Descriptor
                        </Label>
                        <Input
                            id="descriptor"
                            value={getValues("descriptor")}
                            className="col-span-3"
                            readOnly
                        />
                    </div>
                    {/* Add more parameter settings */}
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button
                            type="button"
                            onClick={() => onOpenChange(false)}
                        >
                            Close
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default ClusteringExampleSettings;
