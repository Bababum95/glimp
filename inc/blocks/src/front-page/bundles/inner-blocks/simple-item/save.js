import { useBlockProps, RichText } from '@wordpress/block-editor';

export function Save({ attributes }) {
    const { mediaURL, title, stuck, regular, sale, path } = attributes;
    return (
        <li {...useBlockProps.save()}>
            <a
                className='wp-block-glimp-bundles-simple-item__link'
                href={path}
                title={title}
            >
                <div className='wp-block-glimp-bundles-simple-item__top'>
                    <div className='wp-block-glimp-bundles-simple-item__info'>
                        <RichText.Content
                            tagName="p"
                            className='wp-block-glimp-bundles-simple-item__title'
                            value={title}
                        />
                        <RichText.Content
                            tagName="p"
                            className='wp-block-glimp-bundles-simple-item__stuck'
                            value={stuck}
                        />
                    </div>
                    <div className='wp-block-glimp-bundles-simple-item__price'>
                        <del>
                            <RichText.Content
                                tagName="span"
                                className='wp-block-glimp-bundles-simple-item__price-regular amount'
                                value={regular}
                            />
                        </del>
                        <RichText.Content
                            tagName="span"
                            className='wp-block-glimp-bundles-simple-item__price-sale amount'
                            value={sale}
                        />
                    </div>
                </div>
                {mediaURL && (
                    <img
                        className="wp-block-glimp-bundles-simple-item__image"
                        src={mediaURL}
                        alt={title}
                    />
                )}
            </a>
        </li>
    );
}
