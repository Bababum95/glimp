import { useBlockProps } from '@wordpress/block-editor';

const dataList = [
	{
		title: 'Züge:',
		text: 'bis zu 600',
		image: '💨'
	},
	{
		title: 'Akku:',
		text: '550 mAh',
		image: '🔋'
	},
	{
		title: 'Nikotin:',
		text: '20 mg/ml',
		image: '💪'
	},
	{
		title: 'Liquid:',
		text: '2 ml',
		image: '💧'
	}
]

const Item = ({ image, title, text }) => {
	return (
		<div className="wp-block-glimp-info-with-emoji__item">
			<span className="wp-block-glimp-info-with-emoji__emoji">
				{image}
			</span>
			<p className="wp-block-glimp-info-with-emoji__text">
				{title + ' '}
				<strong>
					{text}
				</strong>
			</p>
		</div>
	)
}
export const Edit = () => {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps } >
			{dataList.map((item, index) => <Item key={index} {...item} />)}
		</div>
	);
};

export default Edit;
