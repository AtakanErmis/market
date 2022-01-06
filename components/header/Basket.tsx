import BasketIcon from "../../assets/icons/basket.svg";
import useWindowSize from "../../hooks/useWindowSize";
import Basket from "../main/basket";

export default function HeaderBasket() {
  const { width } = useWindowSize();
  return (
    <div className="header-basket">
      <div className="header-basket__content">
        <span className="icon">
          <BasketIcon />
        </span>
        <span className="text">₺ 39.97</span>
      </div>
      {width < 1280 && (
        <div className="mobile-basket">
          <Basket />
        </div>
      )}
    </div>
  );
}
