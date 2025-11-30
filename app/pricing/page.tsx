export default function PricingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Pricing</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { name: "Starter", price: "$0", features: ["1 form", "100 leads/mo"] },
          { name: "Pro", price: "$29", features: ["Unlimited forms", "5k leads/mo"] },
          { name: "Scale", price: "$99", features: ["Unlimited", "Priority support"] },
        ].map((plan) => (
          <div key={plan.name} className="rounded-lg border bg-white p-6">
            <div className="text-xl font-semibold">{plan.name}</div>
            <div className="mt-2 text-3xl font-bold">{plan.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {plan.features.map((f) => (
                <li key={f}>? {f}</li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-md bg-gray-900 px-4 py-2 text-white">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

