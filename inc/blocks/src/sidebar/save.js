import { useBlockProps, RichText } from '@wordpress/block-editor';

export function Save({ attributes }) {
	return (
		<ul {...useBlockProps.save()}>
			{attributes.links?.map(({ value }, index) => (
				<RichText.Content
					key={index}
					className="wp-block-glimp-sidebar__navlink"
					tagName="li"
					value={value}
				/>
			))}
		</ul>
	);
}
