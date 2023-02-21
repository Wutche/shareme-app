import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "8ku0wp8g",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: false,
  token:
    "skzOO07X8C9VHTp3Qjl0KgmKH5MbC2psi6fFQ20AxU1GrslDshCCdqWoPgDXrm3WGly3bNG2MqytELl0ZQbUijpKBOJb3dN0MV2XRmpEGHSNC7OWjxMpOeO2WqXnt6tSgywYEg5Ms6QldmwBK2OXvi2ouvaRIJLzuiH6FwcZxDe1ZzoypOzs",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
