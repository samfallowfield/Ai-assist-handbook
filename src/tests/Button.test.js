import { render, screen } from '@testing-library/react';
import Button from '../components/atoms/Button';


test('button component is valid', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
});

test('the text of the button will display what is passed to it', () => {
    render(<Button text="Submit" />);
    const button = screen.getByTestId('submit-button');
    expect(button).toHaveTextContent('Submit');
})