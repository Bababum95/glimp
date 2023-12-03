import { useBlockProps, RichText } from '@wordpress/block-editor';

export function Save({ attributes }) {
    const { mediaURL, title, text, button } = attributes;
    return (
        <li {...useBlockProps.save()}>
            {mediaURL && (
                <img
                    className="wp-block-glimp-bundles-item-with-description__image"
                    src={mediaURL}
                    alt={title}
                />
            )}
            <div className='wp-block-glimp-bundles-item-with-description__content'>
                <RichText.Content
                    tagName="p"
                    className='wp-block-glimp-bundles-item-with-description__title'
                    value={title}
                />
                <RichText.Content
                    tagName="p"
                    className='wp-block-glimp-bundles-item-with-description__text'
                    value={text}
                />
                <RichText.Content
                    tagName="span"
                    className='wp-block-glimp-bundles-item-with-description__button'
                    value={button}
                />
            </div>
        </li>
    );
}
