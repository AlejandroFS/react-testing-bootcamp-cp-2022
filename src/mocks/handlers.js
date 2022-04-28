import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request
  rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        url: "https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai1024.jpg",
      })
    );
  }),
];
