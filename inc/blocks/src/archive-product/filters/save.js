import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className='wp-block-glimp-filters__container'>
				<div className='wp-block-glimp-filters__resizer'/>
				<RichText.Content
					tagName="p"
					value={attributes.title}
					className='wp-block-glimp-filters__title'
				/>
				<button className='wp-block-glimp-filters__close' />
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
