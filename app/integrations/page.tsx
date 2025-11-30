export default function IntegrationsPage() {
  const providers = [
    { name: "Klaviyo", desc: "Sync leads to lists and flows" },
    { name: "Mailchimp", desc: "Send campaigns to new subscribers" },
    { name: "Zapier", desc: "Automate workflows and notifications" },
    { name: "Google Sheets", desc: "Log leads into a spreadsheet" },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Integrations</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {providers.map((p) => (
          <div key={p.name} className="flex items-center justify-between rounded-lg border bg-white p-4">
            <div>
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-gray-600">{p.desc}</div>
            </div>
            <button className="rounded-md border px-3 py-2">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
}

