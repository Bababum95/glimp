import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import { pageIcon } from '../assets/icons';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata.name, {
    icon: {
        src: pageIcon
    },
    edit,
    save: () => null
});
