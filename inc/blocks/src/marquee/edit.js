import classnames from 'classnames';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { CircularClose } from '../assets/icons-components';
import { notificationBell } from '../assets/icons';

export function Edit( { attributes, setAttributes } ) {
	const { text, canClose, delay, showAnimation, submarquee } = attributes;
	const blockProps = useBlockProps();

	return (
		<div
			{ ...blockProps }
			style={ {
				'--marquee-animation': showAnimation
					? `marquee ${ delay }s linear infinite 0.2s`
					: 'none',
			} }
		>
			<div
				style={blockProps.style}
				className={classnames(
					'wp-block-glimp-marquee__main',
					blockProps.className
				)}
			>
				<img src={ notificationBell } />
				<div className="wp-block-glimp-marquee__text-wrapper">
					<RichText
						value={ text }
						placeholder="text"
						tagName="p"
						className="wp-block-glimp-marquee__text"
						onChange={ ( value ) => setAttributes( { text: value } ) }
					/>
				</div>
				{ canClose && <CircularClose color="#FFFFFF" /> }
			</div>
			{submarquee && (
				<div className="wp-block-glimp-marquee__submarquee">

				</div>
			)}
			<InspectorControls>
				<PanelBody title="Marquee Settings">
					<ToggleControl
						label="Show Animation"
						checked={ showAnimation }
						onChange={ ( value ) =>
							setAttributes( { showAnimation: value } )
						}
					/>
					{ showAnimation && (
						<RangeControl
							label="Delay"
							value={ delay }
							onChange={ ( value ) =>
								setAttributes( { delay: value } )
							}
							min={ 0 }
							max={ 100 }
						/>
					) }
					<ToggleControl
						label="Can Close"
						checked={ canClose }
						onChange={ ( value ) =>
							setAttributes( { canClose: value } )
						}
					/>
					{canClose && (
						<ToggleControl
							label="Submarquee"
							checked={ submarquee }
							onChange={ ( value ) =>
								setAttributes( { submarquee: value } )
							}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
