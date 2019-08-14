const cutPreviewText = (text, start, end) => {
  return `${text
    .slice(start, end)
    .split("")
    .slice(0, end - 1)
    .join("")
    .trim()}...`;
};

export default cutPreviewText;
