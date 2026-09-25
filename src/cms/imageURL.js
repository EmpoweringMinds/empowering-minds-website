import imageUrlBuilder, { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./sanityClient";

const builder = createImageUrlBuilder(sanityClient);

export function imageUrl(source) {
  return builder.image(source);
}