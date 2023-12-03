import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Image } from '../../../../assets/components';
import './editor.scss';

export function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<li {...blockProps}>
			<Image
				mediaID={attributes.mediaID}
				mediaURL={attributes.mediaURL}
				setAttributes={setAttributes}
				imageClass="wp-block-glimp-bundles-item-with-description__image"
			/>
			<div className='wp-block-glimp-bundles-item-with-description__content'>
				<RichText
					tagName="p"
					className='wp-block-glimp-bundles-item-with-description__title'
					placeholder='Title'
					value={attributes.title}
					onChange={(title) => setAttributes({ title })}
				/>
				<RichText
					tagName="p"
					className='wp-block-glimp-bundles-item-with-description__text'
					placeholder='Description'
					value={attributes.text}
					onChange={(text) => setAttributes({ text })}
				/>
				<RichText
					tagName="span"
					className='wp-block-glimp-bundles-item-with-description__button'
					placeholder='Button'
					value={attributes.button}
					onChange={(button) => setAttributes({ button })}
				/>
			</div>
		</li>
	);
}
