import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import { vapeIcon } from '../../assets/icons';
import metadata from './block.json';

registerBlockType(metadata.name, {
    icon: {
        src: vapeIcon
    },
    edit,
    save: () => null
});
