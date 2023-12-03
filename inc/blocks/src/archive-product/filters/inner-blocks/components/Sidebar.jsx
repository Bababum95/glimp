import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

export const Sidebar = ({ attributes, setAttributes, children }) => {
    return (
        <InspectorControls>
            <PanelBody title="Filter Settings">
                {children}
                <ToggleGroupControl
                    label="Select Display"
                    value={attributes.type}
                    onChange={(type) => setAttributes({ type })}
                >
                    <ToggleGroupControlOption
                        value="dropdown"
                        label="Dropdown"
                    />
                    <ToggleGroupControlOption
                        value="buttons"
                        label="Buttons"
                    />
                </ToggleGroupControl>
                {attributes.type === 'dropdown' && (
                    <TextControl
                        label="Placeholder"
                        value={attributes.placeholder}
                        onChange={(placeholder) => setAttributes({ placeholder })}
                    />
                )}
            </PanelBody>
        </InspectorControls>
    )
}