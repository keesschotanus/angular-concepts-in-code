import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from "../book";

/**
 * Child component, represening a single book.
 */
@Component({
  selector: 'app-input-output-binding-child',
  templateUrl: './input-output-binding-child.component.html',
})
export class InputOutputBindingChildComponent {

  /**
   * The book.
   * ToDo: had to make this public.
   */
  @Input()
  public book!: Book;

  /**
   * Event emitter.
   */
  @Output()
  private bookDeleted = new EventEmitter<Book>();
  
  /**
   * Gets the book.
   * @return The book.
   */
  public getBook(): Book {
    return this.book;
  }

  /**
   * Emits the book to be deleted.
   */
  public onDelete(): void {
    this.bookDeleted.emit(this.book);
  }
}
