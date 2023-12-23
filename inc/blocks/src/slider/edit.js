import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useState } from "@wordpress/element";
import { CardSelectTemplate } from './CardSelectTemplate';
import { SliderSidbar } from './SliderSidbar';
import './editor.scss';

const templates = {
    images: 'glimp/link-with-image',
    individual: 'glimp/individual-product-card',
    multiple: 'glimp/multiple-product-card',
    pages: 'glimp/page-card',
    blank: ''
}

const AllOWED_BLOCKS = [
    'glimp/link-with-image',
    'glimp/individual-product-card',
    'glimp/multiple-product-card',
    'glimp/page-card',
    'glimp/review',
    'glimp/crossels-products',
    'core/image',
    'woocommerce/product-categories',
]

export const Edit = ({ clientId, attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const [templateArray, setTemplateArray] = useState(null);

    const childrens = useSelect((select) => {
        const { getBlocks } = select('core/block-editor');
        return getBlocks( clientId );
    }, []);

    const handleSave = ({ block, count }) => {
        const newTemplates = Array.from({ length: count }, () => [templates[block], {}]);
        setTemplateArray(newTemplates);
    }

    return (
        <div
            {...blockProps}
            style={{
                '--slider-gap': attributes.gap,
                '--width-teamplate-desctop': attributes.desctop,
                '--width-teamplate-phone': attributes.phone
            }}
        >
            {childrens.length === 0 && !templateArray ? (
                <CardSelectTemplate handleSave={handleSave} />
            ) : (
                <InnerBlocks allowedBlocks={AllOWED_BLOCKS} template={templateArray} />
            )}
            <SliderSidbar attributes={attributes} setAttributes={setAttributes} />
        </div>
    );
};

export default Edit;
