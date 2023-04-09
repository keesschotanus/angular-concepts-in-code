import { Component, OnInit } from '@angular/core';
import { Book } from "../book";

/**
 * Parent component that maintains a list of books and which book in this list is the current book.
 */
@Component({
  selector: 'app-input-output-binding-parent',
  templateUrl: './input-output-binding-parent.component.html',
})
export class InputOutputBindingParentComponent implements OnInit {

  /**
   * A short list of books.
   * ToDo: made this private.
   */
  public books!: Book[];

  /**
   * The current book.
   */
  private currentBook!: Book;

  /**
   * Initializes the list of books and makes the first book in the list, the current book.
   */
  ngOnInit() {
    this.books = [
      new Book('A Brief History of Time', 'Stephen Hawking', 'X078954123'),
      new Book('Effective Java', 'Joshua Bloch', 'X681937187'),
      new Book('Gödel, Escher Bach', 'Douglas Hofstadter', "X098172630"),
    ];

    this.currentBook = this.books[0];
  }

  /**
   * Gets the list of books.
   * @return The list of books.
   */
  public getBooks(): Book[] {
    return this.books;
  }

  /**
   * Gets the current book.
   * @return The current book.
   */
  public getCurrentBook(): Book {
    return this.currentBook;
  }

  /**
   * Selects the book identified by the supplied index.
   * @param index The index to the list of books.
   */
  public onSelectBook(index: number): void {
    this.currentBook = this.books[index];
  }

  /**
   * Called when the user has deleted a book in the child component.
   * @param book The book to delete.
   */
  public onBookDeleted(book: Book) {
    alert("Book to delete: " + book.getTitle());
  }

}
