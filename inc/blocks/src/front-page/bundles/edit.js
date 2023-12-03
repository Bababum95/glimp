import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

const childBlocks = [ 'glimp/bundles-item-with-description', 'glimp/bundles-simple-item' ]

export const Edit = () => {
    const blockProps = useBlockProps();
    return (
            <ul { ...blockProps }>
                <InnerBlocks
                    allowedBlocks={ childBlocks }
                    template={ [ [ ...childBlocks, {} ] ] }
                />
            </ul>
    );
};

export default Edit;
