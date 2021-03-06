import { useDispatch } from "react-redux";
import { IProduct } from "@interfaces/index";
import { addItem } from "@stores/basketReducer";

interface Props {
  product: IProduct; // Product to display.
}

// Component for each single product. Meant to be used in a ProductGroup component.
export default function ProductItem({ product }: Props) {
  const dispatch = useDispatch();
  return (
    <li className="product-item">
      <div className="product-item__image">
        <img src="https://picsum.photos/200/200" alt={product.name} />
      </div>
      <div className="product-item__price" data-testid="product-price">
        ₺ {product.price}
      </div>
      <div className="product-item__name" data-testid="product-name">
        {product.name}
      </div>
      <button
        onClick={() => dispatch(addItem(product))}
        className="product-item__button"
      >
        Add
      </button>
    </li>
  );
}
