import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import { vapesIcon } from '../../assets/icons';
import metadata from './block.json';

registerBlockType(metadata.name, {
    icon: {
        src: vapesIcon
    },
    edit,
    save: () => null
});
