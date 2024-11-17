export interface Book {
  name: string;
  author: string;
  summary: string;
  status: BookStatus;
  rating: number;
  key: string;
}

export enum BookStatus {
  OnShelf = 'On shelf',
  InProgress = 'In Progress',
  Completed = 'Completed',
  Wishlist = 'Wishlist',
}
export type IconName =
  | 'bookshelf'
  | 'book-open-page-variant'
  | 'book-check'
  | 'bookmark'
  | 'help-circle';

export function getIconByStatus(status: BookStatus): IconName {
  switch (status) {
    case BookStatus.OnShelf:
      return 'bookshelf';
    case BookStatus.InProgress:
      return 'book-open-page-variant';
    case BookStatus.Completed:
      return 'book-check';
    case BookStatus.Wishlist:
      return 'bookmark';
    default:
      return 'help-circle';
  }
}
