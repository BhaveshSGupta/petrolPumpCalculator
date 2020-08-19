const parser = require("convert-excel-to-json");
const path = require("path");

const result = parser({
  sourceFile: path.join(__dirname, "./data.xlsx"),
  header: {
    rows: 1
  },
  columnToKey: {
    "*": "{{columnHeader}}"
  }
});
module.exports = result;
