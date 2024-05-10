"use client";

import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import api from "@/utils/api";

ChartJS.register(ArcElement);

const ChartComponent = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/stats/smiles");
                const data = response.data;

                console.log(data);

                const labels = data.map((item) => item.smiles_type__smile);
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

export default ChartComponent;
