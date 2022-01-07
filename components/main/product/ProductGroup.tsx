import { IProduct } from "@interfaces/index";
import ProductItem from "@components/main/product/ProductItem";

interface Props {
  products: IProduct[]; // List of products to display.
}

// Component for displaying products. Loops through the list of products and
// displays each one in a ProductItem component.
export default function ProductGroup({ products }: Props) {
  return (
    <ul className="product-group">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </ul>
  );
}
