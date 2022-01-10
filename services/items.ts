import config from "@config/index";
import { IProduct, ISelectItem } from "@interfaces/index";

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

// Get tags from API.
export const getTagsRequest = async () => {
  const response = await fetch(`${config.API_URL}/tags`);
  const data = await response.json();
  return data;
};

// Get item types from API.
export const getItemTypesRequest = async () => {
  const response = await fetch(`${config.API_URL}/itemTypes`);
  const data: ISelectItem[] = await response.json();
  return data;
};
