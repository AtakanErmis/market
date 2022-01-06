import { IProduct } from "../../../interfaces";
import Plus from "../../../assets/icons/plus.svg";
import Minus from "../../../assets/icons/Minus.svg";

interface Props {
  product: IProduct;
}

export default function BasketItem({ product }: Props) {
  return (
    <li className="basket-item">
      <div className="wrapper">
        <div className="basket-item__name">{product.name}</div>
        <div className="basket-item__price">₺{product.price}</div>
      </div>
      <div className="basket-item__amount">
        <button>
          <Minus />
        </button>
        <span>1</span>
        <button>
          <Plus />
        </button>
      </div>
    </li>
  );
}
