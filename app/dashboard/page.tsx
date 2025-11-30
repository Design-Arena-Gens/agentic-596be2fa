export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Leads (7d)</div>
          <div className="mt-2 text-3xl font-bold">128</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Conversion</div>
          <div className="mt-2 text-3xl font-bold">4.6%</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Active Forms</div>
          <div className="mt-2 text-3xl font-bold">6</div>
        </div>
      </div>
    </div>
  );
}

