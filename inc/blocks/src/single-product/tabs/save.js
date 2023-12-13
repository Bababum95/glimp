import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './style.scss';

export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className="wp-block-glimp-tabs__navigator">
				{attributes.tabs && attributes.tabs.map((tab, index) => (
					<button className="wp-block-glimp-tabs__button" key={index}>{tab}</button>
				))}
			</div>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
