import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';
import './editor.scss';

export const Edit = ({ attributes, setAttributes, clientId, context }) => {
	const blockProps = useBlockProps();

	return (
		<div
			{ ...blockProps }
			className={classNames(
				blockProps.className,
				{ ['active']: context['glimp/tabs'] === clientId }
			)}
		>
			<RichText
				value={attributes.title}
				className='tab-title'
				onChange={(title) => setAttributes({ title })}
				placeholder="Title"
				tagName="h2"
			/>
			<InnerBlocks />
		</div>
	);
};

export default Edit;
