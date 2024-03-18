const db = require("../util/database");
const Cart = require("./cart");

module.exports = class Book {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute("INSERT INTO books (title, price, description, imageUrl) VALUES (?, ?, ?, ?)", [
      this.title,
      this.price,
      this.description,
      this.imageUrl,
    ]);
  }

  updateBookById() {
    return db.execute("UPDATE books SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?", [
      this.title,
      this.price,
      this.description,
      this.imageUrl,
      this.id,
    ]);
  }

  static deleteById(id) {
    return db.execute("DELETE FROM books WHERE books.id = ?", [id]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM books");
  }

  static findById(id) {
    return db.execute("SELECT * FROM books WHERE books.id = ?", [id]);
  }
};
