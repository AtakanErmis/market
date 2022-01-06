import { IProduct } from "../../../interfaces";

interface Props {
  product: IProduct;
}

export default function ProductItem({ product }: Props) {
  return (
    <li className="product-item">
      <div className="product-item__image">
        <img src="https://picsum.photos/200/200" alt={product.name} />
      </div>
      <div className="product-item__price">₺ {product.price}</div>
      <div className="product-item__name">{product.name}</div>
      <button className="product-item__button">Add</button>
    </li>
  );
}
