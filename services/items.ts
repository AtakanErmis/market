import config from "@config/index";
import { IProduct } from "@interfaces/index";

export interface IGetItemsRequestArgs {
  limit?: number;
  page?: number;
  sortOrder?: string;
  sortType?: string;
  filters?: string;
}

export interface IGetItemsResponse {
  data: IProduct[];
  total: number;
}

export const getItemsRequest = async ({
  limit,
  page,
  sortOrder,
  sortType,
  filters,
}: IGetItemsRequestArgs) => {
  const response = await fetch(
    `${config.API_URL}/items?` +
      filters +
      new URLSearchParams({
        _limit: `${limit}`,
        _page: `${page}`,
        _sort: sortType,
        _order: sortOrder,
      })
  );
  const data = await response.json();
  const total = response.headers.get("X-Total-Count");
  return {
    data,
    total: total ? parseInt(total) : 0,
  };
};

export const getTagsRequest = async () => {
  const response = await fetch(`${config.API_URL}/items`);
  const data = await response.json();
  const tags = data.reduce((acc, item) => {
    const newTags = item.tags.filter((tag) => !acc.includes(tag));
    return [...acc, ...newTags];
  }, []);
  return tags;
};

export const getItemTypesRequest = async () => {
  const response = await fetch(`${config.API_URL}/items`);
  const data: IProduct[] = await response.json();
  const types = data.reduce((acc, item) => {
    if (acc.includes(item.itemType)) return acc;
    return [...acc, item.itemType];
  }, []);
  return types;
};
