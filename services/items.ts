import config from "@config/index";
import { IProduct } from "@interfaces/index";

export interface IGetItemsRequestArgs {
  limit?: number; // Number of items to be returned per page
  page?: number; // Page number
  sortOrder?: string; // Sort order (asc or desc)
  sortType?: string; // Sort type (price or date)
  filters?: string; // Filters (URL Query Params)
}

export interface IGetItemsResponse {
  data: IProduct[]; // Array of items
  total: number; // Total number of items
}

// Get items from the API
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
  const total = response.headers.get("X-Total-Count"); // Total number of items
  return {
    data,
    total: total ? parseInt(total) : 0,
  };
};

// Get items from the API and extract the tags.
export const getTagsRequest = async () => {
  const response = await fetch(`${config.API_URL}/items`);
  const data = await response.json();
  const tags = data.reduce((acc, item) => {
    const newTags = item.tags.filter((tag) => !acc.includes(tag));
    return [...acc, ...newTags];
  }, []);
  return tags;
};

// Get items from the API and extract the item types.
export const getItemTypesRequest = async () => {
  const response = await fetch(`${config.API_URL}/items`);
  const data: IProduct[] = await response.json();
  const types = data.reduce((acc, item) => {
    if (acc.includes(item.itemType)) return acc;
    return [...acc, item.itemType];
  }, []);
  return types;
};
