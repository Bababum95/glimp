import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import metadata from './block.json';
import './style.scss';

registerBlockType(metadata, {
    edit: ({ attributes, setAttributes }) => {
        return (
            <div {...useBlockProps()}>
                <span className="wp-block-glimp-breadcrumbs__item">glimp.de / </span>
                {attributes.has && (
                    <RichText
                        tagName="span"
                        value={attributes.text}
                        onChange={(value) =>
                            setAttributes({ text: value })
                        }
                        placeholder="breadcrumb"
                        className="wp-block-glimp-breadcrumbs__item"
                    />
                )}
                <span className="wp-block-glimp-breadcrumbs__item">parent page / </span>
                <span className="wp-block-glimp-breadcrumbs__item">current page</span>
                <InspectorControls>
                    <PanelBody title="Settings">
                        <ToggleControl
                            label="add breadcrumb"
                            checked={attributes.has}
                            onChange={(value) =>
                                setAttributes({ has: value })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
            </div>
        )
    },
    save: ({attributes}) => {
        if(!attributes.has) {
            return null
        }
        return (
            <RichText.Content
                className="wp-block-glimp-breadcrumbs__item"
                tagName="li"
                value={attributes.text}
            />
        )
    }
});
