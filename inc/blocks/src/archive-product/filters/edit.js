import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { Card } from '../../assets/components';
import './editor.scss';

const allowedBlocks = [
	'glimp/filters-availability',
	'glimp/filters-attribute',
	'glimp/filters-item'
];

export const Edit = ({ clientId, attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	const [templateArray, setTemplateArray] = useState(null);
	const [template, setTemplate] = useState({
		attribute: false,
		availability: false
	});

	const childrens = useSelect((select) => {
		const { getBlocks } = select('core/block-editor');
		return getBlocks(clientId);
	}, []);

	const handleSave = () => {
		let newTemplateArray = [];
		if (template.availability) {
			newTemplateArray.push(['glimp/filters-availability']);
		}
		if (template.attribute) {
			newTemplateArray.push(['glimp/filters-attribute']);
		}
		setTemplateArray(newTemplateArray.length > 0 ? newTemplateArray : null);
	}

	return (
		<div {...blockProps}>
			<RichText
				tagName="p"
				value={attributes.title}
				onChange={(title) => setAttributes({ title })}
				placeholder='Title'
				className='wp-block-glimp-filters__title'
			/>
			{(childrens.length === 0 && !templateArray) ? (
				<Card
					header='Filter Settings'
					handleSave={handleSave}
				>
					<ToggleControl
						label="Attribute Filter"
						checked={template.attribute}
						onChange={(attribute) =>
							setTemplate({ ...template, attribute })
						}
					/>
					<ToggleControl
						label="Availability Filter"
						checked={template.availability}
						onChange={(availability) =>
							setTemplate({ ...template, availability })
						}
					/>
				</Card>
			) : (
				<InnerBlocks allowedBlocks={allowedBlocks} template={templateArray} />
			)}
		</div>
	);
};

export default Edit;
