\"use client\";

import Link from \"next/link\";
import { usePathname } from \"next/navigation\";
import { ReactNode } from \"react\";

type NavItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

const navItems: NavItem[] = [
  { href: \"/dashboard\", label: \"Dashboard\", icon: <span aria-hidden>??</span> },
  { href: \"/pricing\", label: \"Pricing\", icon: <span aria-hidden>??</span> },
  { href: \"/delivery\", label: \"Delivery\", icon: <span aria-hidden>??</span> },
  { href: \"/settings\", label: \"Settings\", icon: <span aria-hidden>??</span> },
  { href: \"/marketing\", label: \"Marketing\", icon: <span aria-hidden>??</span> },
  { href: \"/integrations\", label: \"Integrations\", icon: <span aria-hidden>??</span> },
  // Builder-related sidebar per requirements
  { href: \"/forms\", label: \"My Forms\", icon: <span aria-hidden>??</span> },
  { href: \"/leads\", label: \"Collected Leads\", icon: <span aria-hidden>??</span> },
  { href: \"/analytics\", label: \"Analytics\", icon: <span aria-hidden>??</span> },
  { href: \"/templates\", label: \"Templates\", icon: <span aria-hidden>??</span> },
  { href: \"/builder\", label: \"Form Builder\", icon: <span aria-hidden>??</span> },
  { href: \"/task-manager\", label: \"Setup Guide\", icon: <span aria-hidden>?</span> },
  { href: \"/superadmin\", label: \"Superadmin\", icon: <span aria-hidden>???</span> },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside
      className=\"fixed left-0 top-0 h-dvh w-[240px] border-r border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60\"
      aria-label=\"Primary\"
    >
      <div className=\"flex h-14 items-center gap-2 border-b px-4\">
        <div className=\"h-7 w-7 rounded-md bg-black text-white grid place-items-center font-bold\">S</div>
        <div className=\"font-semibold\">Shopify App</div>
      </div>
      <nav className=\"flex flex-col gap-1 p-2\">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                \"flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors\",
                active ? \"bg-gray-900 text-white\" : \"hover:bg-gray-100 text-gray-700\",
              ].join(\" \")}
            >
              <span className=\"text-base\" aria-hidden>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className=\"mt-auto p-3 text-xs text-gray-500 hidden md:block\">
        <p>Embedded-style layout with fixed sidebar.</p>
      </div>
    </aside>
  );
}

