import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './style.scss';

const blockWrapperStyles = {
	container: {
		width: '100%',
		'--padding-container': '0 0 20px',
		'--padding-container-phone': '0 0 20px',
	},
	'full-screen': {
		width: '100vw',
		'--padding-container': '0 calc(50vw - 645px) 20px',
		'--padding-container-phone': '0 20px 20px',
	}
}

export const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div
			{...blockProps}
			style={{
				...blockWrapperStyles[attributes.view],
				'--slider-gap': attributes.gap,
				'--width-teamplate-desctop': attributes.desctop,
				'--width-teamplate-phone': attributes.phone,
			}}
		>
			<div className='wp-block-glimp-slider__wrapper'>
				<InnerBlocks.Content />
			</div>
			<button className='wp-block-glimp-slider__button left hide' aria-label="Scroll left" />
			<button className='wp-block-glimp-slider__button right' aria-label="Scroll right" />
		</div>
	);
};

export default Save;
