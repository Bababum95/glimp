import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Image } from '../../../assets/components';
import './editor.scss';

export function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<li {...blockProps}>
			<div className='wp-block-glimp-store-information-item__info'>
				<RichText
					tagName="p"
					className='wp-block-glimp-store-information-item__title'
					placeholder='Title'
					value={attributes.title}
					onChange={(title) => setAttributes({ title })}
				/>
				<RichText
					tagName="p"
					className='wp-block-glimp-store-information-item__text'
					placeholder='Text'
					value={attributes.text}
					onChange={(text) => setAttributes({ text })}
				/>
			</div>
			<Image
				mediaID={attributes.mediaID}
				mediaURL={attributes.mediaURL}
				setAttributes={setAttributes}
				imageClass="wp-block-glimp-store-information-item__image"
			/>
		</li>
	);
}
