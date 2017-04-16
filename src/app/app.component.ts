import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MdSnackBar } from '@angular/material'
import { Book } from './book.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBook: any;
  Book: Book;
  title = 'Book Store';

  books: FirebaseListObservable<any[]>
  constructor(private af: AngularFire, private snackBar: MdSnackBar) { }

  getBooks() {
    this.books = this.af.database.list('/Books');
    this.books.subscribe(x => console.log(x))
  }

  saveBook() {
    if (this.Book.name && this.Book.author && this.Book.color) {
      if (this.selectedBook == null)
        this.books.push(this.Book)
      else
        this.books.update(this.selectedBook.$key, this.Book)

      this.clear();

      this.snackBar.open("New book added", "Sucess", {
        duration: 1000,
      });
    }
  }

  deleteBook(bk) {
    this.books.remove(bk)
    this.snackBar.open("Book deleted", "Sucess", {
      duration: 1000,
    });
  }

  viewSelected(bk) {
    this.Book = new Book(bk);
    this.selectedBook = bk;
  }


  clear() {
    this.Book = new Book();
    this.selectedBook = null;
  }

  randomColor() {
    this.Book.color = ('#' + Math.floor(Math.random() * 16777215).toString(16));
  }

  openSnackBar() {
    this.snackBar.open("First sanck bar", "Sucess", {
      duration: 1000,
    });
    // this.snackBar.openFromComponent(AppComponent, {
    //   duration: 500,
    // });
  }
  ngOnInit() {
    this.getBooks();
    this.clear();
  }
}
