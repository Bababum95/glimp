import { useState, useEffect } from '@wordpress/element';
import { SelectControl, Button } from '@wordpress/components'


const SelectProduct = ({
    products,
    index,
    productList,
    setAttributes,
    api,
    variable,
    removeProduct
}) => {
    const [variations, setVariations] = useState([]);
    const options = products?.map((product) => {
        return { label: product.title.rendered, value: product.id }
    })

    const handleProductChange = (value) => {
        const updatedList = [...productList];
        updatedList[index] = {
            ...productList[index],
            id: value
        }
        setAttributes({ productList: updatedList })
    }

    const handleVariationChange = (value) => {
        const updatedList = [...productList];
        updatedList[index] = {
            ...productList[index],
            variation: value
        }
        setAttributes({ productList: updatedList })
    }

    useEffect(() => {
        if (!productList[index].id || !variable) return;
        api.get(`products/${productList[index].id}/variations`, { per_page: 50 })
            .then(data => {
                const options = data.data.map((el) => {
                    return { label: el.name, value: el.id }
                })
                setVariations(options);
            })
    }, [productList[index].id], variable);

    return (
        <>
            <SelectControl
                label={`Product ${index + 1}`}
                options={options}
                value={productList[index].id ?? handleProductChange(products[index].id)}
                onChange={(value) => handleProductChange(value)}
            />
            {variations.length > 0 && (
                <SelectControl
                    label="Variation"
                    options={variations}
                    value={productList[index].variation ?? handleVariationChange(variations[0].value)}
                    onChange={(value) => handleVariationChange(value)}
                />
            )}
            <Button
                variant="primary"
                onClick={() => removeProduct(index)}
            >
                Remove product №{index + 1}
            </Button>
        </>
    )
}

export default SelectProduct;