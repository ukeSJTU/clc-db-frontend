export default function OverviewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>
                <h2 className="text-lg font-semibold ">Overview</h2>
                <p>This is the overview page for ChemNexus website</p>
            </div>
            <div>{children}</div>
        </div>
    );
}
