import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output-binding-source',
  templateUrl: './input-output-binding-source.component.html',
})
export class InputOutputBindingSourceComponent {

  htmlSource = `
  <h1>Data binding using @Input() and @Output()</h1>
  
  <p>
    In <a routerLink="../data-binding">Data Binding</a> we bind to the right side of the binding declaration (source).
    Every member of a source directive is automatically available for binding.
    This section concentrates on binding to targets, which are directive properties on the left side of the binding declaration.
    These directive properties must be declared as inputs or outputs.
  </p>
  
  <h2>@Input</h2>
  <p>
    @Input() is used to pass information from a parent to a child.
  </p>
  <p>
    At the bottom of this page you will see a list of books, displayed by the parent component.
    You can click on a book, to make this the current book.
    The parent component has a child component that is declared like this:<br>
    &lt;app-input-output-binding-child <span class="highlight">[book]="getCurrentBook()"</span> (bookDeleted)="onBookDeleted($event)"&gt;&lt;/app-input-output-binding-child&gt;<br>
    In the InputOutputBindingChildComponent, the book property is declared like this:
  </p>
  <pre><code>@Input()
  private book: Book;</code></pre>
  <p>
    @Input() accepts an alias.
    If you pass an alias like: @Input('currentBook'), then you have to use [currentBook] in your template.
  </p>
  
  <h2>@Output</h2>
  
  <p>
    Output properties expose event producers, such as EventEmitter objects.
    They pass information from one component (the child) to another (the parent).
  </p>
  <p>
    In this example clicking the "Delete" button results in emitting an event from the child to the parent.
    The parent component has a child component that is declared like this:<br>
    &lt;app-input-output-binding-child [book]="getCurrentBook()" <span class="highlight">(bookDeleted)="onBookDeleted($event)"</span>&gt;&lt;/app-input-output-binding-child&gt;<br>
    The child component contains: "@Output() private bookDeleted = new EventEmitter&lt;Book&gt;();"
    and the parent component contains the onBookDeleted(book: Book) method.
  </p>
  <p>
    @Output accepts an alias.
    If you pass an alias like: @Output('bookIsGone'), then you have to use (bookDeleted)="bookIsGone($event)" in your template.
  </p>
  
  <app-input-output-binding-parent></app-input-output-binding-parent>`;

  parentComponentSource = `
  import { Component, OnInit } from '@angular/core';
  import { Book } from "app/binding/input-output-binding/book";
  
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
     */
    private books: Book[];
  
    /**
     * The current book.
     */
    private currentBook;
  
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
  
  }`;

  parentHtmlSource = `
  <h2>Parent</h2>
  
  <ul>
    <li *ngFor="let book of getBooks(); let bookIndex = index;" (click)=onSelectBook(bookIndex)>
      {{book.title}} - {{book.author}}
    </li>
  </ul>
  
  <app-input-output-binding-child [book]="getCurrentBook()" (bookDeleted)="onBookDeleted($event)"></app-input-output-binding-child>`;

  childComponentSource = `
  import { Component } from '@angular/core';
  
  /**
   * Demonstrates binding using @Input() and @Output().
   */
  @Component({
    selector: 'app-input-output-binding',
    templateUrl: './input-output-binding.component.html',
  })
  export class InputOutputBindingComponent {
  
  }`;
  
  childHtmlSource = `
  <h2>Child</h2>
  
  <h3>{{getBook().getTitle()}}</h3>
  <p>
    Written by: {{getBook().getAuthor()}}
  </p>
  <p>
    ISBN: {{getBook().getIsbn()}}
  </p>
  <button (click)="onDelete()">Delete</button>`;    
}
