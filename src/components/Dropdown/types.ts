export interface IDropdown {
  children: React.ReactNode;
  items: DropdownItem[];
}

interface LinkItem {
  type: 'link';
  label: string;
  link: string;
}

interface SeparateItem {
  type: 'separate';
  label?: never;
  link?: never;
}

export type DropdownItem = LinkItem | SeparateItem;
