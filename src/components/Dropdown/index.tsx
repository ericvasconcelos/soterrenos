import * as Popover from '@radix-ui/react-popover';
import { FC } from 'react';
import { NavLink } from 'react-router';

import { IDropdown } from './types';

export const Dropdown: FC<IDropdown> = ({ children, items }) => (
  <Popover.Root>
    <Popover.Trigger asChild>{children}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        side="bottom"
        sideOffset={4}
        align="end"
        className="w-60 z-10 py-3 rounded-lg bg-white shadow-3xl outline-none"
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
                className="block w-full px-6 py-3 text-sm text-left text-gray-900 cursor-pointer hover:bg-gray-200 hover:font-medium transition"
                onClick={item.onClick}
              >
                {item.label}
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
                  `block px-6 py-3 text-sm text-gray-900 hover:bg-gray-200 hover:font-medium transition ${isActive && 'bg-gray-200'}`
                }
              >
                {item.label}
              </NavLink>
            )
          );
        })}
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
