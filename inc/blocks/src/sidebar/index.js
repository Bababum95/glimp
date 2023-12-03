import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit';
import { Save as save } from './save';
import { sidebarIcon } from '../assets/icons';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata.name, {
    icon: {
        src: sidebarIcon
    },
    edit,
    save
});
