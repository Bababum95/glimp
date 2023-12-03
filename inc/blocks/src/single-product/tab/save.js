import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import './style.scss';
export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<RichText.Content
				value={ attributes.title }
				className="tab-title"
				tagName="h2"
			/>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
