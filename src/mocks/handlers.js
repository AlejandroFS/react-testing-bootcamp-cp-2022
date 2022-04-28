import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request
  rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
    const date = req.url.searchParams.get("date");
    const isNewDate = date === "2020-05-12";
    return res(
      ctx.status(200),
      ctx.json({
        url: isNewDate
          ? "https://apod.nasa.gov/apod/image/2204/defaultImage.jpg"
          : "https://apod.nasa.gov/apod/image/2204/newImage.jpg",
      })
    );
  }),
];
