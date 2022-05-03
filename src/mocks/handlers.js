import { rest } from "msw";

export const handlers = [
  rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
    const date = req.url.searchParams.get("date");
    const fullYear = new Date(date).getFullYear();
    const dateLookUp = {
      2020: {
        url: "https://apod.nasa.gov/apod/image/2204/oldImage.jpg",
        status: 200,
      },
      2022: {
        url: "https://apod.nasa.gov/apod/image/2204/defaultImage.jpg",
        status: 200,
      },
      2056: {
        url: undefined,
        status: 400,
      },
    };
    return res(
      ctx.status(dateLookUp[fullYear].status),
      ctx.json({
        url: dateLookUp[fullYear].url,
      })
    );
  }),
];
