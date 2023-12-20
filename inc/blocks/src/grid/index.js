import { registerBlockType } from '@wordpress/blocks';
import classnames from 'classnames';
import {
    useBlockProps,
    InnerBlocks,
    InspectorControls,
    HeightControl,
} from '@wordpress/block-editor';
import {
    PanelBody,
    __experimentalNumberControl as NumberControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const blockStyles = (data) => {
    return {
        '--gap-phone': `${data.gap.row.phone} ${data.gap.column.phone}`,   
        '--gap-desktop': `${data.gap.row.desktop} ${data.gap.column.desktop}`,
        '--template-columns-phone': `repeat(${data.count.phone}, 1fr)`,
        '--template-columns-desktop': `repeat(${data.count.desktop}, 1fr)`,
    }
}

registerBlockType(metadata, {
    edit: ({ attributes, setAttributes, isSelected }) => {
        const blockProps = useBlockProps();
        const { gap, count } = attributes;
        return (
            <div
                {...blockProps}
                style={{
                    ...blockProps.style,
                    ...blockStyles(attributes)
                }}
            >
                {isSelected && (
                    <div className='wp-block-glimp-grid__example'>
                        {Array.from({ length: count.desktop }).map((_, i) => (
                            <div key={i} className='wp-block-glimp-grid__example-item' />
                        ))}
                    </div>
                )}
                <InnerBlocks
                    className={classnames(
                        blockProps.className,
                        { 'is-selected': isSelected }
                    )}
                />
                <InspectorControls>
                    <PanelBody title="Item Settings" initialOpen={false}>
                        <NumberControl
                            label='Desktop Grid Count'
                            onChange={(value) => setAttributes({
                                count: { ...count, desktop: value }
                            })}
                            value={count.desktop}
                        />
                        <NumberControl
                            label='Mobile Grid Count'
                            onChange={(value) => setAttributes({
                                count: { ...count, phone: value }
                            })}
                            value={count.phone}
                        />
                    </PanelBody>
                </InspectorControls>
                <InspectorControls>
                    <PanelBody title="Gap Settings" initialOpen={false}>
                        <HeightControl
                            label='desktop row gap'
                            onChange={(value) => setAttributes({
                                gap: { ...gap, row: { ...gap.row, desktop: value } }
                            })}
                            value={gap.row.desktop}
                        />
                        <HeightControl
                            label='desktop column gap'
                            onChange={(value) => setAttributes({
                                gap: { ...gap, column: { ...gap.column, desktop: value } }
                            })}
                            value={gap.column.desktop}
                        />
                        <HeightControl
                            label='phone row gap'
                            onChange={(value) => setAttributes({
                                gap: { ...gap, row: { ...gap.row, phone: value } }
                            })}
                            value={gap.row.phone}
                        />
                        <HeightControl
                            label='phone column gap'
                            onChange={(value) => setAttributes({
                                gap: { ...gap, column: { ...gap.column, phone: value } }
                            })}
                            value={gap.column.phone}
                        />
                    </PanelBody>
                </InspectorControls>
            </div>
        );
    },
    save: () => {
        return (
            <div {...useBlockProps.save()}>
                <InnerBlocks.Content />
            </div>
        );
    }
});
