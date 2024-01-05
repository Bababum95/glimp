import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';


export const Edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();

    return (
        <div
            {...blockProps}
            style={{
				'--full-width': attributes.fullPage ? '100%' : 'fit-content',
				'--children-width': attributes.fullPage ? '100%' : '',
			}}
        >
            <InnerBlocks allowedBlocks={['core/image']} template={[['core/image']]} />
            <InspectorControls>
                <PanelBody title="Link Settings">
                    <TextControl
                        label="Path"
                        value={attributes.path}
                        onChange={(path) => setAttributes({ path })}
                    />
                    <ToggleControl
                        label="Full Width"
                        checked={attributes.fullPage}
                        onChange={(fullPage) =>
                            setAttributes({ fullPage })
                        }
                    />
                    <ToggleControl
                        label="Open in new tab"
                        checked={attributes.target}
                        onChange={(target) =>
                            setAttributes({ target })
                        }
                    />
                    <ToggleControl
                        label="nofollow"
                        checked={attributes.nofollow}
                        onChange={(nofollow) =>
                            setAttributes({ nofollow })
                        }
                    />
                </PanelBody>
            </InspectorControls>
        </div>
    );
};

export default Edit;
