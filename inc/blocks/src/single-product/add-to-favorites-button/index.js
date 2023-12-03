import { registerBlockForSpecificTemplate } from '../../../HOC/registerBlockForSpecificTemplate.js';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.scss';

registerBlockForSpecificTemplate({
    metadata,
    edit: () => {
        return (
            <div {...useBlockProps()}>
                <svg
                    width={32}
                    height={32}
                    viewBox="0 0 20.00 20.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 6.49228C11.4641 3.87207 16.5 4.78701 16.5 8.57245C16.5 11.1012 14.3333 13.4103 10 15.5C5.66667 13.4103 3.5 11.1012 3.5 8.57245C3.5 4.78701 8.5359 3.87207 10 6.49228Z"
                        fill="none"
                    />
                </svg>
            </div>
        )
    },
    save: () => null,
    slugs: ['single-product'],
})