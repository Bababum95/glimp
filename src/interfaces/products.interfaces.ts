import { IResponseProducts } from "./api.interfaces";

interface attribute {
  taxonomy: string;
  value: string[];
  exclude: boolean;
}


export interface ICurrentFilters {
  sort: string;
  offset: number | string;
  in_stock: boolean;
  attributes: attribute[],
};


interface ITerm {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
}

export interface IFilterResult {
  [key: string]: ITerm[];
}

export interface IProductData {
  id: number;
  image: [string, number, number, boolean];
  is_in_stock: boolean;
  is_on_sale: boolean;
  is_variation: boolean;
  link: string;
  name: string;
  nikotinfrai: boolean;
  parent_id: number;
  price: string;
  regular_price: string;
  rating: string;
}

export interface IFilterResultPair {
  filter: ICurrentFilters;
  data: IResponseProducts;
}