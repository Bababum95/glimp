import { useBlockProps } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Card, FormSelectProducts, Sidebar, ProductCard } from '../components';
import './editor.scss';

export function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const categories = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'product_cat', { per_page: -1 });
	});
	const tags = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'product_tag', { per_page: -1 });
	});

	const products = useSelect((select) => {
		const query = { per_page: attributes.count };
		if (attributes.category) {
			query['product_cat'] = attributes.category;
		}
		if (attributes.tag) {
			query['product_tag'] = attributes.tag;
		}
		if (Object.keys(query).length === 0) {
			return null;
		}
		return select('core').getEntityRecords('postType', 'product', query);
	}, [attributes.category, attributes.tag, attributes.count]);

	const setOptions = (arr) => {
		return arr.map((el) => {
			return { label: el.name, value: el.id }
		})
	}

	return (
		<div {...blockProps}>
			{(categories && tags) ? (
				<>
					{attributes.save ? (
						<>
							{products ? products.map((product) => (
								<div key={product.id} className='wp-block-glimp-individual-product-card'>
									<ProductCard imageId={product.featured_media} title={product.title.rendered} />
								</div>
							)) : (
								<Spinner />
							)}
						</>
					) : (
						<Card
							handleSave={() => { setAttributes({ save: true }) }}
							header="Choose products"
						>
							<FormSelectProducts
								options={{
									categories: setOptions(categories),
									tags: setOptions(tags)
								}}
								attributes={attributes}
								setAttributes={setAttributes}
							/>
						</Card>
					)}
					<Sidebar>
						<FormSelectProducts
							options={{
								categories: setOptions(categories),
								tags: setOptions(tags)
							}}
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					</Sidebar>
				</>
			) : (
				<Spinner />
			)}
		</div>
	);
}
