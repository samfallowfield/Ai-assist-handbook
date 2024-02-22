import { screen, render } from "@testing-library/react";
import InputForm from "../components/InputForm";

test('The input form contains an input field', () => {
    render(<InputForm />);
    const input = screen.getByTestId('text-input');
    expect(input).toBeInTheDocument();
})

test('The input form should contain a button', () => {
    render(<InputForm />);
    const button = screen.getByTestId('submit-button');
    expect(button).toBeInTheDocument();
})