import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import { Save as save } from './save.js';
import { vapesIcon } from '../../assets/icons/index.js';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata.name, {
    icon: {
        src: vapesIcon
    },
    edit,
    save
});
