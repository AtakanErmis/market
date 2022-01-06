import BasketItem from "./BasketItem";

export default function Basket() {
  const products = [];
  return (
    <ul className="basket">
      {products.map((product) => (
        <BasketItem key={product.slug} product={product} />
      ))}
      <li className="basket-price-wrapper">
        <div className="basket-price">₺39.97</div>
      </li>
    </ul>
  );
}
