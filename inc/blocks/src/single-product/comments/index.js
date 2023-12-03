import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';

registerBlockForSpecificTemplate({
    metadata,
    edit: () => {
        return (
            <div { ...useBlockProps() }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. This block features a detailed description of the product, providing insights into its features, benefits, and unique selling points. Explore the key attributes that make this product stand out from the rest, guiding you towards a well-informed purchasing decision
            </div>
        )
    },
    save: () => null,
    slugs: ['single-product'],
})