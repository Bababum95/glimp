import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { productCard } from '../../assets/images'
import { upsellIcon } from '../../assets/icons';
import metadata from './block.json';
import './style.scss';


const icon = {
    src: upsellIcon
}

const edit = () => {
    return (
        <div {...useBlockProps()}>
            <img src={productCard} alt='placeholder' />
        </div>
    )
}

const save = () => null;

registerBlockType(metadata, { icon, edit, save });
