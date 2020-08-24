const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'default.js',
    path: path.resolve(__dirname, 'public'),
    library: 'testLibrary',
  }
};