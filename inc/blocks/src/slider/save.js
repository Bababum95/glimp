import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './style.scss';

export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div
			{ ...blockProps }
            style={{
                '--slider-gap': attributes.gap,
                '--width-teamplate-desctop': attributes.desctop,
                '--width-teamplate-phone': attributes.phone
            }}
		>
			<div className='wp-block-glimp-slider__wrapper'>
				<InnerBlocks.Content />
			</div>
			<button className='wp-block-glimp-slider__button left hide' />
			<button className='wp-block-glimp-slider__button right' />
		</div>
	);
};

export default Save;
