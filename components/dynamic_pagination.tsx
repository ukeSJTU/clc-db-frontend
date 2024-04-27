"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
    page: number;
    setPage: (page: number) => void;
    pageSize: number;
    setPageSize: (size: number) => void;
    totalPages: number;
    baseUrl: string;
}

const PaginationComponent: React.FC<PaginationProps> = ({
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    baseUrl,
}) => {
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
            router.push(`${baseUrl}/${newPage}?pageSize=${pageSize}`);
        }
    };

    const handlePageSizeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newSize = parseInt(event.target.value, 10);
        if (!isNaN(newSize) && newSize > 0) {
            setPageSize(newSize);
            setPage(1); // Optional: Reset to page 1 on page size change
            router.push(`${baseUrl}/1?pageSize=${newSize}`);
        }
    };

    const visiblePages = 5; // You can adjust this value or make it dynamic based on screen size
    let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
        startPage = Math.max(1, endPage - visiblePages + 1);
    }

    return (
        <div className="flex justify-center items-center space-x-4">
            <input
                type="number"
                value={pageSize}
                onChange={handlePageSizeChange}
                className="ml-4 border rounded px-2 py-1"
                placeholder="Items per page"
            />

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={() => handlePageChange(page - 1)}
                            isActive={page !== 1}
                        />
                    </PaginationItem>
                    {startPage > 1 && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                    <div className="hidden sm:flex">
                        {Array.from(
                            { length: endPage - startPage + 1 },
                            (_, i) => startPage + i
                        ).map((number) => (
                            <PaginationItem key={number}>
                                <PaginationLink
                                    href="#"
                                    isActive={number === page}
                                    onClick={() => handlePageChange(number)}
                                >
                                    {number}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                    </div>
                    {endPage < totalPages && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={() => handlePageChange(page + 1)}
                            isActive={page !== totalPages}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PaginationComponent;
