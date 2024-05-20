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
                <div
                    className="bg-white shadow-lg rounded-lg p-6"
                    style={{ height: "400px" }}
                >
                    <WeightDistributionChart />
                </div>
            </div>
            <div className="w-full lg:w-2/3 mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                    Molecule Distribution by Category
                </h3>
                <div
                    className="bg-white shadow-lg rounded-lg p-6"
                    style={{ height: "400px" }}
                >
                    <CategoryDistChart />
                </div>
            </div>
            <div className="w-full lg:w-1/2 mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                    Molecule Distribution by Chirality
                </h3>
                <div
                    className="bg-white shadow-lg rounded-lg p-6"
                    style={{ height: "300px" }}
                >
                    <ChiralityDistChart />
                </div>
            </div>
            <div className="w-full lg:w-2/3 mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                    Example Result for Cluster
                </h3>
                <div
                    className="bg-white shadow-lg rounded-lg p-6"
                    style={{ height: "400px" }}
                >
                    <ClusterDemoChart />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
