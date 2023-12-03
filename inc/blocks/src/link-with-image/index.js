import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import { Save as save } from './save.js';
import { linkWithImageIcon } from '../assets/icons';
import metadata from './block.json';

const icon = {
    src: linkWithImageIcon
}

registerBlockType( metadata, { icon, edit, save } );
