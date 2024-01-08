import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Button, ToggleControl } from '@wordpress/components';
import { useWooCommerceApi } from '../../../../assets/hoocks';
import { Image } from '../../../../assets/components';
import { Sidebar } from '../../../../product-cards/components';
import ProductCard from './ProductCard';
import SelectProduct from './SelectProduct';


export const Edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const api = useWooCommerceApi();
    const [productsData, setProductsData] = useState([]);

    const products = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'product', { per_page: -1 });
    }, []);

    const removeProduct = (index) => {
        const updatedList = [...attributes.productList];
        updatedList.splice(index, 1);
        setAttributes({ productList: updatedList })
    }

    useEffect(() => {
        if (!attributes.productList || !products || !api) return;
        attributes.productList.forEach((product, index) => {
            if (product.id == 0 || product.id == productsData[index]?.id) return;
            api.get(`products/${product.id}`)
                .then(data => {
                    const updatedData = [...productsData];
                    updatedData[index] = data.data;
                    setProductsData(updatedData);
                })
        })
    }, [attributes.productList, products])

    return (
        <div {...blockProps}>
            <RichText
                tagName="h3"
                className="wp-block-glimp-image-with-button__title"
                value={attributes.title}
                onChange={(title) => setAttributes({ title })}
                placeholder='Title'
            />
            <div className="wp-block-glimp-image-with-button__content">
                <Image
                    mediaID={attributes.mediaID}
                    mediaURL={attributes.mediaURL}
                    setAttributes={setAttributes}
                    imageClass="wp-block-glimp-image-with-button__image"
                />
                {attributes.mediaID && (
                    <RichText
                        tagName="button"
                        className="wp-block-glimp-image-with-button__button"
                        value={attributes.button}
                        onChange={(button) => setAttributes({ button })}
                        placeholder='Button'
                    />
                )}
            </div>
            {attributes.withProduct && (
                <>
                    {attributes.productList?.map((el, index) => el.id == 0 ? (
                        <SelectProduct
                            key={index}
                            products={products}
                            index={index}
                            productList={attributes.productList || []}
                            variable={productsData[index]?.type === 'variable'}
                            setAttributes={setAttributes}
                            api={api}
                            removeProduct={removeProduct}
                        />
                    ) : (
                        <ProductCard
                            key={index}
                            product={productsData[index]}
                        />
                    ))}
                    <Button
                        variant="secondary"
                        icon='plus'
                        style={{ width: '100%', marginTop: '10px' }}
                        onClick={() => {
                            const updatedList = attributes.productList ? [...attributes.productList, { id: 0 }] : [{ id: 0 }];
                            setAttributes({ productList: updatedList })
                        }}
                    />
                </>
            )}
            <Sidebar>
                <ToggleControl
                    label="With Product"
                    checked={attributes.withProduct}
                    onChange={(value) => setAttributes({ withProduct: value })}
                />
                {attributes.withProduct && (
                    <>
                        {productsData?.map((el, index) => (
                            <SelectProduct
                                key={index}
                                products={products}
                                index={index}
                                productList={attributes.productList || []}
                                variable={el.type === 'variable'}
                                setAttributes={setAttributes}
                                api={api}
                                removeProduct={removeProduct}
                            />
                        ))}
                    </>
                )}
            </Sidebar>
        </div>
    );
};

export default Edit;
