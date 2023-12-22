import { useBlockProps, RichText } from '@wordpress/block-editor';
import { DatePicker } from '@wordpress/components';
import { Star } from './Star';
import { formatDate } from '../assets/utils';

export function Edit({ attributes, setAttributes, isSelected }) {
	const blockProps = useBlockProps();

	return (
		<article {...blockProps}>
			<div>
				{Array(5).fill().map((_, index) => (
					<span key={index} onClick={() => setAttributes({ rating: index + 1 })}>
						<Star active={index < attributes.rating} />
					</span>
				))}
			</div>
			<div className='wp-block-glimp-review__content'>
				<RichText
					tagName="p"
					className='wp-block-glimp-review__name'
					placeholder='Name'
					value={attributes.name}
					onChange={(name) => setAttributes({ name })}
				/>
				<RichText
					tagName="p"
					className='wp-block-glimp-review__text'
					placeholder='Block text'
					value={attributes.text}
					onChange={(text) => setAttributes({ text })}
				/>
				<div className='wp-block-glimp-review__meta'>
					<span className='wp-block-glimp-review__date'>
						{attributes.date ? formatDate(attributes.date) : 'Date'}
					</span>
                    <span className='wp-block-glimp-review__quelle'>
						Quelle:
						<RichText
							tagName="span"
							className='wp-block-glimp-review__quelle-content'
							placeholder='Quelle'
							value={attributes.quelle}
							onChange={(quelle) => setAttributes({ quelle })}
						/>
					</span>
				</div>
				{isSelected && (
					<DatePicker
						currentDate={attributes.date}
						onChange={(date) => setAttributes({ date })}
					/>
				)}
			</div>
		</article>
	);
}
