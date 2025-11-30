"use client";

import { useEffect, useState } from "react";
import { FieldsPanel } from "@/components/builder/FieldsPanel";
import { FormPreview } from "@/components/builder/FormPreview";
import { SettingsPanel } from "@/components/builder/SettingsPanel";
import type { FieldDefinition } from "@/components/builder/types";

export default function BuilderPage() {
  const [fields, setFields] = useState<FieldDefinition[]>([]);
  const [selected, setSelected] = useState<FieldDefinition | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("builder:fields");
      if (stored) setFields(JSON.parse(stored));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("builder:fields", JSON.stringify(fields));
    } catch {}
  }, [fields]);

  const handleUpdateField = (updated: FieldDefinition) => {
    setFields((prev) => prev.map((f) => (f.id === updated.id ? updated : f)));
    setSelected(updated);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Lead Form Builder</h1>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-1">
          <FieldsPanel />
        </div>
        <div className="xl:col-span-1">
          <FormPreview
            value={fields}
            onChange={(v) => {
              setFields(v);
              if (selected) {
                const fresh = v.find((f) => f.id === selected.id) ?? null;
                setSelected(fresh);
              }
            }}
            onRequestConfig={(f) => setSelected(f)}
          />
        </div>
        <div className="xl:col-span-1">
          <SettingsPanel selectedField={selected} onUpdateField={handleUpdateField} />
        </div>
      </div>
    </div>
  );
}

