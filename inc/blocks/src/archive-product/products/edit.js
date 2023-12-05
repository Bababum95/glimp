import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import {
	PanelBody,
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { useWooCommerceApi } from '../../assets/hoocks';
import { upsellsImage } from '../../assets/images'
import './editor.scss';

export const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	const api = useWooCommerceApi();
	const [attributesOptions, setAttributesOptions] = useState([]);

	const getOptions = (arr) => {
		return arr.map((el) => {
			return { label: el.name, value: el.slug }
		})
	}

	const handleChange = (value, index) => {
		const updatedAttributes = [...attributes.attributes];
		updatedAttributes[index] = value;
		setAttributes({ attributes: updatedAttributes });
	};

	useEffect(() => {
		if (!api) return;
		api.get('products/attributes')
			.then(({ data }) => {
				const newOptions = getOptions(data);
				console.log(data)
				setAttributesOptions(newOptions)
			})
	}, []);

	return (
		<div {...blockProps}>
			<img src={upsellsImage} alt='placeholder' />
			<InspectorControls>
				<PanelBody title="Products Settings">
					<ToggleGroupControl
						label="Select View"
						value={attributes.view}
						onChange={(view) => setAttributes({ view })}
					>
						<ToggleGroupControlOption
							value="grid"
							label="Grid"
						/>
						<ToggleGroupControlOption
							value="list"
							label="List"
						/>
					</ToggleGroupControl>
					{(attributes.view === 'list' && attributesOptions) && attributes.attributes.map((el, i) => (
						<SelectControl
							options={[
								{
									label: 'Select attribute',
									value: '',
									isDisabled: true
								},
								...attributesOptions
							]}
							value={el}
							onChange={(value) => handleChange(value, i)}
						/>
					))}
				</PanelBody>
			</InspectorControls>
		</div>
	);
};

export default Edit;
