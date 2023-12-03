import { useSelect } from '@wordpress/data';
import { placeholderImage } from '../../assets/images';

export const ProductCard = ({ imageId, title }) => {
	const image = useSelect((select) => {
		if (!imageId) return;
		const media = select('core').getMedia(imageId)
		return media ? media.guid.rendered : null
	}, [imageId]);

    return (
        <>
            <img
                className="wp-block-glimp-individual-product-card__image"
                src={image === null ? placeholderImage : image}
                alt={title}
            />
            <div className='wp-block-glimp-individual-product-card__info'>
                <p className="wp-block-glimp-individual-product-card__title">{title}</p>
                <div className="wp-block-glimp-individual-product-card__bottom">
                    <div className="wp-block-glimp-individual-product-card__price">
                        <span className="amount">7,09 €</span>
                    </div>
                    <button className="wp-block-glimp-individual-product-card__button">
                        +
                    </button>
                </div>
            </div>
        </>
    )
}
