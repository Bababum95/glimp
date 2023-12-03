import { IProductData, IFilterResult } from "./products.interfaces";

export interface IApiError {
    status: number;
    statusText: string;
    error: string | null;
}

export interface IResponseProducts {
    products: IProductData[];
    filters: IFilterResult;
    product_count: number | string;
}