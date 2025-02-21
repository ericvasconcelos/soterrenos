import { FC } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { IDropdown } from './types';
import { NavLink } from 'react-router';

export const Dropdown: FC<IDropdown> = ({ children, items }) => (
  <Popover.Root>
    <Popover.Trigger asChild>{children}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        side="bottom"
        sideOffset={4}
        align="end"
        className="w-60 z-10 py-3 rounded-lg bg-white shadow-xl outline-none"
      >
        {items.map(({ type, label, link }, index) => {
          if (type === 'separate') {
            return (
              <hr key={`${type}-${index}`} className="border-gray-300 my-2" />
            );
          }

          return (
            !!link &&
            !!label && (
              <NavLink
                key={label}
                to={link}
                className={({ isActive }) => {
                  return `block px-6 py-3 text-sm text-gray-900 hover:bg-gray-200 hover:font-medium transition ${isActive && 'bg-gray-200'}`;
                }}
              >
                {label}
              </NavLink>
            )
          );
        })}
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
