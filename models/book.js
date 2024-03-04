const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "books.json");

const getBooksFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
};

module.exports = class Book {
  constructor(title) {
    this.title = title;
  }

  save() {
    getBooksFromFile((books) => {
      books.push(this);
      fs.writeFile(p, JSON.stringify(books), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    return getBooksFromFile(cb);
  }
};
