import { useBlockProps } from '@wordpress/block-editor';

export function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<h3 className="wp-block-glimp-discovery__title">Explore HQD Surv Flavors</h3>
			<p className="wp-block-glimp-discovery__text">
				This section invites you to explore the delightful variety of HQD Surv, available in 23 unique and captivating flavors. Each HQD Wave variant represents a culmination of passionate development, ensuring an exceptional vaping experience with every inhale. Discover flavors like HQD Wave (Surv) Watermelon with its juicy freshness, HQD Wave (Surv) Dragon Strawberry blending exotic dragon fruit with sweet strawberries, and more. Each flavor, from the cool touch of HQD Wave (Surv) Peach Ice to the rich taste of HQD Wave (Surv) Grapey, promises a unique and satisfying experience. Dive into the world of HQD Surv and find your favorite blend!
			</p>
		</div>
	);
}
