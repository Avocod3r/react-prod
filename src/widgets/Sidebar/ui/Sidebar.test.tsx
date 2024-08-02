// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, screen } from '@testing-library/react';
import {
  componentRender,
} from 'shared/config/tests/componentRender/componentRender';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('renders correctly', () => {
    componentRender(<Sidebar />, { route: '/' });
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('sidebar toggle correctly', () => {
    componentRender(<Sidebar />, { route: '/' });
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('Collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('Collapsed');
  });
});
