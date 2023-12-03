import { useBlockProps } from '@wordpress/block-editor';
import { upsellsImage } from '../../assets/images'
import './editor.scss';

export const Edit = () => {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<img src={ upsellsImage } alt='placeholder' />
		</div>
	);
};

export default Edit;
