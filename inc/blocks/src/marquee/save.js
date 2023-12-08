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
					<div className="wp-block-glimp-marquee__submarquee-text">
						<p><strong>Kostenlose Lieferung</strong> ab 39€ Bestellwert</p>
						<p><strong>Schneller Support</strong> via WhatsApp</p>
						<p><strong>Faire Preise</strong> sind mehr als wettbewerbsfähig</p>
						<p><strong>Größte Auswahl an eZigaretten</strong> und eine garantierte Verfügbarkeit</p>
						<p><strong>Kostenlose Lieferung</strong> ab 39€ Bestellwert</p>
					</div>
					<div className="wp-block-glimp-marquee__submarquee-dots">
						<span />
						<span />
						<span />
						<span />
					</div>
				</div>
			)}
		</div>
	);
}
