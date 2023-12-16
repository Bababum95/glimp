import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Image } from '../../../../assets/components';

export const Edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <RichText
                tagName="h3"
                className="wp-block-glimp-image-with-button__title"
                value={attributes.title}
                onChange={(title) => setAttributes({ title })}
                placeholder='Title'
            />
            <div className="wp-block-glimp-image-with-button__content">
                <Image
                    mediaID={attributes.mediaID}
                    mediaURL={attributes.mediaURL}
                    setAttributes={setAttributes}
                    imageClass="wp-block-glimp-image-with-button__image"
                />
                {attributes.mediaID && (
                    <RichText
                        tagName="button"
                        className="wp-block-glimp-image-with-button__button"
                        value={attributes.button}
                        onChange={(button) => setAttributes({ button })}
                        placeholder='Button'
                    />
                )}
            </div>
        </div>
    );
};

export default Edit;
