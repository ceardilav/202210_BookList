import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-detail/book-details.component';

@NgModule({
  imports: [CommonModule],
  exports: [BookListComponent],
  declarations: [BookListComponent, BookDetailsComponent],
})
export class BookModule {}
