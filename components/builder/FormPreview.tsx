"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import type { FieldDefinition, FieldType } from "./types";

function FieldRow({
  field,
  onRemove,
  onConfig,
  attributes,
  listeners,
}: {
  field: FieldDefinition;
  onRemove: () => void;
  onConfig: () => void;
  attributes?: any;
  listeners?: any;
}) {
  return (
    <div className="group flex items-center justify-between rounded-md border bg-white px-3 py-2 text-sm">
      <div className="flex items-center gap-3">
        <button
          className="cursor-grab text-gray-400 group-hover:text-gray-600"
          aria-label="Drag handle"
          {...listeners}
          {...attributes}
        >
          ??
        </button>
        <span className="font-medium">{field.label}</span>
        {field.required ? (
          <span className="rounded bg-red-50 px-2 py-0.5 text-xs text-red-600">required</span>
        ) : null}
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onConfig} className="rounded-md border px-2 py-1">
          ??
        </button>
        <button onClick={onRemove} className="rounded-md border px-2 py-1">
          ?
        </button>
      </div>
    </div>
  );
}

function SortableFieldRow({
  field,
  onRemove,
  onConfig,
}: {
  field: FieldDefinition;
  onRemove: () => void;
  onConfig: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: field.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style}>
      <FieldRow field={field} onRemove={onRemove} onConfig={onConfig} attributes={attributes} listeners={listeners} />
    </div>
  );
}

function DroppablePreview({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: "preview-dropzone" });
  return (
    <div
      ref={setNodeRef}
      className={[
        "min-h-[220px] rounded-lg border-2 border-dashed p-3 transition-colors",
        isOver ? "border-gray-900 bg-gray-50" : "border-gray-200",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export type FormPreviewProps = {
  value: FieldDefinition[];
  onChange: (next: FieldDefinition[]) => void;
  onRequestConfig: (field: FieldDefinition) => void;
};

export function FormPreview({ value, onChange, onRequestConfig }: FormPreviewProps) {
  const [activeType, setActiveType] = useState<FieldType | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));
  const ids = useMemo(() => value.map((f) => f.id), [value]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    // Dropped from palette
    if (active.data?.current?.from === "palette" && over.id === "preview-dropzone") {
      const type = active.data.current.type as FieldType;
      const id = `${type}-${Date.now()}`;
      const label = labelFor(type);
      onChange([...value, { id, type, label, required: false }]);
      setActiveType(null);
      return;
    }

    // Reorder inside preview
    if (active.id !== over.id) {
      const oldIndex = value.findIndex((f) => f.id === active.id);
      const newIndex = value.findIndex((f) => f.id === over.id);
      if (oldIndex !== -1 && newIndex !== -1) {
        onChange(arrayMove(value, oldIndex, newIndex));
      }
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} onDragStart={(e) => setActiveType(e.active.data?.current?.type ?? null)}>
      <div className="w-full rounded-lg border bg-white p-3">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-600">Form Preview</h2>
          <button
            onClick={() => onChange([])}
            className="rounded-md border px-3 py-1 text-sm"
            title="Clear"
          >
            Clear
          </button>
        </div>
        <DroppablePreview>
          {value.length === 0 ? (
            <div className="grid h-40 place-items-center text-sm text-gray-500">
              Drag fields here to build your form
            </div>
          ) : (
            <SortableContext items={ids} strategy={verticalListSortingStrategy}>
              <div className="grid gap-2">
                {value.map((f) => (
                  <SortableFieldRow
                    key={f.id}
                    field={f}
                    onConfig={() => onRequestConfig(f)}
                    onRemove={() => onChange(value.filter((x) => x.id !== f.id))}
                  />
                ))}
              </div>
            </SortableContext>
          )}
        </DroppablePreview>
      </div>
      <DragOverlay>
        {activeType ? (
          <div className="rounded-md border bg-white px-3 py-2 text-sm shadow-md">{labelFor(activeType)}</div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function labelFor(type: FieldType): string {
  switch (type) {
    case "full_name":
      return "Full Name";
    case "first_name":
      return "First Name";
    case "last_name":
      return "Last Name";
    case "phone":
      return "Phone";
    case "email":
      return "Email";
    case "full_address":
      return "Full Address";
    case "state":
      return "State/Province";
    case "city":
      return "City/Town";
    case "postal_code":
      return "Postal Code";
    case "product":
      return "Product";
    case "variant":
      return "Variant";
    case "quantity":
      return "Quantity";
    case "notes":
      return "Notes/Instructions";
    case "payment_method":
      return "Payment Method";
    default:
      return "Field";
  }
}

