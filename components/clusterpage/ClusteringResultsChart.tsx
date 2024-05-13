import React, { useEffect, useRef } from "react";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

interface ClusteringResultsChartProps {
    results: {
        coordinates: number[][];
        classNumbers: number[];
        ids: string[];
    };
}

const ClusteringResultsChart: React.FC<ClusteringResultsChartProps> = ({
    results,
}) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");
            if (ctx) {
                Chart.register(...registerables);

                const data: ChartData = {
                    datasets: results.classNumbers.map((classNumber) => ({
                        label: `Class ${classNumber}`,
                        data: results.coordinates[classNumber].map(
                            (coords, index) => ({
                                x: coords[0],
                                y: coords[1],
                                label: results.ids[index],
                            })
                        ),
                        backgroundColor: `rgba(${Math.floor(
                            Math.random() * 256
                        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                            Math.random() * 256
                        )}, 0.7)`,
                        pointRadius: 5,
                        pointHoverRadius: 8,
                    })),
                };

                const options: ChartOptions = {
                    responsive: true,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (context) => context.raw.label,
                            },
                        },
                    },
                    scales: {
                        x: {
                            type: "linear",
                            grid: {
                                display: true,
                            },
                        },
                        y: {
                            type: "linear",
                            grid: {
                                display: true,
                            },
                        },
                    },
                };

                new Chart(ctx, {
                    type: "scatter",
                    data,
                    options,
                });
            }
        }
    }, [results]);

    return <canvas ref={chartRef} />;
};

export default ClusteringResultsChart;
