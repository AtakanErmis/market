import Plus from "../../../assets/icons/plus.svg";
import Minus from "../../../assets/icons/Minus.svg";
import { IBasketItem } from "../../../interfaces/basket";

interface Props {
  basketItem: IBasketItem;
}

export default function BasketItem({ basketItem }: Props) {
  return (
    <li className="basket-item">
      <div className="wrapper">
        <div className="basket-item__name">{basketItem.product.name}</div>
        <div className="basket-item__price">₺{basketItem.product.price}</div>
      </div>
      <div className="basket-item__amount">
        <button>
          <Minus />
        </button>
        <span>{basketItem.quantity}</span>
        <button>
          <Plus />
        </button>
      </div>
    </li>
  );
}
