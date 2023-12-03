import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Image } from '../../../../assets/components';
import { Sidebar } from './Sidebar';

export function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<li {...blockProps}>
			<Sidebar value={attributes.path} setAttributes={setAttributes} />
			<div className='wp-block-glimp-bundles-simple-item__top'>
				<div className='wp-block-glimp-bundles-simple-item__info'>
					<RichText
						tagName="p"
						className='wp-block-glimp-bundles-simple-item__title'
						placeholder='Bandle Title'
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
					/>
					<RichText
						tagName="p"
						className='wp-block-glimp-bundles-simple-item__stuck'
						placeholder='stuck'
						value={attributes.stuck}
						onChange={(stuck) => setAttributes({ stuck })}
					/>
				</div>
				<div className='wp-block-glimp-bundles-simple-item__price'>
					<del>
						<RichText
							tagName="span"
							className='wp-block-glimp-bundles-simple-item__price-regular amount'
							placeholder='Regular price'
							value={attributes.regular}
							onChange={(regular) => setAttributes({ regular })}
						/>
					</del>
					<RichText
						tagName="span"
						className='wp-block-glimp-bundles-simple-item__price-sale amount'
						placeholder='Sale price'
						value={attributes.sale}
						onChange={(sale) => setAttributes({ sale })}
					/>
				</div>
			</div>
			<Image
				mediaID={attributes.mediaID}
				mediaURL={attributes.mediaURL}
				setAttributes={setAttributes}
				imageClass="wp-block-glimp-bundles-simple-item__image"
			/>
		</li>
	);
}
