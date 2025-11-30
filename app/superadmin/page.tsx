export default function SuperadminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Superadmin</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Tenants</div>
          <div className="mt-2 text-3xl font-bold">42</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Active Stores</div>
          <div className="mt-2 text-3xl font-bold">37</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">MRR</div>
          <div className="mt-2 text-3xl font-bold">$4,810</div>
        </div>
      </div>
      <div className="rounded-lg border bg-white p-4">
        <h2 className="font-medium">Recent Signups</h2>
        <ul className="mt-3 text-sm text-gray-700">
          <li>acme.myshopify.com ? Pro</li>
          <li>catco.myshopify.com ? Starter</li>
          <li>zenmart.myshopify.com ? Pro</li>
        </ul>
      </div>
    </div>
  );
}

