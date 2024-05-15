import ClusterDemoChart from "@/components/clusterpage/ClusterResultExample";
import {
    ChiralityDistChart,
    CategoryDistChart,
    WeightDistributionChart,
} from "@/components/StatsCharts";

const StatisticsPage = () => {
    return (
        <div className="mx-auto p-4 mt-8 space-y-6">
            <h2 className="text-2xl font-semibold">Charts</h2>

            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
                <h3 className="text-xl font-semibold">
                    Molecule Distribution by Weight
                </h3>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <WeightDistributionChart />
                </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
                <h3 className="text-xl font-semibold">
                    Molecule Distribution by Category
                </h3>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <CategoryDistChart />
                </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
                <h3 className="text-xl font-semibold">
                    Molecule Distribution by Chirality
                </h3>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <ChiralityDistChart />
                </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
                <h3 className="text-xl font-semibold">
                    Example Result for Cluster
                </h3>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <ClusterDemoChart />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
