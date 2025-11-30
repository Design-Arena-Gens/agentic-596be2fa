\"use client\";

import { useState } from \"react\";

type Task = { id: string; title: string; done: boolean };

const initialTasks: Task[] = [
  { id: \"connect\", title: \"Install app in Shopify store\", done: false },
  { id: \"bridge\", title: \"Configure App Bridge\", done: false },
  { id: \"pricing\", title: \"Select pricing plan\", done: false },
  { id: \"integrations\", title: \"Connect marketing integrations\", done: false },
  { id: \"builder\", title: \"Create your first lead form\", done: false },
  { id: \"publish\", title: \"Publish and embed on storefront\", done: false },
];

export default function TaskManagerPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const toggle = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const progress = Math.round((tasks.filter((t) => t.done).length / tasks.length) * 100);

  return (
    <div className=\"space-y-6\">
      <h1 className=\"text-2xl font-semibold\">Setup Guide</h1>
      <div className=\"rounded-lg border bg-white p-4\">
        <div className=\"mb-4 flex items-center justify-between\">
          <div className=\"text-sm text-gray-600\">Progress</div>
          <div className=\"text-sm font-medium\">{progress}%</div>
        </div>
        <div className=\"h-2 w-full rounded bg-gray-100\">
          <div className=\"h-full rounded bg-gray-900\" style={{ width: `${progress}%` }} />
        </div>
        <ul className=\"mt-6 space-y-3\">
          {tasks.map((t) => (
            <li key={t.id} className=\"flex items-center justify-between rounded-md border p-3\">
              <label className=\"flex items-center gap-2 text-sm\">
                <input
                  type=\"checkbox\"
                  className=\"size-4\"
                  checked={t.done}
                  onChange={() => toggle(t.id)}
                />
                {t.title}
              </label>
              <a href={linkFor(t.id)} className=\"text-sm text-gray-700 underline\">
                Go
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function linkFor(id: string) {
  switch (id) {
    case \"connect\":
      return \"/dashboard\";
    case \"bridge\":
      return \"/settings\";
    case \"pricing\":
      return \"/pricing\";
    case \"integrations\":
      return \"/integrations\";
    case \"builder\":
      return \"/builder\";
    case \"publish\":
      return \"/forms\";
    default:
      return \"/\";
  }
}

