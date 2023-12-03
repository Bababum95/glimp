import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

const childBlock = [ 'glimp/page-card' ];
const template = Array.from({ length: 4 }, () => [ ...childBlock, {}]);

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

