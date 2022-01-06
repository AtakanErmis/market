import { IProduct } from ".";

export interface IBasket {
  totalPrice: number;
  items: IBasketItem[];
}

export interface IBasketItem {
  product: IProduct;
  quantity: number;
  totalPrice: number;
}
