import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const children = ['glimp/info-with-emoji-item']

registerBlockForSpecificTemplate({
    metadata,
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <InnerBlocks allowedBlocks={children} template={children} />
            </div>
        )
    },
    save: () => {
        return (
            <div {...useBlockProps.save()}>
                <InnerBlocks.Content />
            </div>
        )
    },
    slugs: ['single-product'],
})