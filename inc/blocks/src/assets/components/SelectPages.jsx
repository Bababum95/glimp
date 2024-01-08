import { Spinner, SelectControl } from '@wordpress/components';


export const SelectPages = ({ value, setAttributes, pages }) => {

    const options = pages?.map((page) => {
        return { label: page.title.rendered, value: page.id }
    })

    if (!options) {
        return <Spinner />
    }

    return (
        <SelectControl
            label="Page"
            options={[{
                disabled: true,
                label: 'Select a page',
                value: 0
            }, ...options]}
            onChange={(value) => setAttributes({ id: Number(value) })}
            value={value}
        />
    )
}
