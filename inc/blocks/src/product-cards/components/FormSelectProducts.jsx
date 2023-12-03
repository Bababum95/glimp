import { ToggleControl, RangeControl, SelectControl } from '@wordpress/components';

export const FormSelectProducts = ({ options, attributes, setAttributes }) => {
    return (
        <>
            <SelectControl
                label="Category"
                options={[
                    {
                        label: 'Select a category',
                        value: 0
                    },
                    ...options.categories
                ]}
                value={attributes.category}
                onChange={(value) => setAttributes({ category: Number(value) })}
            />
            <SelectControl
                label="Tag"
                options={[
                    {
                        label: 'Select a tag',
                        value: 0
                    },
                    ...options.tags
                ]}
                value={attributes.tag}
                onChange={(value) => setAttributes({ tag: Number(value) })}
            />
            <p>Number of cards</p>
            <ToggleControl
                label="All cards"
                checked={attributes.count === -1}
                onChange={(value) => setAttributes({ count: value ? -1 : 10 })}
            />
            <RangeControl
                value={attributes.count === -1 ? 0 : attributes.count}
                disabled={attributes.count === -1}
                onChange={(value) => setAttributes({ count: value })}
                min={0}
                max={25}
                step={1}
                marks={true}
            />
            <p>Sort</p>
            <ToggleControl
                label="Sort by date"
                checked={attributes.sort === 'date'}
                onChange={() => setAttributes({ sort: 'date' })}
            />
            <ToggleControl
                label="Sort by title"
                checked={attributes.sort === 'title'}
                onChange={() => setAttributes({ sort: 'title' })}
            />
            <ToggleControl
                label="Sort by popularity"
                checked={attributes.sort === 'popularity'}
                onChange={() => setAttributes({ sort: 'popularity' })}
            />
            <ToggleControl
                label="Sort by rating"
                checked={attributes.sort === 'rating'}
                onChange={() => setAttributes({ sort: 'rating' })}
            />
            <ToggleControl
                label="Sort by price"
                checked={attributes.sort === 'price'}
                onChange={() => setAttributes({ sort: 'price' })}
            />
            <ToggleControl
                label="Random"
                checked={attributes.sort === 'rand'}
                onChange={() => setAttributes({ sort: 'rand' })}
            />
        </>
    )
}