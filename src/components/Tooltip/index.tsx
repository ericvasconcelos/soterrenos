import * as Popover from '@radix-ui/react-popover';
import { FC, useState } from 'react';

import { TooltipProps } from './types';

export const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  contentPosition = 'top',
  align = 'center',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <div
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {children}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={contentPosition}
          sideOffset={12}
          align={align}
          className="z-10 p-4 rounded-lg bg-white min-w-[150px] text-sm shadow-sm text-gray-800 outline-none whitespace-pre-line"
        >
          {content}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
