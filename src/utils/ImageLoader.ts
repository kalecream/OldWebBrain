export const ImageLoader = ({ src, width, quality }) => {
  return `https://yunghigue.com/${src}?w=${width}&q=${quality || 75}`;
};
