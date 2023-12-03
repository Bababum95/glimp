import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { useWooCommerceApi } from '../../../../assets/hoocks';
import { Sidebar } from '../components/Sidebar';
import './editor.scss';

const defaultOptions = [
	{ label: 'Blue', value: '' },
	{ label: 'Grey', value: '' },
	{ label: 'White', value: '' },
]

export const Edit = ({ attributes, setAttributes }) => {
	const api = useWooCommerceApi();
	const blockProps = useBlockProps();
	const [attributesOptions, setAttributesOptions] = useState([]);
	const [prewiwOptions, setPrewiwOptions] = useState(defaultOptions);

	const getOptions = (arr) => {
		return arr.map((el) => {
			return { label: el.name, value: el.id }
		})
	}

	useEffect(() => {
		if (!api) return;
		api.get('products/attributes')
			.then(({ data }) => {
				const newOptions = getOptions(data);
				setAttributesOptions(newOptions)
			})
	}, []);

	useEffect(() => {
		if (!attributes.id) return;
		api.get(`products/attributes/${attributes.id}/terms`)
			.then(({ data }) => {
				const newOptions = getOptions(data);
				setPrewiwOptions(newOptions);
			})
	}, [attributes.id]);

	return (
		<div {...blockProps}>
			{attributes.type === 'buttons' ? (
				prewiwOptions.map((el, i) => (
					<button key={el.value + i}>{el.label}</button>
				))
			) : (
				<SelectControl
					options={[
						{ label: attributes.placeholder, value: '' },
						...prewiwOptions
					]}
				/>
			)}
			<Sidebar
				attributes={attributes}
				setAttributes={setAttributes}
			>
				<>
					{attributesOptions && (
						<SelectControl
							label="Attribute"
							value={attributes.id}
							onChange={(id) => setAttributes({ id })}
							options={attributesOptions}
						/>
					)}
				</>
			</Sidebar>
		</div>
	);
};

export default Edit;
