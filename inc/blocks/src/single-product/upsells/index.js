import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { Edit as edit } from './edit.js';
import metadata from './block.json';
import { upsellIcon } from '../../assets/icons';
import './style.scss';

registerBlockForSpecificTemplate({
    metadata,
    icon: {
        src: upsellIcon
    },
    edit,
    save: () => null,
    slugs: ['single-product'],
});
