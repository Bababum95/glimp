import { useBlockProps } from '@wordpress/block-editor';

export function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<h2 className="wp-block-glimp-overview__title">Zusammenfassung über HQD Vapes</h2>
			<p className="wp-block-glimp-overview__text">
				Entdecke die farbenfrohen und geschmackvollen HQD 600 Vapes bei glimp, die in einer Vielzahl von Vape Sorten erhältlich sind. Mit einer beeindruckenden Auswahl an Geschmäckern und Nikotinstärken, von nikotinfrei bis hin zu intensiven Aromen, bieten die HQD Vapes für jeden Geschmack etwas. Die handlichen und leicht bedienbaren HQD Vape 600 Modelle sind die perfekten Weggefährten für unterwegs und bieten bis zu 600 Züge. Die HQD Vapes heben sich als weniger schädliche Alternative zu Tabakzigaretten hervor, da sie keine Verbrennungsprodukte freisetzen. Technisch überzeugen sie durch ein hervorragendes Preis-Leistungs-Verhältnis, einfache Handhabung und integrierte Zugautomatik. In unserem Online-Shop kannst du HQD Vapes schon ab 6 € erwerben und von Mengenrabatten sowie Sonderaktionen profitieren. Die HQD Vapes, bekannt für ihr intensives Geschmacks- und Dampferlebnis, bieten eine sichere und genussvolle Erfahrung.
			</p>
		</div>
	);
}
