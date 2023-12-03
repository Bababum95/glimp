import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { Edit as edit } from './edit.js';
import { Save as save } from './save.js';
import metadata from './block.json';

registerBlockForSpecificTemplate({
    metadata,
    edit,
    save,
    slugs: ['single-product'],
});
