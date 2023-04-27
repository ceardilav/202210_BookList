import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BookDetails } from './book-detail/book-details';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl: string = environment.baseUrl + 'books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookDetails[]> {
    return this.http.get<BookDetails[]>(this.apiUrl);
  }
}
