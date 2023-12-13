import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { shareIcon } from '../../assets/icons';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <div className="wp-block-glimp-share__button">
                <img src={shareIcon} />
                <span>Teilen Sie</span>
                </div>
            </div>
        )
    },
    save: () => null
});
