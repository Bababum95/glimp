import classnames from 'classnames';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { notificationBell } from '../assets/icons';
import { CircularClose } from '../assets/icons-components';

export function Save({ attributes }) {
	const { text, canClose, delay, showAnimation, submarquee } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div
			className='wp-block-glimp-marquee'
			style={{
				'--marquee-animation': showAnimation
					? `marquee ${delay}s linear infinite 0.2s`
					: 'none',
			}}
		>
			<div
				style={blockProps.style}
				className={classnames(
					'wp-block-glimp-marquee__main',
					blockProps.className
				)}
			>
				<img src={notificationBell} />
				<div className="wp-block-glimp-marquee__text-wrapper">
					<RichText.Content
						tagName="p"
						className="wp-block-glimp-marquee__text"
						value={text}
					/>
				</div>

				{canClose && (
					<button className="wp-block-glimp-marquee__close">
						<CircularClose color="#FFFFFF" />
					</button>
				)}
			</div>
			{submarquee && (
				<div className="wp-block-glimp-marquee__submarquee">
					Kostenlose Lieferung ab 39€ Bestellwert
					Schneller Support via WhatsApp
					Faire Preise  sind mehr als wettbewerbsfähig
					Größte Auswahl an eZigaretten und eine garantierte Verfügbarkeit
				</div>
			)}
		</div>
	);
}
