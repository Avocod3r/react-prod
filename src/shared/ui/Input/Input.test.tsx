// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Button', () => {
  test('renders correctly', () => {
    render(<Input placeholder="TEST" />);
    expect(screen.getByPlaceholderText('TEST')).toBeInTheDocument();
  });
});
