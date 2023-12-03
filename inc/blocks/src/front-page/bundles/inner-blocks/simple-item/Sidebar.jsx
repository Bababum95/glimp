import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export const Sidebar = ( { value, setAttributes } ) => {
    return (
        <InspectorControls>
            <PanelBody title="Link Settings">
                <TextControl
                    label="Path"
                    value={value}
                    onChange={(path) => setAttributes({ path })}
                />
            </PanelBody>
        </InspectorControls>
    )
}