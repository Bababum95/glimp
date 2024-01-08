import { Spinner } from "@wordpress/components"
import { placeholderImage } from '../../../../assets/images';

const ProductCard = ({ product }) => {

    if (!product) {
        return (
            <Spinner style={{display: 'block', margin: 'auto'}} />
        )
    }

    console.log(product)

    return (
        <div className="glimp-sidebar-product-card">
            <img
                className="glimp-sidebar-product-card__image"
                src={product.images[0].src || placeholderImage}
            />
            <div className="glimp-sidebar-product-card__summary">
                <p className="glimp-sidebar-product-card__title">{product.name}</p>
                <p className="glimp-sidebar-product-card__price">{product.price}</p>
                <p  className="glimp-sidebar-product-card__description">inkl. MwSt. zzgl. Versandkosten</p>
                <button  className="glimp-sidebar-product-card__button">Jetzt kaufen</button>
            </div>
        </div>
    )
}

export default ProductCard