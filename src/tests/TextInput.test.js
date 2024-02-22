import { render, screen } from "@testing-library/react";
import TextInput from "../components/atoms/TextInput";

test("text input component is valid", () => {
  const { container } = render(<TextInput />);
  expect(container).toBeInTheDocument();
});
