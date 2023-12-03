import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

const childBlock = [ 'glimp/store-information-item' ];
const template = Array.from({ length: 6 }, () => [ ...childBlock, {}]);

export const Edit = () => {
    const blockProps = useBlockProps();
    return (
            <ul { ...blockProps }>
                <InnerBlocks
                    allowedBlocks={ childBlock }
                    template={ template }
                />
            </ul>
    );
};

