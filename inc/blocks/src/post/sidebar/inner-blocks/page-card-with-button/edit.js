import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody,
    TextControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { SelectPages } from '../../../../assets/components';
import { PageCard } from '../../../../assets/components/PageCard';
import { logoImage } from '../../../../assets/images';
import './editor.scss';

export const Edit = ({ attributes, setAttributes }) => {
    const { id, view, buttonText } = attributes;
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
        <div {...blockProps} >
            {currentPage ? (
                <PageCard
                    image={view === 'logo' ? logoImage : currentPage.image}
                    title={currentPage.title}
                    likes={currentPage.currentPage}
                    comments={currentPage.comments}
                    date={currentPage.date}
                    logo={view === 'logo'}
                    buttonText={buttonText}
                    className='wp-block-glimp-page-card-with-button'
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
                    <ToggleGroupControl
                        label="View Mode"
                        value={attributes.view}
                        onChange={(view) => setAttributes({ view })}
                    >
                        <ToggleGroupControlOption
                            value="thumbnail"
                            label="Thumbnail"
                        />
                        <ToggleGroupControlOption
                            value="logo"
                            label="Logo"
                        />
                    </ToggleGroupControl>
                    <TextControl
                        label="Button Text"
                        value={buttonText}
                        onChange={(buttonText) => setAttributes({ buttonText })}
                    />
                </PanelBody>
            </InspectorControls>
        </div>
    );
};
