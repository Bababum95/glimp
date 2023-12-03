import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="p"
				value={attributes.title}
				className='wp-block-glimp-filters__title'
			/>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
