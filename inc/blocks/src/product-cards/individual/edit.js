import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { Spinner, ToggleControl, RangeControl, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Sidebar, ProductCard, ProductSelect } from '../components';
import { useWooCommerceApi } from '../../assets/hoocks';
import './editor.scss';

export function Edit({ attributes, setAttributes }) {
	const { id, variation, count, variationIds } = attributes;
	const blockProps = useBlockProps();
	const api = useWooCommerceApi();
	const [currentProduct, setCurrentProduct] = useState(null);
	const [currentProductType, setCurrentProductType] = useState(null);
	const [variations, setVariations] = useState([]);
	const products = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'product', { per_page: -1 });
	}, []);

	const options = products?.map((product) => {
		return { label: product.title.rendered, value: product.id }
	})

	const getOptions = (arr) => {
		return arr.map((el) => {
			return { label: el.name, value: el.id }
		})
	}

	const handleChange = (value, index) => {
		const updatedIds = [...variationIds];
		updatedIds[index] = value;
		setAttributes({ variationIds: updatedIds });
	};


	useEffect(() => {
		if (!id || !variation) return;
		api.get(`products/${id}/variations`)
			.then(data => {
				setVariations(data.data);
			})
	}, [id, variation]);

	useEffect(() => {
		if (!id || !products) return;
		const selectedProduct = products.find(product => product.id === id);
		if (selectedProduct && api) {
			api.get(`products/${id}`)
				.then(product => {
					setCurrentProductType(product.data.type)
				});
			setCurrentProduct({
				imageId: selectedProduct.featured_media,
				title: selectedProduct.title.rendered,
			});
		}
	}, [id, products])

	return (
		<div {...blockProps} >
			{options ? (
				<>
					<Sidebar>
						<ProductSelect id={id} setAttributes={setAttributes} options={options} />
						{currentProductType === 'variable' && (
							<>
								<p>Product Display Settings</p>
								<ToggleControl
									label="Display Mode: Variation"
									checked={variation}
									onChange={(value) => setAttributes({ variation: value })}
								/>
								{variation && (
									<>
										<RangeControl
											label="Number of Variations to Display"
											value={count === -1 ? 0 : count}
											onChange={(value) => setAttributes({ count: value })}
											disabled={count === -1}
											min={1}
											max={50}
										/>
										<ToggleControl
											label="All Variations"
											checked={count === -1}
											onChange={(value) => setAttributes({ count: value ? -1 : 10 })}
										/>
										{count > 0 && Array(count).fill(0).map((el, i) => (
											<SelectControl
												options={getOptions(variations)}
												value={variationIds[i] ?? handleChange(variations[i].id, i)}
												onChange={(value) => handleChange(value, i)}
											/>
										))}
									</>
								)}
							</>
						)}
					</Sidebar>
					{currentProduct ? (
						<ProductCard imageId={currentProduct.imageId} title={currentProduct.title} />
					) : (
						<ProductSelect id={id} setAttributes={setAttributes} options={options} />
					)}
				</>
			) : (
				<Spinner />
			)}
		</div>
	);
}
