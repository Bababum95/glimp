import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <button className='wp-block-glimp-social-actions-panel__likes'>0</button>
                <button className='wp-block-glimp-social-actions-panel__comments'>0</button>
                <InnerBlocks />
            </div>
        )
    },
    save: () => {
        return (
            <div {...useBlockProps.save()}>
                <div className='root'></div>
                <InnerBlocks.Content />
            </div>
        )
    }
});
