import CheckboxGroup from "@components/main/CheckboxGroup";
import RadioGroup from "@components/main/RadioGroup";
import ProductGroup from "@components/main/product/ProductGroup";
import Basket from "@components/main/basket";
import Pagination from "@components/main/product/Pagination";
import ItemTypeFilter from "@components/main/product/ItemTypeFilter";
import useWindowSize from "@hooks/useWindowSize";
import Layout from "@components/layout";
import { getCompaniesRequest } from "../services/companies";
import { ICompany } from "@interfaces/index";
import { sortItems } from "@constants/sort";
import {
  getItemsRequest,
  getItemTypesRequest,
  getTagsRequest,
  IGetItemsResponse,
} from "../services/items";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  companies: ICompany[]; // List of companies to display for filtering.
  items: IGetItemsResponse; // List of product items to display.
  tags: string[]; // List of tags to display for filtering.
  itemTypes: string[]; // List of item types to display for filtering.
}

const defaultOptions = {
  // default options for product request.
  limit: 16,
  page: 1,
  sortType: "price",
  sortOrder: "asc",
  filters: "",
};

export default function Home({ companies, items, tags, itemTypes }: Props) {
  const { width } = useWindowSize();
  const [products, setProducts] = useState(items);
  const router = useRouter();
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    // update products when options change.
    getItemsRequest(options).then((res) => setProducts(res));
  }, [options]);

  useEffect(() => {
    // update options when router query changes.
    setOptions((o) => ({
      ...o,
      page: 1,
      filters: router.asPath.slice(2) + "&",
    }));
  }, [router]);

  return (
    <Layout>
      <main className="home__content">
        <div className="col">
          <RadioGroup
            title="Sort"
            items={sortItems}
            onChange={(sort) =>
              setOptions({
                // update options when sort type changes.
                ...options,
                sortType: sort.sortType,
                sortOrder: sort.sortOrder,
              })
            }
          />
          <CheckboxGroup
            filterKey="manufacturer"
            title="Brands"
            items={companies}
            hasSearch
            searchPlaceholder="Search brand"
          />
          <CheckboxGroup
            filterKey="tags"
            title="Tags"
            items={tags.map((tag) => ({ name: tag, slug: tag }))}
            hasSearch
            searchPlaceholder="Search tag"
          />
        </div>
        <div className="col">
          <h2 className="products-title">Products</h2>
          <ItemTypeFilter filterKey="itemType" itemTypes={itemTypes} />
          <ProductGroup products={products.data}></ProductGroup>
          <Pagination
            onChange={(page) => setOptions({ ...options, page })} // update options when page changes.
            count={products.total} // total number of products.
          />
        </div>
        {width >= 1280 && (
          <div className="col">
            <Basket />
          </div>
        )}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const companies = await getCompaniesRequest();
  const tags = await getTagsRequest();
  const itemTypes = await getItemTypesRequest();
  const items = await getItemsRequest(defaultOptions);
  return {
    props: {
      companies,
      items,
      tags,
      itemTypes,
    },
  };
}
