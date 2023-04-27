import { Author } from 'src/app/author/author';
import { Book } from '../book';
import { Review } from '../review';
import { Editorial } from 'src/app/editorial/editorial';

export class BookDetails extends Book {
  authors: Array<Author> = [];
  reviews: Array<Review> = [];

  constructor(
    id: number,
    name: string,
    isbn: string,
    description: string,
    image: string,
    publishingDate: any,
    editorial: Editorial,
    authors: Array<Author>,
    reviews: Array<Review>
  ) {
    super(id, name, isbn, description, image, publishingDate, editorial);
    this.authors = authors;
    this.reviews = reviews;
  }
}
