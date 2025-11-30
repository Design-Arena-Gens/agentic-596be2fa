export default function MarketingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Marketing Options</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Email</h2>
          <div className="mt-3 space-y-3">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="size-4" /> Send welcome email
            </label>
            <label className="block text-sm">
              Provider
              <select className="mt-1 w-full rounded-md border px-2 py-1">
                <option>Mailchimp</option>
                <option>Sendgrid</option>
                <option>Klaviyo</option>
              </select>
            </label>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Automation</h2>
          <div className="mt-3 space-y-3 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4" /> Create draft order on new lead
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4" /> Add to audience segment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

