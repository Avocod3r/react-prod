// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import Button, { ButtonAppearance } from './Button';

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('renders correctly with classes', () => {
    render(<Button appearance={ButtonAppearance.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('Clear');
  });
});
