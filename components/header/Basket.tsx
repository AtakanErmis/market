import BasketIcon from "@assets/icons/basket.svg";
import useWindowSize from "@hooks/useWindowSize";
import Basket from "@components/main/basket";
import { useSelector } from "react-redux";
import { AppState } from "@stores/store";

export default function HeaderBasket() {
  const { width } = useWindowSize();
  const basket = useSelector((state: AppState) => state.basket);
  return (
    <div className="header-basket">
      <div className="header-basket__content">
        <span className="icon">
          <BasketIcon />
        </span>
        <span className="text">₺{basket.totalPrice}</span>
      </div>
      {width < 1280 && (
        <div className="mobile-basket">
          <Basket />
        </div>
      )}
    </div>
  );
}
