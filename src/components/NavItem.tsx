import type { NavigationItem } from "../types/navigation";

export const NavItem = (prop: NavigationItem) => {
  return (
    <div>
      <a href={prop.path} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
        {prop.icon}
        <span>{prop.name}</span>
      </a>
    </div>
  )
}