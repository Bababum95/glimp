import classnames from 'classnames';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { bellIcon } from '../assets/icons';
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
				<span className='wp-block-glimp-marquee__bell'>
					{bellIcon}
				</span>
				<div className="wp-block-glimp-marquee__text-wrapper">
					<RichText.Content
						tagName="p"
						className="wp-block-glimp-marquee__text"
						value={text}
					/>
					{showAnimation && (
						<RichText.Content
							tagName="p"
							className="wp-block-glimp-marquee__text"
							value={text}
						/>
					)}
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
						<p><strong>Größte Auswahl</strong> an Vapes</p>
						<p><strong>Faire Preise</strong> sind mehr als wettbewerbsfähig</p>
						<p><strong>Schneller Support</strong> via WhatsApp</p>
						<p><strong>Kostenlose Lieferung</strong> ab 39€ Bestellwert</p>
						<p><strong>Größte Auswahl</strong> an Vapes</p>
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
