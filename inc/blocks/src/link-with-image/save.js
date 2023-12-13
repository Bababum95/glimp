import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './style.scss';

export const Save = ({attributes}) => {
	const blockProps = useBlockProps.save();

	return (
		<a
			{ ...blockProps }
			href={ attributes.path }
			style={{
				'--full-width': attributes.fullPage ? '100%' : 'fit-content',
				'--children-width': attributes.fullPage ? '100%' : '',
			}}
			target={ attributes.target ? '_blank' : '_self' }
			rel='noopener'
		>
			<InnerBlocks.Content />
		</a>
	);
};

export default Save;
