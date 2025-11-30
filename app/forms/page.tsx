export default function FormsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">My Forms</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((id) => (
          <div key={id} className="rounded-lg border bg-white p-4">
            <div className="font-medium">Form #{id}</div>
            <div className="mt-2 text-sm text-gray-600">Leads: {Math.floor(Math.random() * 500)}</div>
            <div className="mt-4 flex gap-2">
              <a href="/builder" className="rounded-md border px-3 py-1 text-sm">
                Edit
              </a>
              <button className="rounded-md border px-3 py-1 text-sm">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

