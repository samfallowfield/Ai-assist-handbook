import { render, screen } from '@testing-library/react';
import  Header  from '../components/Header.js';

test('header component is valid', () => {
  const { container } = render(<Header />);
  expect(container).toBeInTheDocument();
});

test('header component has h1', () => {
  const { container } = render(<Header />);
  expect(container.querySelector('h1')).toBeInTheDocument();
});

test('header has h1 with id "header-title" that contains the correct text', () => {
  render(<Header />);
  const headerTitle = screen.getByTestId('header-title');
  expect(headerTitle).toHaveTextContent('Chatbot');
});

test('renders chat bot header', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Chatbot/i);
    expect(linkElement).toBeInTheDocument();
  });