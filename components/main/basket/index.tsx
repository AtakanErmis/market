import { useSelector } from "react-redux";
import { IBasket } from "@interfaces/basket";
import BasketItem from "@components/main/basket/BasketItem";
import { AppState } from "@stores/store";
import BasketIcon from "@assets/icons/basket-large.svg";

// Component for displaying the basket.
export default function Basket() {
  const basket: IBasket = useSelector((state: AppState) => state.basket);

  if (basket.items.length) {
    return (
      <ul className="basket">
        {basket.items.map((item) => (
          <BasketItem key={item.product.slug} basketItem={item} />
        ))}
        <li className="basket-price-wrapper">
          <div className="basket-price">₺{basket.totalPrice.toFixed(2)}</div>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="basket basket-empty">
        <div className="basket-empty__icon">
          <BasketIcon />
        </div>
        <div className="basket-empty__text">Your basket is empty.</div>
      </div>
    );
  }
}
