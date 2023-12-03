import classnames from 'classnames';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from "@wordpress/element";
import './editor.scss';

const childBlocks = [ 'glimp/tab' ]

export const Edit = ({ clientId, attributes, setAttributes }) => {
    const blockProps = useBlockProps();

    const tabs = useSelect((select) => {
        const { getBlocks } = select('core/block-editor');
        return getBlocks( clientId );
    }, [clientId]);

    useEffect(() => {
        if ( !tabs[0] || attributes.activeTab !== '' ) return
        setAttributes( { activeTab: tabs[0].clientId } )
    }, [tabs[0], attributes.activeTab])
    

    return (
            <div { ...blockProps }>
                <div className="wp-block-glimp-tabs__header">
                    {tabs.length && tabs.map((tab) => (
                        <div
                            key={tab.clientId}
                            className={classnames('wp-block-glimp-tabs__tab-title', { 'active': tab.clientId === attributes.activeTab })}
                            onClick={() => setAttributes( { activeTab: tab.clientId } )}
                        >
                            {tab.attributes.title || 'Tab'}
                        </div>
                    ))}
                </div>
                <InnerBlocks
                    allowedBlocks={ childBlocks }
                    template={ [ [ ...childBlocks, {} ] ] }
                />
            </div>
    );
};

export default Edit;
