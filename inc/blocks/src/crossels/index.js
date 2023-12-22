import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { upsellIcon } from '../assets/icons';
import metadata from './block.json';
import './style.scss';


const icon = {
    src: upsellIcon
}

const edit = ({ attributes, setAttributes }) => {
    return (
        <div {...useBlockProps()}>
            <RichText
                tagName="h2"
                className='wp-block-glimp-crossels__title'
                value={attributes.title}
                placeholder='Title'
                onChange={(title) => setAttributes({ title })}
            />
            <InnerBlocks allowedBlocks={['glimp/slider']} />
        </div>
    )
}

const save = ({ attributes }) => {
    return (
        <div {...useBlockProps.save()}>
            <RichText.Content
                tagName="h2"
                className='wp-block-glimp-crossels__title'
                value={attributes.title}
            />
            <InnerBlocks.Content />
        </div>
    )
}

registerBlockType(metadata, { icon, edit, save });
