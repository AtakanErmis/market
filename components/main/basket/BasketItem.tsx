import Plus from "@assets/icons/plus.svg";
import Minus from "@assets/icons/minus.svg";
import { IBasketItem } from "@interfaces/basket";
import { useDispatch } from "react-redux";
import { setItemCount } from "@stores/basketReducer";

interface Props {
  basketItem: IBasketItem;
}

// Component for each single product in the Basket. Meant to be used in a Basket component.
export default function BasketItem({ basketItem }: Props) {
  const dispatch = useDispatch();
  return (
    <li className="basket-item">
      <div className="wrapper">
        <div className="basket-item__name" data-testid="basket-item-name">
          {basketItem.product.name}
        </div>
        <div className="basket-item__price" data-testid="basket-item-price">
          ₺{basketItem.totalPrice.toFixed(2)}
        </div>
      </div>
      <div className="basket-item__amount">
        <button
          data-testid="basket-item-minus"
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
        <span data-testid="basket-item-quantity">{basketItem.quantity}</span>
        <button
          data-testid="basket-item-plus"
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
