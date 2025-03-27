import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Switch } from '.';

describe('Switch Component', () => {
  test('should render with correct label', () => {
    render(<Switch labelActive="Enable feature" onChange={() => {}} />);
    const labelText = screen.getByText('Enable feature');
    expect(labelText).toBeInTheDocument();
  });

  test('should be checked when checked prop is true', () => {
    render(
      <Switch checked={true} labelActive="Enable feature" onChange={() => {}} />
    );
    const switchButton = screen.getByRole('checkbox');
    expect(switchButton).toBeChecked();
  });

  test('should not be checked when checked prop is false', () => {
    render(
      <Switch
        checked={false}
        labelActive="Enable feature"
        onChange={() => {}}
      />
    );
    const switchButton = screen.getByRole('checkbox');
    expect(switchButton).not.toBeChecked();
  });

  test('should call onChange handler when clicked', () => {
    const handleChange = jest.fn();
    render(<Switch labelActive="Enable feature" onChange={handleChange} />);
    const switchButton = screen.getByRole('checkbox');
    fireEvent.click(switchButton);
    expect(handleChange).toHaveBeenCalled();
  });

  test('should not be clickable when disabled', () => {
    render(
      <Switch
        disabled={true}
        labelActive="Enable feature"
        onChange={() => {}}
      />
    );
    const switchButton = screen.getByRole('checkbox');
    expect(switchButton).toBeDisabled();
  });
});
