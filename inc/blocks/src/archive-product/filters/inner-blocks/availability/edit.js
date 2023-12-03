import { useBlockProps, RichText } from '@wordpress/block-editor';

export const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<div className='wp-block-glimp-filters-availability__badge'>
				<input
					defaultChecked={true}
					className='wp-block-glimp-filters-availability__input'
					type='checkbox'
				/>
				<span className='wp-block-glimp-filters-availability__checkmark' />
			</div>
			<RichText
				tagName="p"
				value={attributes.label}
				onChange={ ( value ) => setAttributes( { label: value } ) }
				placeholder='label'
				className='wp-block-glimp-filters-availability__text'
			/>
		</div>
	);
};

export default Edit;
