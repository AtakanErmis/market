import Header from "@components/header";
import CheckboxGroup from "@components/main/CheckboxGroup";
import RadioGroup from "@components/main/RadioGroup";
import ProductGroup from "@components/main/product/ProductGroup";
import Basket from "@components/main/basket";
import Footer from "@components/footer";
import Pagination from "@components/main/product/Pagination";
import ItemTypeFilter from "@components/main/product/ItemTypeFilter";
import useWindowSize from "@hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();

  const exampleItems = [];
  const productItems = [];
  const itemTypes = [];
  return (
    <div className="home">
      <Header />
      <div className="container">
        <main className="home__content">
          <div className="col">
            <RadioGroup title="Sort" items={exampleItems} />
            <CheckboxGroup
              title="Filter"
              items={exampleItems}
              hasSearch
              searchPlaceholder="Search..."
            />
          </div>
          <div className="col">
            <h2 className="products-title">Products</h2>
            <ItemTypeFilter itemTypes={itemTypes} />
            <ProductGroup products={productItems}></ProductGroup>
            <Pagination />
          </div>
          {width >= 1280 && (
            <div className="col">
              <Basket />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
