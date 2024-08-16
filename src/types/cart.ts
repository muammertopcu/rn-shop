import type {Product} from './product.ts';

export interface Cart extends Product {
  quantity: number;
}
