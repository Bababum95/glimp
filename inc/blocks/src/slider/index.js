import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import { Save as save } from './save.js';
import { sliderIcon } from '../assets/icons';
import metadata from './block.json';

const icon = {
    src: sliderIcon
}

registerBlockType( metadata, { icon, edit, save } );
