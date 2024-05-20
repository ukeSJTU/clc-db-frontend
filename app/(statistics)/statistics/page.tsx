import ClusterDemoChart from "@/components/clusterpage/ClusterResultExample";
import {
    ChiralityDistChart,
    CategoryDistChart,
    WeightDistributionChart,
} from "@/components/StatsCharts";

const StatisticsPage = () => {
    return (
        <div className="mx-auto p-4 mt-8 space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">Charts</h2>
            <div className="w-full lg:w-2/3 mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                    Molecule Distribution by Weight
                </h3>
                <div className="bg-white shadow-lg rounded-lg p-6 aspect-w-16 aspect-h-9">
                    <WeightDistributionChart />
                </div>
            </div>
            <div className="w-full lg:w-2/3 mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                    Molecule Distribution by Category
                </h3>
                <div className="bg-white shadow-lg rounded-lg p-6 aspect-w-16 aspect-h-9">
                    <CategoryDistChart />
                </div>
            </div>
            <div className="w-full lg:w-1/2 mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                    Molecule Distribution by Chirality
                </h3>
                <div className="bg-white shadow-lg rounded-lg p-6 aspect-w-1 aspect-h-1">
                    <ChiralityDistChart />
                </div>
            </div>
            <div className="w-full lg:w-2/3 mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                    Example Result for Cluster
                </h3>
                <div className="bg-white shadow-lg rounded-lg p-6 aspect-w-16 aspect-h-9">
                    <ClusterDemoChart />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
