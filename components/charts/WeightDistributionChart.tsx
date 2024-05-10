"use client";

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import api from "@/utils/api";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const WeightDistributionChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/stats/weights");
                const data = response.data;
                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: "Molecule Weight",
                            data: data.values,
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                        },
                    ],
                });
            } catch (error) {
                console.log("EWrror fetching weight distribution data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">
                Molecule Weight Distribution
            </h2>
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: {
                            display: true,
                            text: "Molecule Weight Distribution",
                        },
                    },
                }}
            />
        </div>
    );
};

export default WeightDistributionChart;
