/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react";
import { screen, within } from "@testing-library/dom";
import { todayDate } from "./components/Article/Article";
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

  it("should render an article in the page", () => {
    render(<App />);

    const articleComponent = screen.getByRole("article");
    expect(articleComponent).toBeInTheDocument();
  });

  describe("Testing article component", () => {
    it("should render a date input element with today's date", () => {
      render(<App />);

      const articleComponent = screen.getByRole("article");
      const dateInputEl = within(articleComponent).getByLabelText('date-picker');
      expect(dateInputEl).toBeInTheDocument();
      expect(dateInputEl.value).toEqual(todayDate);
    });
  });
});
