import { InspectorControls, HeightControl } from '@wordpress/block-editor';
import {
    PanelBody,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

export const SliderSidbar = ({ attributes, setAttributes }) => {
    return (
        <InspectorControls>
            <PanelBody title="Children Settings">
                <HeightControl
                    label='desctop width'
                    onChange={(value) => setAttributes({ desctop: value })}
                    value={attributes.desctop}
                />
                <HeightControl
                    label='phone width'
                    onChange={(value) => setAttributes({ phone: value })}
                    value={attributes.phone}
                />
            </PanelBody>
            <PanelBody title="View Settings">
                <HeightControl
                    label='gap'
                    onChange={(value) => setAttributes({ gap: value })}
                    value={attributes.gap}
                />
                <ToggleGroupControl
                    label="View Mode"
                    value={attributes.view}
                    onChange={(view) => setAttributes({ view })}
                >
                    <ToggleGroupControlOption
                        value="container"
                        label="Container"
                    />
                    <ToggleGroupControlOption
                        value="full-screen"
                        label="Full Screen"
                    />
                </ToggleGroupControl>
            </PanelBody>
        </InspectorControls>
    )
}