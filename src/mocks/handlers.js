import { rest } from "msw";

export const handlers = [
  rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
    const date = req.url.searchParams.get("date");
    const isOldDate = date === "2020-05-05";
    return res(
      ctx.status(200),
      ctx.json({
        url: isOldDate
          ? "https://apod.nasa.gov/apod/image/2204/defaultImage.jpg"
          : "https://apod.nasa.gov/apod/image/2204/newImage.jpg",
      })
    );
  }),
];
