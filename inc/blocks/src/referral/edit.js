import { useBlockProps } from '@wordpress/block-editor';
import { default as Referral } from './Block.jsx';
import './editor.scss';


export const Edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <Referral />
        </div>
    );
};

export default Edit;
