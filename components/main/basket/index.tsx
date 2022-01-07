import { useSelector } from "react-redux";
import { IBasket } from "@interfaces/basket";
import BasketItem from "@components/main/basket/BasketItem";
import { AppState } from "@stores/store";

// Component for displaying the basket.
export default function Basket() {
  const basket: IBasket = useSelector((state: AppState) => state.basket);
  return (
    <ul className="basket">
      {basket.items.map((item) => (
        <BasketItem key={item.product.slug} basketItem={item} />
      ))}
      <li className="basket-price-wrapper">
        <div className="basket-price">₺{basket.totalPrice}</div>
      </li>
    </ul>
  );
}
