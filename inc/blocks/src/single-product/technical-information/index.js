import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';

registerBlockForSpecificTemplate({
    metadata,
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <table className="woocommerce-product-attributes shop_attributes">
                    <tbody>
                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_geschmack">
                            <th className="woocommerce-product-attributes-item__label">Geschmack</th>
                            <td className="woocommerce-product-attributes-item__value"><p>Beerig, Süß</p></td>
                        </tr>
                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_device">
                            <th className="woocommerce-product-attributes-item__label">Device</th>
                            <td className="woocommerce-product-attributes-item__value"><p>HQD Surv (Wave)</p></td>
                        </tr>
                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_nic">
                            <th className="woocommerce-product-attributes-item__label">Nic</th>
                            <td className="woocommerce-product-attributes-item__value"><p>18 mg</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    },
    save: () => null,
    slugs: ['single-product'],
});

