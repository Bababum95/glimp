import { InspectorControls, HeightControl } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

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
            <PanelBody title="Spacing">
                <HeightControl
                    label='gap'
                    onChange={(value) => setAttributes({ gap: value })}
                    value={attributes.gap}
                />
            </PanelBody>
        </InspectorControls>
    )
}