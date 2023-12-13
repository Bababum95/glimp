import { useBlockProps } from '@wordpress/block-editor';
import { default as Referral } from './Block.jsx';
import './style.scss';

export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<Referral />
		</div>
	);
};

export default Save;
