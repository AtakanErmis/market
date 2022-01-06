import { IProduct } from "../../../interfaces";
import ProductItem from "./ProductItem";

interface Props {
  products: IProduct[];
}

export default function ProductGroup({ products }: Props) {
  return (
    <ul className="product-group">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </ul>
  );
}
