import {
    WeightDistributionChart,
    ChartComponent,
    ClasstypeDistChart,
} from "@/components/StatsCharts";
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
