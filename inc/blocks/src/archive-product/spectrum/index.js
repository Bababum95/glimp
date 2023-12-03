import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { spectrumIcon } from '../../assets/icons/spectrum.js';
import { Edit as edit } from './edit.js';
import metadata from './block.json';
import './style.scss';

registerBlockForSpecificTemplate({
    metadata,
    icon: {
        src: spectrumIcon
    },
    edit,
    save: () => null,
    slugs: ['product_cat', 'product_attribute', 'product_tag'],
})