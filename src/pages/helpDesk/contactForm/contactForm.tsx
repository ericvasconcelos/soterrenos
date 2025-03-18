import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ContactForm } from './index';

describe('ContactForm Component', () => {
  it('should render the form correctly', () => {
    render(<ContactForm />);

    expect(
      screen.getByText(
        'Está com alguma dúvida? Envie uma mensagem para nossa equipe e responderemos assim que possível'
      )
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensagem')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /enviar mensagem/i })
    ).toBeDisabled();
  });

  it('should show validation errors when fields are empty and user tries to submit', async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', {
      name: /enviar mensagem/i,
    });

    await userEvent.click(submitButton);

    waitFor(() => {
      expect(screen.getByText('Preencha este campo')).toBeInTheDocument();
      expect(screen.getByText('Precisamos do seu nome')).toBeInTheDocument();
      expect(screen.getByText('Deixe uma mensagem')).toBeInTheDocument();
    });

    expect(submitButton).toBeDisabled();
  });

  it('should enable the submit button when all fields are filled correctly', async () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText('Email');
    const nameInput = screen.getByLabelText('Nome');
    const messageTextarea = screen.getByLabelText('Mensagem');
    const submitButton = screen.getByRole('button', {
      name: /enviar mensagem/i,
    });

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(messageTextarea, 'Esta é uma mensagem de teste');

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });

  it('should open WhatsApp with the correct data on form submission', async () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText('Email');
    const nameInput = screen.getByLabelText('Nome');
    const messageTextarea = screen.getByLabelText('Mensagem');
    const submitButton = screen.getByRole('button', {
      name: /enviar mensagem/i,
    });

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(messageTextarea, 'Olá, quero mais informações.');

    const windowOpenMock = jest.spyOn(window, 'open').mockImplementation();

    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(windowOpenMock).toHaveBeenCalledWith(
        'https://api.whatsapp.com/send/?phone=5561992391847&text=Olá, quero mais informações.%0ANome: John Doe%0AEmail: test@example.com'
      );
    });

    windowOpenMock.mockRestore();
  });
});
