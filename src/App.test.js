/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import App from "./App";

describe("Testing the initial page <App>", () => {
  it("should render a title with text: 'James Webb Space Telescope - NASA'", () => {
    render(<App />);

    const headerComponent = screen.getByRole("heading", {
      name: /James Webb Space Telescope - NASA/i,
    });
    expect(headerComponent).toBeInTheDocument();
  });

  it("should render a title with text: 'Project created during Wizeline Academy React Testing Bootcamp'", () => {
    render(<App />);

    const headerComponent = screen.getByRole("heading", {
      name: /Project created during Wizeline Academy React Testing Bootcamp/i,
    });
    expect(headerComponent).toBeInTheDocument();
  });
});
