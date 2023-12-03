import { useBlockProps, RichText } from '@wordpress/block-editor';

export function Save({ attributes }) {
    const { mediaURL, title, text } = attributes;
    const blockProps = useBlockProps.save();
    return (
        <li
            { ...blockProps }
            style={{
                ...blockProps.style,
                backgroundImage: `url(${mediaURL})`,
            }}
        >
			<div className='wp-block-glimp-store-information-item__info'>
                    <RichText.Content
                        tagName="p"
                        className='wp-block-glimp-store-information-item__title'
                        value={title}
                    />
                    <RichText.Content
                        tagName="p"
                        className='wp-block-glimp-store-information-item__text'
                        value={text}
                    />
            </div>
        </li>
    );
}
