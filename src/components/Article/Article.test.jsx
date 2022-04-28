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

  it("should render the picture of the day in the img element", async () => {
    render(<Article />);
    await waitFor(() => screen.findByAltText("nasa-img"));
    const imgEle = screen.getByAltText("nasa-img")
    expect(imgEle.src).not.toBeUndefined();
  });

  it("should render a new picture of user selection from the date field", async () => {
    render(<Article />);
    await waitFor(() => screen.findByAltText("nasa-img"));
    const imgEl = screen.getByAltText("nasa-img")
    const dateInputEl = screen.getByLabelText("date-picker");
    fireEvent.change(dateInputEl, { target: { value: '2020-05-12' } });
    expect(imgEl.src).toStrictEqual("https://apod.nasa.gov/apod/image/2204/newImage.jpg")
  });

});
