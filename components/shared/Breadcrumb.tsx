import { ChevronRight } from "lucide-react";
import { AppLink } from "./AppLink";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="w-4 h-4" />}
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <AppLink
                href={item.url}
                className="hover:text-[#f69052] transition-colors"
              >
                {item.name}
              </AppLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
