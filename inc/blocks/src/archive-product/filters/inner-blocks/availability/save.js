import { useBlockProps, RichText } from '@wordpress/block-editor';

export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<label {...blockProps}>
			<div className='wp-block-glimp-filters-availability__badge'>
				<input
					defaultChecked={true}
					className='wp-block-glimp-filters-availability__input'
					type='checkbox'
				/>
				<span className='wp-block-glimp-filters-availability__checkmark' />
			</div>
			<RichText.Content
				tagName="p"
				value={attributes.label}
				className='wp-block-glimp-filters-availability__text'
			/>
		</label>
	);
};

export default Save;
