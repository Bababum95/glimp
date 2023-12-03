import classnames from 'classnames';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<input
				type="email"
				value={attributes.placeholder}
				onChange={(event) => setAttributes({ placeholder: event.target.value })}
				placeholder="Placeholder"
				className="wp-block-glimp-subscribe-form__input"
			/>
			<RichText
				tagName="span"
				value={attributes.button}
				onChange={(button) => setAttributes({ button })}
				placeholder="Button text"
				className="wp-block-glimp-subscribe-form__button"
			/>
		</div>
	);
}
