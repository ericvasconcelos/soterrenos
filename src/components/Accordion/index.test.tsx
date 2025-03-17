import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Accordion } from './index';

const infos = [
  { title: 'Item 1', description: 'Conteúdo do Item 1' },
  { title: 'Item 2', description: 'Conteúdo do Item 2' },
  { title: 'Item 3', description: 'Conteúdo do Item 3' },
];

describe('Accordion Component', () => {
  it('should render titles correctly', () => {
    render(<Accordion infos={infos} />);

    infos.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('should expand and display content when clicking on the title', async () => {
    render(<Accordion infos={infos} />);
    const item1Trigger = screen.getByText('Item 1');
    const item1Content = screen.queryByText('Content of Item 1');

    expect(item1Content).not.toBeInTheDocument();

    await userEvent.click(item1Trigger);
    waitFor(() => {
      expect(item1Content).toBeInTheDocument();
    });
  });

  it('should collapse the content when clicking the title again', async () => {
    render(<Accordion infos={infos} />);
    const item1Trigger = screen.getByText('Item 1');
    const item1Content = screen.queryByText('Content of Item 1');

    await userEvent.click(item1Trigger);
    waitFor(() => {
      expect(item1Content).toBeInTheDocument();
    });

    await userEvent.click(item1Trigger);
    waitFor(() => {
      expect(item1Content).not.toBeInTheDocument();
    });
  });

  it('should allow multiple items to be open at the same time', async () => {
    render(<Accordion infos={infos} />);

    const item1Trigger = screen.getByText('Item 1');
    const item2Trigger = screen.getByText('Item 2');
    const item1Content = screen.queryByText('Content of Item 1');
    const item2Content = screen.queryByText('Content of Item 2');

    await userEvent.click(item1Trigger);
    await userEvent.click(item2Trigger);

    waitFor(() => {
      expect(item1Content).toBeInTheDocument();
      expect(item2Content).toBeInTheDocument();
    });
  });

  it('should rotate the icon when the item is opened', async () => {
    render(<Accordion infos={infos} />);

    const item1Trigger = screen.getByText('Item 1');
    const chevron = item1Trigger.querySelector('.chevron') as HTMLElement;

    await userEvent.click(item1Trigger);

    waitFor(() => {
      expect(chevron).toHaveStyle('transform: rotate(180deg)');
    });
  });
});
