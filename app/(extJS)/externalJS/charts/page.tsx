import ChartComponent from "@/components/charts/SmileTypeDistributionChart";
import WeightDistributionChart from "@/components/charts/WeightDistributionChart";
import ClasstypeDistChart from "@/components/charts/ClassTypeDistributionBarChart";

export default function Page() {
    return (
        <div>
            <h1>Charts</h1>
            <p>This is the Charts page.</p>
            <WeightDistributionChart />
            <ChartComponent />
            <ClasstypeDistChart />
        </div>
    );
}
