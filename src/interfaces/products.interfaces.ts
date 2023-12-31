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
  attributes: attribute[];
  table?: [];
  variation: boolean;
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
  is_variable: boolean;
  is_favorite?: boolean;
  link: string;
  name: string;
  nikotinfrei: boolean;
  parent_id: number;
  price: string;
  regular_price: string;
  rating: string;
  table?: { [key: string]: string[] }
  attributes?: { [key: string]: string }
}

export interface IFilterResultPair {
  filter: ICurrentFilters;
  data: IResponseProducts;
}