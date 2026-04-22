export interface NavItem {
  [x: string]: any;
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", dropdown: [] },
  { label: "What We Do", dropdown: [] },
  { label: "Jobs", href: "/jobs" },
  { label: "Projects", href: "/projects" },
  { label: "TG Academy", href: "/academy" },
  { label: "Strategic Partnership", href: "/partnership" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book a Consultation", href: "/consultation" },
];
