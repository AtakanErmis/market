import { useSelector } from "react-redux";
import { IBasket } from "@interfaces/basket";
import BasketItem from "@components/main/basket/BasketItem";
import { AppState } from "@stores/store";

// Component for displaying the basket.
export default function Basket() {
  const basket: IBasket = useSelector((state: AppState) => state.basket);

  if (basket.items.length === 0) return null;
  return (
    <ul className="basket">
      <div>
        {basket.items.map((item) => (
          <BasketItem key={item.product.slug} basketItem={item} />
        ))}
        <li className="basket-price-wrapper">
          <div className="basket-price">₺{basket.totalPrice.toFixed(2)}</div>
        </li>
      </div>
    </ul>
  );
}
