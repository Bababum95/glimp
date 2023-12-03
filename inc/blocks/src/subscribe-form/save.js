import { useBlockProps, RichText } from '@wordpress/block-editor';

export function Save({ attributes }) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<input
				type="email"
				placeholder={attributes.placeholder}
				className="wp-block-glimp-subscribe-form__input"
			/>
			<RichText.Content
				tagName="button"
				value={attributes.button}
				className="wp-block-glimp-subscribe-form__button"
			/>
		</div>
	);
}
