import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { useBlockProps } from '@wordpress/block-editor';
import Block from './Block';
import metadata from './block.json';
import './style.scss';

registerBlockForSpecificTemplate({
    metadata,
    edit: () => Block({ blockProps: useBlockProps() }),
    save:  () => Block({ blockProps: useBlockProps.save() }),
    slugs: ['product_cat', 'product_attribute', 'product_tag'],
});
