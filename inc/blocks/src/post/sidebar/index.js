import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <InnerBlocks />
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
