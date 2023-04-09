/**
 * Simple abstraction of a book.
 */
export class Book {

  /**
   * Constructs this Book from the supplied title, author and isbn.
   * @param title Title of this book.
   * @param author Author of this book.
   * @param isbn  ISBN number of this book.
   */
  constructor(private title: string, private author: string, private isbn: string) {
  }

  /**
   * Gets the title of this book.
   * @return The title of this book.
   */
  getTitle() {
      return this.title;
  }

  /**
   * Gets the author of this book.
   * @return The author of this book.
   */
  getAuthor() {
    return this.author;
  }

  /**
   * Gets the ISBN of this book.
   * @return The ISBN of this book.
   */
  getIsbn() {
      return this.isbn;
  }
}

