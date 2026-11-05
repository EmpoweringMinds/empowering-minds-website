export function normalizeImage(image, width = 900, height = 600) {
  if (!image) return null;

  return imageUrl(image)
    .width(width)
    .height(height)
    .fit("crop")
    .url();
}