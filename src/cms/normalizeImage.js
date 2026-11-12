import { imageUrl } from "./imageURL";

export function normalizeImage(image, width, height) {
  if (!image) return null;

  return imageUrl(image)
    .width(width)
    .height(height)
    .fit("max")
    .url();
}
