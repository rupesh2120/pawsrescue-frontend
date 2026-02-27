import { FileText, Heart, Home, Info, Stethoscope } from "lucide-react";
import type { NavigationItem } from "../types/navigation";

export const NAV_ITEMS: NavigationItem[] = [
  {
    name: "Home",
    path: "/",
    icon: <Home size={18} />,
  },
  {
    name: "Animals",
    path: "/animals",
    icon: <Heart size={18} />,
  },
  {
    name: "Vet Care",
    path: "/vet-care",
    icon: <Stethoscope size={18} />,
  },
  {
    name: "Post Adoption",
    path: "/post-adoption",
    icon: <FileText size={18} />,
  },
  {
    name: "About Us",
    path: "/about",
    icon: <Info size={18} />,
  },
]