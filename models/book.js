const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

module.exports = class Book {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(rootDir, "data", "books.json");
    fs.readFile(p, (err, fileContent) => {
      let books = [];
      if (!err) {
        books = JSON.parse(fileContent);
      }
      books.push(this);
      fs.writeFile(p, JSON.stringify(books), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(rootDir, "data", "books.json");
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return cb([]);
      }
      return cb(JSON.parse(fileContent));
    });
  }
};
