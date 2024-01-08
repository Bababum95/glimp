import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const ALLOWED_BLOCKS = [
    'glimp/image-with-button',
    'glimp/page-card'

];

registerBlockType(metadata, {
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
            </div>
        )
    },
    save: () => {
        return (
            <aside
                {...useBlockProps.save()}
                hidden={true}
            >
                <InnerBlocks.Content />
            </aside>
        )
    }
});
