export default function DeliveryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Delivery Setup</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Shipping Zones</h2>
          <div className="mt-3 space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4" /> United States
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4" /> Canada
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4" /> Europe
            </label>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Rates</h2>
          <div className="mt-3 space-y-3">
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Label" className="w-40 rounded-md border px-2 py-1" />
              <input type="number" placeholder="Price" className="w-32 rounded-md border px-2 py-1" />
              <button className="rounded-md border px-3 py-1">Add</button>
            </div>
            <ul className="text-sm text-gray-600">
              <li>Standard ? $5.00</li>
              <li>Express ? $12.00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

