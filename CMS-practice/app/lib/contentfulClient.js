var contentful = require("contentful");
import { space } from "postcss/lib/list";
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});
export default client;
