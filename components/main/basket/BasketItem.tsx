import Plus from "@assets/icons/plus.svg";
import Minus from "@assets/icons/Minus.svg";
import { IBasketItem } from "@interfaces/basket";
import { useDispatch } from "react-redux";
import { setItemCount } from "@stores/basketReducer";

interface Props {
  basketItem: IBasketItem;
}

export default function BasketItem({ basketItem }: Props) {
  const dispatch = useDispatch();
  return (
    <li className="basket-item">
      <div className="wrapper">
        <div className="basket-item__name">{basketItem.product.name}</div>
        <div className="basket-item__price">₺{basketItem.product.price}</div>
      </div>
      <div className="basket-item__amount">
        <button
          onClick={() =>
            dispatch(
              setItemCount({
                slug: basketItem.product.slug,
                count: basketItem.quantity - 1,
              })
            )
          }
        >
          <Minus />
        </button>
        <span>{basketItem.quantity}</span>
        <button
          onClick={() =>
            dispatch(
              setItemCount({
                slug: basketItem.product.slug,
                count: basketItem.quantity + 1,
              })
            )
          }
        >
          <Plus />
        </button>
      </div>
    </li>
  );
}
