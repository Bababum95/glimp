import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="p"
				value={attributes.label}
				className='wp-block-glimp-filters-item__label'
			/>
			<div className='wp-block-glimp-filters-item__content'>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
