import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from './book-details';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() bookDetails!: BookDetails;

  constructor() {
    // to implement
  }

  ngOnInit() {
    // to implement
  }
}
