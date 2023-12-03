import { useBlockProps } from '@wordpress/block-editor';
import { caruselImage } from '../../assets/images';

export const Edit = () => {
    return (
        <div {...useBlockProps()}>
            <h2>Video und Fotos von Glimp (800)</h2>
            <img src={caruselImage} />
        </div>
    )
}