import { render } from "@testing-library/react";
import { screen, waitFor, fireEvent } from "@testing-library/dom";
import { todayDate } from "./Article";
import Article from "./Article";

describe("Testing article component", () => {
  it("should render a date input element with today's date", () => {
    render(<Article />);

    const dateInputEl = screen.getByLabelText("date-picker");
    expect(dateInputEl).toBeInTheDocument();
    expect(dateInputEl.value).toEqual(todayDate);
  });

  it("should show the Picture of the Day when the user enters the app,", async () => {
    render(<Article />);
    const imgEle = await waitFor(() => screen.findByAltText("nasa-img"));
    expect(imgEle.src).not.toBeUndefined();
  });

  it("should show the picture of the day for the given date, When the user selects a specific date with the format YYYY-MM-DD", async () => {
    render(<Article />);
    await waitFor(() => screen.findByAltText("nasa-img"));
    const dateInputEl = screen.getByLabelText("date-picker");
    fireEvent.change(dateInputEl, { target: { value: "2020-05-12" } });

    await waitFor(async () => {
      const tmpImage = await screen.findByAltText("nasa-img");
      expect(tmpImage.src).toEqual(
        "https://apod.nasa.gov/apod/image/2204/oldImage.jpg"
      );
    });
  });
});
