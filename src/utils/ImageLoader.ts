export const ImageLoader = ({ src, width, quality }) => {
  return `https://sabrinamedwinter.com/${src}?w=${width}&q=${quality || 75}`;
};
