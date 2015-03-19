function CTextCell(text) {
  TextCell.call(this, text);
}
CTextCell.prototype = Object.create(TextCell.prototype);
CTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    var spaces = 0;
    spaces = (width - line.length)/2;
    if ( (spaces * 2) % 2 == 0)
      result.push(repeat(" ", spaces) + line + repeat(" ", spaces));
    else
      result.push(repeat(" ", spaces - 1) + line + repeat(" ", spaces));
  }
  return result;
};

