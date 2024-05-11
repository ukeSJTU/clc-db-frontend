"use client";

import api from "@/utils/api";
import type { NextPage } from "next";
import { useState, useEffect } from "react";

import {
    ChartComponent,
    ClasstypeDistChart,
    WeightDistributionChart,
} from "@/components/StatsCharts";

const fetchStatistics = async () => {
    const response = await api.get("/statistics/");
    return response.data;
};

const Home: NextPage = () => {
    const [stats, setStats] = useState({
        totalMolecules: 0,
        totalCategories: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStatistics();
            setStats({
                totalMolecules: data.total_molecules,
                totalCategories: data.total_categories,
            });
        };
        fetchData();
    }, []);

    return (
        <div>
            <main className="pt-20">
                <section className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-2">
                        Welcome to ChemNexus!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet,pretium hendrerit enim. Donec
                        in purus congue, interdum augue id, elementum felis.
                        Curabitur laoreet pretium est blandit lobortis. Ut neque
                        elit, interdum non nulla vel, iaculis luctus ex.
                        Phasellus eu velit magna. Aenean faucibus quam in mauris
                        efficitur fermentum. Morbi et placeraio ante,
                    </p>
                    {/* More descriptive text here */}
                </section>
                <section className="container mx-auto p-4 mt-8 bg-gray-100 rounded-md">
                    <h2 className="text-2xl font-semibold">Statistics</h2>
                    <p>
                        Number of molecules collected: {stats.totalMolecules}
                        <br />
                        Number of categories: {stats.totalCategories}
                    </p>
                </section>
                <section className="container mx-auto p-4 mt-8">
                    <WeightDistributionChart />
                    <ClasstypeDistChart />
                    <ChartComponent />
                </section>
            </main>
        </div>
    );
};

export default Home;
