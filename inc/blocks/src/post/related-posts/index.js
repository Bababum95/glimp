import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { relatedPosts } from '../../assets/images';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <img src={relatedPosts} />
            </div>
        )
    },
    save: () => null
});
