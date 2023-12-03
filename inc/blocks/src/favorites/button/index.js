import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={22} viewBox="0 0 25 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3416 20.3831L3.00781 12.0364L3.7798 11.2656L12.1136 19.6124C12.3267 19.8258 12.6725 19.8258 12.8856 19.6124L21.2194 11.2656L21.9914 12.0364L13.6576 20.3831C13.0183 21.0234 11.9809 21.0234 11.3416 20.3831Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.5" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.9532 3.68363C19.9535 1.68084 16.6684 1.83009 14.858 4.00598L13.6229 5.49041C13.0385 6.19272 11.9615 6.19272 11.3771 5.49041L10.142 4.00598C8.3316 1.83009 5.04651 1.68084 3.04682 3.68363C1.16869 5.56468 1.16869 8.61445 3.04682 10.4955L3.79664 11.2465L2.99179 12.0526L2.24197 11.3016C-0.0806578 8.97535 -0.0806575 5.20377 2.24197 2.87754C4.71494 0.400737 8.77752 0.585306 11.0164 3.27618L12.2515 4.7606C12.3808 4.916 12.6192 4.916 12.7485 4.7606L13.9836 3.27617C16.2225 0.585304 20.2851 0.400737 22.758 2.87754C25.0807 5.20378 25.0807 8.97535 22.758 11.3016L22.0082 12.0526L21.2034 11.2465L21.9532 10.4955C23.8313 8.61445 23.8313 5.56468 21.9532 3.68363Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.5" />
                </svg>
                Merkzettel
            </div>
        )
    },
    save: () => null
});
