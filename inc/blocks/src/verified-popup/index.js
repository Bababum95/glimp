import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import Popup from './Popup';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: () => {
        return (
            <Popup blockProps={useBlockProps()} />
        );
    },
    save: () => {
        return (
            <Popup blockProps={useBlockProps.save()} />
        );
    }
});
