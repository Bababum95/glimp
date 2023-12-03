import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { Edit as edit } from './Edit';
import metadata from './block.json';
import './style.scss';

registerBlockForSpecificTemplate({
    metadata,
    edit,
    save: () => null,
    slugs: ['single-product'],
});
