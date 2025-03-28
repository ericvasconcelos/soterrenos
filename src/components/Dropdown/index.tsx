import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';
import { NavLink } from 'react-router';

import { IDropdown } from './types';

export const Dropdown: FC<IDropdown> = ({ children, items }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild aria-label="Menu" className="outline-black">
      {children}
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        side="bottom"
        sideOffset={4}
        align="end"
        className="w-60 z-10 py-3 rounded-lg bg-white shadow-md outline-none"
      >
        {items.map((item, index) => {
          if (item.type === 'separate') {
            return (
              <hr
                key={`${item.type}-${index}`}
                className="border-gray-300 my-2"
              />
            );
          }

          if (item.type === 'button') {
            return (
              <button
                key={item.label}
                className="block w-full text-sm text-left text-gray-900 hover:bg-gray-200 hover:font-medium focus-within:bg-gray-200 focus-within:font-medium transition cursor-pointer"
                onClick={item.onClick}
              >
                <DropdownMenu.Item className="px-6 py-3 outline-0">
                  {item.label}
                </DropdownMenu.Item>
              </button>
            );
          }

          return (
            !!item.link &&
            !!item.label && (
              <NavLink
                key={item.label}
                to={item.link}
                className={({ isActive }) =>
                  `block text-sm text-gray-900 hover:bg-gray-200 hover:font-medium focus-within:bg-gray-200 focus-within:font-medium transition ${isActive && 'bg-gray-200'}`
                }
              >
                <DropdownMenu.Item className="px-6 py-3 outline-0">
                  {item.label}
                </DropdownMenu.Item>
              </NavLink>
            )
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
