import { IProduct } from "@interfaces/index";
import ProductItem from "@components/main/product/ProductItem";

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
