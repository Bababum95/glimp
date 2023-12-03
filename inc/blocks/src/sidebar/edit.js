import { useBlockProps } from '@wordpress/block-editor';
import { IconButton } from '@wordpress/components';
import { Link } from './Link';
import './editor.scss';

export function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<ul {...blockProps}>
			{attributes.links?.map((_, index) => (
				<Link
					key={index}
					index={index}
					setAttributes={setAttributes}
					links={attributes.links}
				/>
			))}
			<IconButton
				className="wp-block-glimp-sidebar__add-link"
				icon="plus"
				onClick={() =>
					setAttributes({ links: [...attributes.links, { value: '' }] })
				}
			/>
		</ul>
	);
}
