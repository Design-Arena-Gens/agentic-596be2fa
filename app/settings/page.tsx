export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">General</h2>
          <div className="mt-3 space-y-3">
            <label className="block text-sm">
              Store Name
              <input className="mt-1 w-full rounded-md border px-2 py-1" placeholder="Your store" />
            </label>
            <label className="block text-sm">
              Contact Email
              <input className="mt-1 w-full rounded-md border px-2 py-1" placeholder="you@example.com" />
            </label>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Embed</h2>
          <p className="mt-2 text-sm text-gray-600">
            Configure embedded app behavior and permissions for Shopify App Bridge.
          </p>
          <button className="mt-3 rounded-md border px-3 py-2">Connect App Bridge</button>
        </div>
      </div>
    </div>
  );
}

