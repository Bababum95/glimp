import { RichText } from '@wordpress/block-editor';
import { IconButton } from '@wordpress/components';

export function Link({ links, setAttributes, index }) {
	const handleChange = (value) => {
		const updatedLinks = [...links];
		updatedLinks[index].value = value;
		setAttributes({ links: updatedLinks });
	};

	return (
		<li className="wp-block-glimp-sidebar__navlink">
			<RichText
				value={links[index].value}
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
				onChange={handleChange}
				placeholder={'Navlink ' + (index + 1)}
			/>
			<IconButton
				className="wp-block-glimp-sidebar__remove-link"
				icon="remove"
				onClick={() =>
					setAttributes({
						links: links.filter((_, i) => i !== index),
					})
				}
			/>
		</li>
	);
}
