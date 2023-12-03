import { useBlockProps } from '@wordpress/block-editor';
import { SelectControl, Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Sidebar } from '../components/Sidebar';
import './editor.scss';


export const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();

	const options = useSelect((select) => {
		const categories = select('core').getEntityRecords('taxonomy', 'product_cat', { per_page: -1 });
		if (!categories) return null;
		return categories.map((category) => {
			return { label: category.name, value: category.id };
		});
	});

	return (
		<div {...blockProps}>
			{options ? (
				<>
					{attributes.type === 'buttons' ? (
						options.map((el, i) => (
							<button key={el.value + i}>{el.label}</button>
						))
					) : (
						<SelectControl
							options={[
								{ label: attributes.placeholder, value: '' },
								...options
							]}
						/>
					)}
				</>
			) : (
				<Spinner />
			)}
			<Sidebar
				attributes={attributes}
				setAttributes={setAttributes}
			/>
		</div>
	);
};

export default Edit;
