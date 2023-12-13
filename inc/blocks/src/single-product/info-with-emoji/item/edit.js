import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useWooCommerceApi } from '../../../assets/hoocks';
import './editor.scss';

export const Edit = ({ attributes, setAttributes, isSelected }) => {
	const blockProps = useBlockProps();
	const api = useWooCommerceApi();
	const [attributesOptions, setAttributesOptions] = useState(null);

	const getOptions = (arr) => {
		return arr.map((el) => {
			return { label: el.name, value: el.slug }
		})
	}

	useEffect(() => {
		if (!api) return;
		api.get('products/attributes')
			.then(({ data }) => {
				const newOptions = getOptions(data);
				setAttributesOptions(newOptions);
			})
	}, []);

	return (
		<div {...blockProps} >
			<p className="wp-block-glimp-info-with-emoji-item__text">
				{attributes.emoji && (
					<span className="wp-block-glimp-info-with-emoji-item__image">
						{attributes.emoji}
					</span>
				)}
				<RichText
					tagName="span"
					placeholder='Label'
					value={attributes.label}
					onChange={(label) => setAttributes({ label })}
				/>
				{(attributes.slug && attributesOptions) && (
					<strong>
						{attributesOptions.find((el) => el.value === attributes.slug).label}
					</strong>
				)}
			</p>
			{isSelected && (
				<Picker
					data={data}
					onEmojiSelect={(emoji) => setAttributes({ emoji: emoji.native })}
				/>
			)}
			<InspectorControls>
				<PanelBody title="Select attribute">
					<>
						{attributesOptions && (
							<SelectControl
								label="Attribute"
								value={attributes.slug}
								onChange={(slug) => setAttributes({ slug })}
								options={attributesOptions}
							/>
						)}
					</>
				</PanelBody>
			</InspectorControls>
		</div>
	);
};
