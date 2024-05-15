import {
    ChiralityDistChart,
    CategoryDistChart,
    WeightDistributionChart,
} from "@/components/StatsCharts";

const StatisticsPage = () => {
    return (
        <div className="mx-auto p-4 mt-8 space-y-6">
            <h2 className="text-2xl font-semibold">Charts</h2>
            <h3 className="text-xl font-semibold">
                Molecule Distribution by Weight
            </h3>
            <WeightDistributionChart />
            <h3 className="text-xl font-semibold">
                Molecule Distribution by Category
            </h3>
            <CategoryDistChart />
            <h3 className="text-xl font-semibold">
                Molecule Distribution by Chirality
            </h3>
            <ChiralityDistChart />
        </div>
    );
};

export default StatisticsPage;
