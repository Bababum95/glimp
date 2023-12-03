import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export const Save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
