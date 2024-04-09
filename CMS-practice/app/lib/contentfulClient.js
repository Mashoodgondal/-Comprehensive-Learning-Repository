var contentful = require("contentful");
import { space } from "postcss/lib/list";
const client = contentful.createClient({
  // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  // space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: "dy7uR_Ca5x9ObQm1zeGCZx4cPPR7gGEbXtK9c-fYe6g",
  space: "8807elvegc64",
});
export default client;
