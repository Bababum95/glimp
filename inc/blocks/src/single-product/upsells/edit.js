import { useBlockProps } from '@wordpress/block-editor';
import { upsellsImage } from '../../assets/images'

export const Edit = () => {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<img src={ upsellsImage } alt='placeholder' />
		</div>
	);
};

export default Edit;
