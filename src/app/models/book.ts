export interface Book {
  id: string;
  title: string;
  isbn: string;
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  authors: string[];
  categories: string[];
}
