import { registerBlockType } from '@wordpress/blocks';
import { allPosts } from '../assets/images';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: () => {
        return (
            <img src={allPosts} alt='placeholder' />
        );
    },
    save: () => null
});
