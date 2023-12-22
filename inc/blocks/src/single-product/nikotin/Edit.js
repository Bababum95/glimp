import { useBlockProps } from '@wordpress/block-editor';
import { eighteenIcon, dangerIcon } from '../../assets/icons'

export const Edit = () => {
    return (
        <div {...useBlockProps()}>
            <div className='wp-block-glimp-nikotin__content'>
                <img src={dangerIcon} />
                <p className='wp-block-glimp-nikotin__text'>
                    Einordung nach CLP-Verordnung
                    <strong>Gefahr! Enthält Nikotin</strong>
                </p>
            </div>
            <span className='wp-block-glimp-nikotin__eighteen'>
                <img src={eighteenIcon} />
            </span>
        </div>
    )
}