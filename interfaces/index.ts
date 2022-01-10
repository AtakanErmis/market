export interface ICompany {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}

export interface IProduct {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

export interface ISelectItem {
  name: string;
  slug?: string;
  count?: number;
  sortOrder?: string;
  sortType?: string;
  itemCount?: number;
}
