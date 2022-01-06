import { useSelector } from "react-redux";
import { IBasket } from "../../../interfaces/basket";
import BasketItem from "./BasketItem";

export default function Basket() {
  const basket: IBasket = useSelector((state: any) => state.basket);
  return (
    <ul className="basket">
      {basket.items.map((item) => (
        <BasketItem key={item.product.slug} basketItem={item} />
      ))}
      <li className="basket-price-wrapper">
        <div className="basket-price">₺39.97</div>
      </li>
    </ul>
  );
}
