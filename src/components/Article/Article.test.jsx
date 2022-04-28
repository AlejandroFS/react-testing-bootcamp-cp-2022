/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react";
import { screen, within, waitFor, fireEvent } from "@testing-library/dom";
import { todayDate } from "./Article";
import Article from "./Article";

describe("Testing article component", () => {
  it("should render a date input element with today's date", () => {
    render(<Article />);

    const dateInputEl = screen.getByLabelText("date-picker");
    expect(dateInputEl).toBeInTheDocument();
    expect(dateInputEl.value).toEqual(todayDate);
  });

  it("should render a picture in the initial load", async () => {
    render(<Article />);
    await waitFor(() => screen.findByAltText("nasa-img"));
    const imgEle = screen.getByAltText("nasa-img")
    expect(imgEle.src).not.toBeUndefined();
  });
});
