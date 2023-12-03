import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useGlimpSettings } from './useGlimpSettings';

export const useWooCommerceApi = () => {
    const settings = useGlimpSettings();

    if (!settings) return null;

    const api = new WooCommerceRestApi({
        url: window.location.origin,
        consumerKey: settings.apiKey,
        consumerSecret: settings.apiSecret,
        version: "wc/v3"
    });

    return api;
};
