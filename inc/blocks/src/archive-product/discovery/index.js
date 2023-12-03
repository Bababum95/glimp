import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { discoveryIcon } from '../../assets/icons/discovery.js';
import { Edit as edit } from './edit.js';
import metadata from './block.json';
import './style.scss';

registerBlockForSpecificTemplate({
    metadata,
    icon: {
        src: discoveryIcon
    },
    edit,
    save: () => null,
    slugs: ['product_cat', 'product_attribute', 'product_tag'],
});
