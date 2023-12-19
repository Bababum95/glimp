import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <div className="wp-block-glimp-loader__card" />
            </div>
        )
    },
    save: () => {
        return (
            <div {...useBlockProps.save()}>
                <div className="wp-block-glimp-loader__card" />
            </div>
        )
    },
});
