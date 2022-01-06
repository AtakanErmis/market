import Header from "../components/header";
import CheckboxGroup from "../components/main/CheckboxGroup";
import RadioGroup from "../components/main/RadioGroup";
import ProductGroup from "../components/main/product/ProductGroup";
import Basket from "../components/main/basket";
import Footer from "../components/footer";
import Pagination from "../components/main/product/Pagination";
import ItemTypeFilter from "../components/main/product/ItemTypeFilter";
import useWindowSize from "../hooks/useWindowSize";

const exampleItems = [
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
];

const productItems = [
  {
    tags: ["Buildings", "City"],
    price: 9.99,
    name: "Unbranded Buildings Shirt",
    description:
      "eos ducimus excepturi hic placeat et quia aliquid adipisci nobis",
    slug: "Unbranded-Buildings-Shirt",
    added: 1484711651268,
    manufacturer: "Bayer-and-Sons",
    itemType: "shirt",
  },
  {
    tags: ["Dew", "Spider web"],
    price: 18.99,
    name: "Rustic Spider Web Shirt",
    description:
      "eum id qui sint totam inventore qui et fugit natus quasi libero ullam architecto fuga quod eos sed veritatis voluptate temporibus dolor quis",
    slug: "Rustic-Spider-Web-Shirt",
    added: 1480028633673,
    manufacturer: "Lowe-Wunsch-and-Stoltenberg",
    itemType: "shirt",
  },
  {
    tags: ["Tree", "Plant", "Rain", "Leaves"],
    price: 20.99,
    name: "Refined Tree Shirt",
    description:
      "aut et dolores cum nihil impedit magnam illo praesentium sed non aliquid ex maxime dolores nulla est ut veritatis",
    slug: "Refined-Tree-Shirt",
    added: 1479334976753,
    manufacturer: "Hodkiewicz-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Sunset", "Plants"],
    price: 19.99,
    name: "Generic Plants Shirt",
    description:
      "voluptatem consequatur nulla veniam eum commodi tempora id qui fugit cumque voluptas consequatur repellat temporibus deleniti est",
    slug: "Generic-Plants-Shirt",
    added: 1484820333067,
    manufacturer: "OHara-Group",
    itemType: "shirt",
  },
  {
    tags: ["Stairs", "People"],
    price: 10.99,
    name: "Refined People Shirt",
    description:
      "fugit sit deleniti iste nobis et eaque voluptas et quia quia aliquam harum ratione et voluptas quia blanditiis ut suscipit",
    slug: "Refined-People-Shirt-1",
    added: 1481201753037,
    manufacturer: "Boyle-LLC",
    itemType: "shirt",
  },
  {
    tags: ["Hills", "Fog"],
    price: 18.99,
    name: "Licensed Fog Shirt",
    description:
      "animi eum officia ut vel cupiditate ipsa ut ducimus mollitia in odit",
    slug: "Licensed-Fog-Shirt-1",
    added: 1485054025293,
    manufacturer: "Konopelski-Group",
    itemType: "shirt",
  },
  {
    tags: ["Waterfall", "Valley", "Nature"],
    price: 20.99,
    name: "Ergonomic Nature Shirt",
    description:
      "quaerat ut adipisci magnam debitis ipsa enim nisi quo provident ut est quia suscipit tempora asperiores repellendus voluptatum iusto excepturi fuga quo",
    slug: "Ergonomic-Nature-Shirt-2",
    added: 1485643988019,
    manufacturer: "Weissnat-Schowalter-and-Koelpin",
    itemType: "shirt",
  },
  {
    tags: ["Trees", "Fog"],
    price: 19.99,
    name: "Gorgeous Fog Shirt",
    description:
      "odit aut ex perferendis sapiente aspernatur in expedita necessitatibus saepe adipisci perspiciatis laboriosam dolores laboriosam vel fugit ut rerum aut molestiae dolorum rem",
    slug: "Gorgeous-Fog-Shirt-1",
    added: 1482837441556,
    manufacturer: "Hodkiewicz-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Sunset", "Cactus"],
    price: 12.99,
    name: "Awesome Cactus Shirt",
    description:
      "et et eum eos eos quas nobis itaque provident distinctio nobis repellat eos autem id incidunt in eos porro unde",
    slug: "Awesome-Cactus-Shirt",
    added: 1480770503851,
    manufacturer: "Konopelski-Group",
    itemType: "shirt",
  },
  {
    tags: ["Animal", "Bear"],
    price: 10.99,
    name: "Generic Animal Shirt",
    description:
      "omnis placeat quaerat debitis est rerum et vitae molestiae porro necessitatibus adipisci quam cupiditate sit sed est reiciendis",
    slug: "Generic-Animal-Shirt",
    added: 1478295356913,
    manufacturer: "Leuschke-Smith-and-Conroy",
    itemType: "shirt",
  },
  {
    tags: ["Surfer", "Person", "Man", "Ocean"],
    price: 18.99,
    name: "Practical Surfer Shirt",
    description:
      "accusantium eligendi quae autem ea nihil neque neque necessitatibus sit harum possimus et sunt reprehenderit perspiciatis ut consequatur possimus porro animi culpa aut",
    slug: "Practical-Surfer-Shirt",
    added: 1486121685925,
    manufacturer: "Feil-Dooley-and-Reinger",
    itemType: "shirt",
  },
  {
    tags: ["Person", "Forest", "Sun"],
    price: 14.99,
    name: "Fantastic Person Shirt",
    description:
      "ut perspiciatis doloremque deserunt quo quia voluptatibus nulla sit et aperiam sed sit sunt",
    slug: "Fantastic-Person-Shirt-1",
    added: 1485875168147,
    manufacturer: "Konopelski-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Trees"],
    price: 14.99,
    name: "Intelligent Trees Shirt",
    description:
      "ut quis tempore dignissimos quia quidem voluptatem asperiores ut in laboriosam ut ratione deserunt rerum repellat recusandae eligendi ipsum voluptatibus architecto animi dignissimos",
    slug: "Intelligent-Trees-Shirt-3",
    added: 1484037265749,
    manufacturer: "Cruickshank-Bayer-and-Gerlach",
    itemType: "shirt",
  },
  {
    tags: ["Sky", "Night", "Stars", "Space"],
    price: 14.99,
    name: "Unbranded Stars Shirt",
    description:
      "est sit inventore dolorem optio cumque ut ut odio esse illum aut beatae voluptatem voluptatem saepe",
    slug: "Unbranded-Stars-Shirt",
    added: 1479950373785,
    manufacturer: "Franecki---Gaylord",
    itemType: "shirt",
  },
  {
    tags: ["Sunset", "Island", "Ocean"],
    price: 16.99,
    name: "Practical Ocean Shirt",
    description:
      "et eum animi harum ipsa excepturi magni reprehenderit in eligendi error dolore nemo itaque",
    slug: "Practical-Ocean-Shirt-1",
    added: 1482694326122,
    manufacturer: "Cruickshank-Bayer-and-Gerlach",
    itemType: "shirt",
  },
  {
    tags: ["Boat", "Ocean", "People"],
    price: 11.99,
    name: "Generic Boat Shirt",
    description:
      "eum maiores ratione dolorem error qui voluptas est nostrum quia amet recusandae rerum quam perferendis veritatis est qui amet et fugiat",
    slug: "Generic-Boat-Shirt",
    added: 1485146789635,
    manufacturer: "Leannon-Fahey-and-Sawayn",
    itemType: "shirt",
  },
];

const itemTypes = ["shirt", "mug"];

export default function Home() {
  const { width } = useWindowSize();
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
