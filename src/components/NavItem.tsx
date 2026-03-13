import { Link } from 'react-router-dom';
import type { NavigationItem } from "../types/navigation";

export const NavItem = (prop: NavigationItem) => {
  return (
    <div className="p-2 rounded-md nav-item transition-colors">
      <Link to={prop.path} className="flex items-center gap-2 transition-colors">
        {prop.icon}
        <span>{prop.name}</span>
      </Link>
    </div>
  )
}