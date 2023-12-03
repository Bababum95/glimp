import { useBlockProps } from '@wordpress/block-editor';

export function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<h2>Verschiedene HQD Vapes mit einzigartigen Geschmäckern</h2>
			<p>Bei glimp findest du zahlreiche HQD Vapes, von denen jede in ihren eigenen einzigartigen Vape Sorten erhältlich ist, wobei die begehrtesten Sorten bei verschiedenen HQD Vapes zu finden sind. Somit wird sichergestellt, dass jeder HQD Fan sowie Dampfensteiger in unserem Sortiment etwas Passendes für sich findet.</p>
			<p>Die Auswahl an HQD Vape Sorten sieht so aus:</p>
			<table>
				<thead>
					<tr>
						<th>HQD Vape</th>
						<th>Sortenanzahl</th>
						<th>Die beste HQD Sorte</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>HQD Surv(Wave)</td>
						<td>23</td>
						<td>HQD Black Ice, HQD Shoria</td>
					</tr>
					<tr>
						<td>HQD ohne Nikotin Hoova</td>
						<td>8</td>
						<td>HQD Blackberry</td>
					</tr>
					<tr>
						<td>HQD Cuvie</td>
						<td>23</td>
						<td>HQD Blueberry</td>
					</tr>
				</tbody>
			</table>
			<p>&nbsp;</p>
			<p>Manche HQD Sorten sind beliebter als andere, alle bestechen jedoch durch ihre hohe Qualität und eine besondere Geschmacksintensität, die sie von anderen Einweg Vapes hervorhebt. Die HQD Surv besticht dabei nicht nur mit ihren intensiven und vielfältigen Geschmäckern, sondern auch mit einer beeindruckenden Puffanzahl von bis zu 600 Zügen.</p>
		</div>
	);
}
