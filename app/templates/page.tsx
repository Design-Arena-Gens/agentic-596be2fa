export default function TemplatesPage() {
  const templates = [
    { name: "Lead Capture", desc: "Basic contact capture with email" },
    { name: "Product Inquiry", desc: "Collect product and variant preferences" },
    { name: "Pre-order", desc: "Gather intent, quantity, and shipping" },
    { name: "Wholesale", desc: "Company details and order intent" },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Templates</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {templates.map((t) => (
          <div key={t.name} className="rounded-lg border bg-white p-4">
            <div className="font-medium">{t.name}</div>
            <div className="text-sm text-gray-600">{t.desc}</div>
            <div className="mt-3 flex gap-2">
              <a href="/builder" className="rounded-md border px-3 py-1 text-sm">
                Use template
              </a>
              <button className="rounded-md border px-3 py-1 text-sm">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

