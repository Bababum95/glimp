import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export const Save = () => {
	const blockProps = useBlockProps.save();

	return (
		<ul { ...blockProps }>
			<InnerBlocks.Content />
		</ul>
	);
};
