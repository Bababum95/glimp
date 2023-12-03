import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';
import './editor.scss';
import { favoritesProducts } from '../../assets/images';

registerBlockType(metadata, {
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <img src={favoritesProducts} />
            </div>
        )
    },
    save: () => null
});
