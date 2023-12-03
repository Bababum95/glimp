import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

export const TogglePageType = ({ attributes, setAttributes }) => {
    return (
        <InspectorControls>
            <PanelBody title="Settings">
                <ToggleGroupControl
                    label="Select Page Type"
                    value={attributes.type}
                    onChange={(type) => setAttributes({ type })}
                >
                    <ToggleGroupControlOption
                        value="single"
                        label="Product"
                    />
                    <ToggleGroupControlOption
                        value="archive"
                        label="Category"
                    />
                </ToggleGroupControl>
            </PanelBody>
        </InspectorControls>
    )
}
