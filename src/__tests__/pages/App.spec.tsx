import App from "../../App";
import { fireEvent, render } from "@testing-library/react";
describe(`App.tsx`, () => {
  let container: any;
  beforeEach(() => {
    container = render(<App />);
  });
  it("should render App component", () => {
    expect(container.container).toBeInTheDocument();
  });
  it("should trigger setCount", () => {
    const button = container.getByText("count is 0");
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });
});
