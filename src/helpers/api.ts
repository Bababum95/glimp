import { ICurrentFilters, IApiError } from '../interfaces';

const domain = window.location.origin;
const apiUrl = `${domain}/wp-json/glimp-api/v1`;
const ajaxUrl = `${domain}/wp-admin/admin-ajax.php?action=woocommerce_ajax_`;


const getResponseData = (res: Response): Promise<any> => {
    if (res.ok) {
        return res.json();
    } else {
        return res.json()
            .then(parsedError => {
                throw {
                    status: res.status,
                    statusText: res.statusText,
                    error: parsedError.error || parsedError.data,
                } as IApiError;
            })
            .catch((error: IApiError) => {
                if (error.status) {
                    throw error;
                } else {
                    throw {
                        status: res.status,
                        statusText: res.statusText,
                        error: null,
                    } as IApiError;
                }
            });
    }
};


const postData = (formData: FormData, endpoint: string): Promise<any> => {
    return fetch(`${apiUrl}/${endpoint}`, {
        method: 'POST',
        body: formData,
    }).then(getResponseData);
};

const auth = (formData: FormData, endpoint: string): Promise<any> => {
    return postData(formData, endpoint);
};

const forgotPassword = (email: string): Promise<any> => {
    return fetch(`${ajaxUrl}reset_password&username=${email}`)
        .then(getResponseData);
};

const products = (data: ICurrentFilters) => {
    return fetch(`${apiUrl}/products`, {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(getResponseData);
}


const addToCart = (currentProductId: string, quantity: number, variationId: string | null): Promise<any> => {
    return fetch(`${ajaxUrl}add_to_cart&product_id=${currentProductId}&quantity=${quantity}${variationId ? `&variation_id=${variationId}` : ''}`)
        .then(getResponseData);
};

const addToFavorites = (productId: string) => {
    return fetch(`${ajaxUrl}add_to_favorites&product_id=${productId}`)
        .then(getResponseData);
}

const removeFromFavorites = (productId: string) => {
    return fetch(`${ajaxUrl}remove_from_favorites&product_id=${productId}`)
        .then(getResponseData);
}

const getFavorites = () => {
    return fetch(`${ajaxUrl}get_favorites`)
        .then(getResponseData);
}

const addPageLike = (productId: string) => {
    return fetch(`${ajaxUrl}add_page_like&post_id=${productId}`)
        .then(getResponseData);
}

const removePageLike = (productId: string) => {
    return fetch(`${ajaxUrl}remove_page_like&post_id=${productId}`)
        .then(getResponseData);
}

export {
    auth,
    forgotPassword,
    addToCart,
    addToFavorites,
    removeFromFavorites,
    getFavorites,
    addPageLike,
    removePageLike,
    products
};