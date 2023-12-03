import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Spinner, SelectControl, ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { PageCard } from './PageCard';
import './editor.scss';

const Select = ({ value, setAttributes, options }) => {
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

export const Edit = ({ attributes, setAttributes }) => {
    const { id, direction } = attributes;
    const [currentPage, setCurrentPage] = useState(null);
    const blockProps = useBlockProps();

    const pages = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'page', {
            'per_page': -1,
            '_embed': true,
        });
    }, []);

    const options = pages?.map((page) => {
        return { label: page.title.rendered, value: page.id }
    })

    useEffect(() => {
        if (!id || !pages) return;
        const selectedPage = pages.find(page => page.id === id);
        if (selectedPage) {
            setCurrentPage({
                comments: selectedPage._embedded.replies[0].length,
                likes: 0,
                date: selectedPage.modified,
                image: selectedPage._embedded['wp:featuredmedia'][0].source_url,
                title: selectedPage.title.rendered,
                link: selectedPage.link
            });
        }
    }, [id, pages])

    return (
        <div
            {...blockProps}
            style={{
                '--flex-direction': direction,
                '--image-width': direction === 'column' ? '100%' : '50%',
            }}
        >
            {options ? (
                <>
                    {currentPage ? (
                        <PageCard
                            image={currentPage.image}
                            title={currentPage.title}
                            likes={currentPage.currentPage}
                            comments={currentPage.comments}
                            date={currentPage.date}
                        />
                    ) : (
                        <Select
                            value={id}
                            setAttributes={setAttributes}
                            options={options}
                        />
                    )}
                    <InspectorControls>
                        <PanelBody title="Card Settings">
                            <Select
                                value={id}
                                setAttributes={setAttributes}
                                options={options}
                            />
                            <p>Direction</p>
                            <ToggleControl
                                label="Row"
                                checked={direction === 'row'}
                                onChange={() => setAttributes({ direction: 'row' })}
                            />
                            <ToggleControl
                                label="Column"
                                checked={direction === 'column'}
                                onChange={() => setAttributes({ direction: 'column' })}
                            />
                        </PanelBody>
                    </InspectorControls>
                </>
            ) : (
                <Spinner />
            )}
        </div>
    );
};
