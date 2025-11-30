\"use client\";

import { useDraggable } from \"@dnd-kit/core\";
import { AVAILABLE_FIELDS } from \"./types\";

function DraggableField({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    data: { from: \"palette\", type: id },
  });
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.6 : 1,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className=\"flex cursor-grab items-center justify-between rounded-md border px-3 py-2 text-sm hover:bg-gray-50\"
    >
      <span>{label}</span>
      <span aria-hidden className=\"text-gray-400\">??</span>
    </div>
  );
}

export function FieldsPanel() {
  return (
    <div className=\"w-full rounded-lg border bg-white p-3\">
      <h2 className=\"mb-3 text-sm font-medium text-gray-600\">Fields</h2>
      <div className=\"grid gap-2\">
        {AVAILABLE_FIELDS.map((f) => (
          <DraggableField key={f.type} id={f.type} label={f.label} />
        ))}
      </div>
    </div>
  );
}

