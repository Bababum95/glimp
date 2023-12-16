import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export const Image = ({ mediaID, mediaURL, setAttributes, imageClass }) => {

    const onSelectImage = (media) => {
        setAttributes({
            mediaURL: media.url,
            mediaID: media.id,
        });
    };

    return (
        <>
            <MediaUpload
                onSelect={onSelectImage}
                allowedTypes="image"
                value={mediaID}
                render={({ open }) => (
                    <Button
                        className={mediaID ? '' : 'button button-large'}
                        onClick={open}
                        style={{ height: 'fit-content' }}
                    >
                        {!mediaID ? ('Upload Image') : (
                            <img
                                className={imageClass}
                                src={mediaURL}
                                alt=''
                            />)}
                    </Button>
                )}
            />
        </>
    );
};
