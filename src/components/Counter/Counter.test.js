import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders learn react link',  () => {
  render(<Counter />);
  expect(screen.getByText('1')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByText('2')).toBeInTheDocument();
  
});
