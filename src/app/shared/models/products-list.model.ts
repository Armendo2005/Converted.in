import {Product} from './product.model';
export class ProductsList {
  products!: Product[];
  total!: number;
  skip!: number;
  limit!: number;
}
