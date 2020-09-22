module.exports = getTitle = (content) => {
  let firstLine = content.split("\n")[0];

  if (firstLine[0] === "#" && firstLine[1] === " ") {
    firstLine = firstLine.slice(2);
    if (firstLine.length > 60) {
      firstLine = firstLine.slice(0, 50);
      firstLine += "...";
    }
    return firstLine;
  }
  return "Untitled";
};
