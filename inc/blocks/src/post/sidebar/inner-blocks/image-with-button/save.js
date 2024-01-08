import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

export const Save = ({ attributes }) => {
	const { mediaURL, title, button, withProduct } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="p"
				className="wp-block-glimp-image-with-button__title"
				value={title}
			/>
			<div className="wp-block-glimp-image-with-button__content">
				{mediaURL && (
					<img
						className="wp-block-glimp-image-with-button__image"
						src={mediaURL}
						alt={title}
					/>
				)}
				<RichText.Content
					tagName="button"
					className="wp-block-glimp-image-with-button__button"
					value={button}
				/>
			</div>
			{withProduct && (
				<div className='product-placeholder'></div>
			)}
		</div>
	);
};

export default Save;
