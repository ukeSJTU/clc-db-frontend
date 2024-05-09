import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface PaginationComponentProps {
    page: number;
    setPage: (page: number) => void;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
    totalPages: number;
    pageSizeOptions?: number[];
}

export function PaginationComponent({
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    pageSizeOptions = [10, 20, 30, 40, 50],
}: PaginationComponentProps) {
    return (
        <div className="flex w-full flex-col-reverse items-center justify-between gap-4 overflow-auto p-1 sm:flex-row sm:gap-8">
            {/* Page Size Selection */}
            <div className="flex items-center space-x-2">
                <p className="whitespace-nowrap text-sm font-medium">
                    Rows per page
                </p>
                <Select
                    value={`${pageSize}`}
                    onValueChange={(value) => setPageSize(Number(value))}
                >
                    <SelectTrigger className="h-8 w-[4.5rem]">
                        <SelectValue placeholder={pageSize} />
                    </SelectTrigger>
                    <SelectContent side="top">
                        {pageSizeOptions.map((size) => (
                            <SelectItem key={size} value={`${size}`}>
                                {size}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center text-sm font-medium">
                Page {page} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
                {/* First Page */}
                <Button
                    aria-label="Go to first page"
                    variant="outline"
                    size="icon"
                    onClick={() => setPage(1)}
                    disabled={page <= 1}
                >
                    <ArrowLeftIcon className="size-4" aria-hidden="true" />
                </Button>
                {/* Previous Page */}
                <Button
                    aria-label="Go to previous page"
                    variant="outline"
                    size="icon"
                    onClick={() => setPage(Math.max(page - 1, 1))}
                    disabled={page <= 1}
                >
                    <ChevronLeftIcon className="size-4" aria-hidden="true" />
                </Button>
                {/* Next Page */}
                <Button
                    aria-label="Go to next page"
                    variant="outline"
                    size="icon"
                    onClick={() => setPage(Math.min(page + 1, totalPages))}
                    disabled={page >= totalPages}
                >
                    <ChevronRightIcon className="size-4" aria-hidden="true" />
                </Button>
                {/* Last Page */}
                <Button
                    aria-label="Go to last page"
                    variant="outline"
                    size="icon"
                    onClick={() => setPage(totalPages)}
                    disabled={page >= totalPages}
                >
                    <ArrowRightIcon className="size-4" aria-hidden="true" />
                </Button>
            </div>
        </div>
    );
}
