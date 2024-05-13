// This file provides a series of interactive charts that display the statistical info of the database
// The charts are created using the Chart.js library
"use client";

import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import api from "@/utils/api";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const ClasstypeDistChart = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/stats/category");
                const data = response.data;

                console.log(data);

                const labels = data.map((item) => item.category__name);
                const counts = data.map((item) => item.count);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: "Number of Molecules",
                            data: counts,
                            backgroundColor: "rgba(75,192,192,0.6)",
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Molecule Distribution by Category</h2>
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: {
                            display: true,
                            text: "Category Distribution",
                        },
                    },
                }}
            />
        </div>
    );
};

const ChartComponent = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/stats/chirality");
                const data = response.data;

                console.log(data);

                const labels = data.map((item) => item.chirality__name);
                const counts = data.map((item) => item.count);

                setChartData({
                    labels,
                    datasets: [
                        {
                            data: counts,
                            backgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56",
                                "#8BC34A",
                                "#E91E63",
                            ],
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Molecule Distribution</h2>
            <Pie
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: {
                            display: true,
                            text: "Smile Type Distribution",
                        },
                    },
                }}
            />
        </div>
    );
};

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

export { ChartComponent, ClasstypeDistChart, WeightDistributionChart };
