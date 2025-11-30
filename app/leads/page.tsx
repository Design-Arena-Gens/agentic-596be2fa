export default function LeadsPage() {
  const leads = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Lead ${i + 1}`,
    email: `lead${i + 1}@example.com`,
    createdAt: new Date(Date.now() - i * 86400000).toLocaleDateString(),
  }));
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Collected Leads</h1>
      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full border-separate border-spacing-0 text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600">
              <th className="border-b px-4 py-2">Name</th>
              <th className="border-b px-4 py-2">Email</th>
              <th className="border-b px-4 py-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id} className="hover:bg-gray-50">
                <td className="border-b px-4 py-2">{l.name}</td>
                <td className="border-b px-4 py-2">{l.email}</td>
                <td className="border-b px-4 py-2">{l.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

