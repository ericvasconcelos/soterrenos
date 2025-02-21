import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('Card Component', () => {
  it('deve renderizar os children corretamente', () => {
    render(<Card>Conteúdo do Card</Card>);
    expect(screen.getByText('Conteúdo do Card')).toBeInTheDocument();
  });

  it('deve renderizar com as classes padrão quando nenhuma prop é informada', () => {
    const { container } = render(<Card>Test</Card>);
    const cardDiv = container.firstChild as HTMLElement;

    expect(cardDiv).toHaveClass('border');
    expect(cardDiv).toHaveClass('border-gray-300');
    expect(cardDiv).toHaveClass('rounded-xl');
    expect(cardDiv).toHaveClass('p-8');
    expect(cardDiv).not.toHaveClass('p-4');
    expect(cardDiv).not.toHaveClass('p-12');
    expect(cardDiv).not.toHaveClass('shadow-md');
  });

  it('deve aplicar padding pequeno quando padding="sm"', () => {
    const { container } = render(<Card padding="sm">Test</Card>);
    const cardDiv = container.firstChild as HTMLElement;

    expect(cardDiv).toHaveClass('p-4');
  });

  it('deve aplicar padding médio quando padding="md"', () => {
    const { container } = render(<Card padding="md">Test</Card>);
    const cardDiv = container.firstChild as HTMLElement;

    expect(cardDiv).toHaveClass('p-8');
  });

  it('deve aplicar padding grande quando padding="lg"', () => {
    const { container } = render(<Card padding="lg">Test</Card>);
    const cardDiv = container.firstChild as HTMLElement;

    expect(cardDiv).toHaveClass('p-12');
  });

  it('deve aplicar a sombra quando hasShadow é verdadeiro', () => {
    const { container } = render(<Card hasShadow>Test</Card>);
    const cardDiv = container.firstChild as HTMLElement;

    expect(cardDiv).toHaveClass('shadow-md');
  });

  it('deve concatenar a classe customizada passada via className', () => {
    const customClass = 'minha-classe-custom';
    const { container } = render(<Card className={customClass}>Test</Card>);
    const cardDiv = container.firstChild as HTMLElement;

    expect(cardDiv).toHaveClass(customClass);
  });
});
