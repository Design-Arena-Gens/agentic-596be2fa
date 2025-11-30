export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Views</div>
          <div className="mt-2 text-3xl font-bold">12,450</div>
          <div className="mt-2 h-24 rounded bg-gray-100" />
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Submissions</div>
          <div className="mt-2 text-3xl font-bold">1,104</div>
          <div className="mt-2 h-24 rounded bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

