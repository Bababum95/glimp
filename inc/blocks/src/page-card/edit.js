import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { SelectPages } from '../assets/components';
import { PageCard } from '../assets/components/PageCard';
import './editor.scss';

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


    useEffect(() => {
        if (!id || !pages) return;
        const selectedPage = pages.find(page => page.id === id);
        if (selectedPage) {
            setCurrentPage({
                comments: 0,
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
            {currentPage ? (
                <PageCard
                    image={currentPage.image}
                    title={currentPage.title}
                    likes={currentPage.currentPage}
                    comments={currentPage.comments}
                    date={currentPage.date}
                />
            ) : (
                <SelectPages
                    value={id}
                    setAttributes={setAttributes}
                    pages={pages}
                />
            )}
            <InspectorControls>
                <PanelBody title="Card Settings">
                    <SelectPages
                        value={id}
                        setAttributes={setAttributes}
                        pages={pages}
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
        </div>
    );
};
