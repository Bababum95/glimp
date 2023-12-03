import { useBlockProps } from '@wordpress/block-editor';

export function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<h3 className="wp-block-glimp-discovery__title">HQD Vapes kaufen</h3>
			<p className="wp-block-glimp-discovery__text">
				This section is designed to provide a brief introduction or summary of your content. Use this space to succinctly convey the main idea, purpose, or key features of what you're presenting. It's the first thing your readers will see, so aim to be clear, concise, and engaging. Your introduction should inspire further exploration of the content.
			</p>
		</div>
	);
}
