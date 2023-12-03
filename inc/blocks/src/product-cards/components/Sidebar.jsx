import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

export const Sidebar = ({ children }) => {

    return (
        <InspectorControls>
            <PanelBody title="Product Settings">
                {children}
            </PanelBody>
        </InspectorControls>
    )
}
