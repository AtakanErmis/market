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
  companies: ICompany[];
  items: IGetItemsResponse;
  tags: string[];
  itemTypes: string[];
}

export default function Home({ companies, items, tags, itemTypes }: Props) {
  const { width } = useWindowSize();
  const [products, setProducts] = useState(items);
  const router = useRouter();
  const [options, setOptions] = useState({
    limit: 16,
    page: 1,
    sortType: "price",
    sortOrder: "asc",
    filters: "",
  });

  useEffect(() => {
    getItemsRequest(options).then((res) => setProducts(res));
  }, [options]);

  useEffect(() => {
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
                ...options,
                sortType: sort.sortType,
                sortOrder: sort.sortOrder,
              })
            }
          />
          <CheckboxGroup
            filterKey="manufacturer"
            title="Companies"
            items={companies}
            hasSearch
            searchPlaceholder="Search..."
          />
          <CheckboxGroup
            filterKey="tags"
            title="Tags"
            items={tags.map((tag) => ({ name: tag, slug: tag }))}
            hasSearch
            searchPlaceholder="Search..."
          />
        </div>
        <div className="col">
          <h2 className="products-title">Products</h2>
          <ItemTypeFilter filterKey="itemType" itemTypes={itemTypes} />
          <ProductGroup products={products.data}></ProductGroup>
          <Pagination
            onChange={(page) => setOptions({ ...options, page })}
            count={products.total}
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
  const items = await getItemsRequest({
    limit: 16,
    page: 1,
    sortType: "price",
    sortOrder: "asc",
  });
  return {
    props: {
      companies,
      items,
      tags,
      itemTypes,
    },
  };
}
