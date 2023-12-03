import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import { Save as save } from './save.js';
import { subscribeFormIcon } from '../assets/icons';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: subscribeFormIcon
    },
    edit,
    save
});
