import { Category } from './Category';

export type Product = {
  id: number;
  category: Category;
  image: string;
  name: string;
  description: string;
  price: number;
};
