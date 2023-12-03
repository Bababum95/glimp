import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import './editor.scss';

const allowedBlocks = ['glimp/filters-availability', 'glimp/filters-category', 'glimp/filters-attribute'];

export const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<RichText
				tagName="p"
				value={attributes.label}
				onChange={(label) => setAttributes({ label })}
				placeholder='Label'
				className='wp-block-glimp-filters-item__label'
			/>
			<InnerBlocks allowedBlocks={allowedBlocks} />
		</div>
	);
};

export default Edit;
