export interface IDropdown {
  children: React.ReactNode;
  items: DropdownItem[];
}

export interface LinkItem {
  type: 'link';
  label: string;
  link: string;
  onClick?: never;
}

export interface ButtonItem {
  type: 'button';
  label: string;
  onClick: () => void;
  link?: never;
}

export interface SeparateItem {
  type: 'separate';
  label?: never;
  link?: never;
}

export type DropdownItem = ButtonItem | LinkItem | SeparateItem;
