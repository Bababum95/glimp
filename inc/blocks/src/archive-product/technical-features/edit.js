import { useBlockProps } from '@wordpress/block-editor';

export function Edit() {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<h3 className="wp-block-glimp-discovery__title">HQD Vapes kaufen</h3>
			<p className="wp-block-glimp-discovery__text">
				Die Elf Bar Watermelon Einweg-E-Zigarette bietet einen
				erfrischenden Geschmack, der durch die Süße und das belebende
				Aroma der Wassermelone gekennzeichnet ist. Die
				Einweg-E-Zigarette von Elf Bar ist der ideale Begleiter, wenn
				Sie unterwegs sind oder sich einfach zurücklehnen und den
				Geschmack genießen möchten, ohne sich Gedanken über das
				Nachfüllen machen zu müssen. Ein wirklich großartiger Allrounder
				für alle Vape-Enthusiasten.
			</p>
		</div>
	);
}
