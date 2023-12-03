import { SelectControl } from '@wordpress/components';

export const ProductSelect = ({ id, setAttributes, options }) => {
    return (
        <SelectControl
            label="Product"
            options={[{
                disabled: true,
                label: 'Select a product',
                value: 0
            }, ...options]}
            onChange={(value) => setAttributes({ id: Number(value) })}
            value={id}
        />
    )
}
