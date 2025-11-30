"use client";

import { useState } from "react";
import type { FieldDefinition } from "./types";

type Tab = "design" | "template" | "marketing" | "thankyou";

export function SettingsPanel({
  selectedField,
  onUpdateField,
}: {
  selectedField: FieldDefinition | null;
  onUpdateField: (field: FieldDefinition) => void;
}) {
  const [tab, setTab] = useState<Tab>("design");
  return (
    <div className="w-full rounded-lg border bg-white">
      <div className="flex items-center gap-1 border-b p-2">
        <button className={tabBtn(tab === "design")} onClick={() => setTab("design")}>
          Design
        </button>
        <button className={tabBtn(tab === "template")} onClick={() => setTab("template")}>
          Template
        </button>
        <button className={tabBtn(tab === "marketing")} onClick={() => setTab("marketing")}>
          Marketing
        </button>
        <button className={tabBtn(tab === "thankyou")} onClick={() => setTab("thankyou")}>
          Thank You Page
        </button>
      </div>
      <div className="p-3">
        {tab === "design" && <DesignTab selectedField={selectedField} onUpdateField={onUpdateField} />}
        {tab === "template" && <TemplateTab />}
        {tab === "marketing" && <MarketingTab />}
        {tab === "thankyou" && <ThankYouTab />}
      </div>
    </div>
  );
}

function tabBtn(active: boolean) {
  return [
    "rounded-md px-3 py-1 text-sm",
    active ? "bg-gray-900 text-white" : "hover:bg-gray-100 text-gray-700",
  ].join(" ");
}

function DesignTab({
  selectedField,
  onUpdateField,
}: {
  selectedField: FieldDefinition | null;
  onUpdateField: (field: FieldDefinition) => void;
}) {
  if (!selectedField) {
    return <div className="text-sm text-gray-500">Select a field to configure its settings.</div>;
  }
  return (
    <div className="space-y-3">
      <label className="block text-sm">
        Label
        <input
          className="mt-1 w-full rounded-md border px-2 py-1"
          value={selectedField.label}
          onChange={(e) => onUpdateField({ ...selectedField, label: e.target.value })}
        />
      </label>
      <label className="block text-sm">
        Placeholder
        <input
          className="mt-1 w-full rounded-md border px-2 py-1"
          value={selectedField.placeholder ?? ""}
          onChange={(e) => onUpdateField({ ...selectedField, placeholder: e.target.value })}
        />
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          className="size-4"
          checked={!!selectedField.required}
          onChange={(e) => onUpdateField({ ...selectedField, required: e.target.checked })}
        />
        Required
      </label>
    </div>
  );
}

function TemplateTab() {
  return (
    <div className="space-y-3 text-sm">
      <label className="block">
        Submit Button Text
        <input className="mt-1 w-full rounded-md border px-2 py-1" defaultValue="Submit" />
      </label>
      <label className="block">
        Layout
        <select className="mt-1 w-full rounded-md border px-2 py-1">
          <option>Stacked</option>
          <option>Two Columns</option>
        </select>
      </label>
    </div>
  );
}

function MarketingTab() {
  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="size-4" /> Subscribe to newsletter
      </label>
      <label className="block">
        Segment
        <select className="mt-1 w-full rounded-md border px-2 py-1">
          <option>Engaged</option>
          <option>Potential Buyers</option>
          <option>Wholesale</option>
        </select>
      </label>
    </div>
  );
}

function ThankYouTab() {
  return (
    <div className="space-y-3 text-sm">
      <label className="block">
        Headline
        <input className="mt-1 w-full rounded-md border px-2 py-1" defaultValue="Thanks for submitting!" />
      </label>
      <label className="block">
        Message
        <textarea className="mt-1 w-full rounded-md border px-2 py-1" rows={4} defaultValue="We received your submission and will be in touch soon." />
      </label>
      <label className="block">
        Redirect URL (optional)
        <input className="mt-1 w-full rounded-md border px-2 py-1" placeholder="https://yourstore.com/thank-you" />
      </label>
    </div>
  );
}

