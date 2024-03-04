const books = [];

module.exports = class Book {
  constructor(title) {
    this.title = title;
  }

  save() {
    books.push(this);
  }

  static fetchAll() {
    return books;
  }
};
