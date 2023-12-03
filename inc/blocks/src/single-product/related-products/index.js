import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { Edit as edit } from './edit.js';
import metadata from './block.json';
import { relatedProductsIcon } from '../../assets/icons';

registerBlockForSpecificTemplate({
    metadata,
    icon: {
        src: relatedProductsIcon
    },
    edit,
    save: () => null,
    slugs: ['single-product'],
});
