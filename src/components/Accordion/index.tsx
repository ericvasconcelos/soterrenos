import './style.css';

import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from '@radix-ui/react-accordion';
import { FC } from 'react';

import { Icon } from '../Icon';
import { IAccordion, IChildren } from './types';

const AccordionTrigger = ({ children }: IChildren) => (
  <Header>
    <Trigger className="trigger flex items-center w-full justify-between p-4 text-lg font-medium bg-white leading-none text-gray-900 transition-colors hover:bg-gray-100 cursor-pointer">
      {children}
      <span className="chevron">
        <Icon name="chevron-down" aria-hidden />
      </span>
    </Trigger>
  </Header>
);

const AccordionContent = ({ children }: IChildren) => (
  <Content className="content overflow-hidden text-gray-800">
    <div className="px-4 py-6">{children}</div>
  </Content>
);

export const Accordion: FC<IAccordion> = ({ infos }) => (
  <Root
    className="w-full rounded-lg bg-white border border-gray-300"
    type="multiple"
  >
    {infos.map(({ title, description }) => (
      <Item
        className="overflow-hidden first:mt-0 first:rounded-t-lg last:rounded-b-lg not-first:border-t-1 border-t-gray-300"
        value={title}
        key={title}
      >
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </Item>
    ))}
  </Root>
);
