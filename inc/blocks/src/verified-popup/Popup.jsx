const Popup = ({ blockProps }) => {
    return (
        <div {...blockProps}>
            <div className="wp-block-glimp-verified-popup__container">
                <button className="wp-block-glimp-verified-popup__close open" />
                <p className="wp-block-glimp-verified-popup__title">
                    Unser Verfahren zur Überprüfung von Bewertungen
                </p>
                <p className="wp-block-glimp-verified-popup__description">
                    Bei glimp nehmen wir es sehr ernst, die Gültigkeit und Relevanz jeder Bewertung auf unserer Website zu gewährleisten. Jede Bewertung, die auf unserer Plattform veröffentlicht wird, wird manuell überprüft. Zudem stehen unsere Bewertungen allen Nutzern offen, unabhängig von ihrer Kaufhistorie. Wenn eine Bewertung als relevant und aufschlussreich eingestuft wird, als ‘verifizierte Bewertung' gekennzeichnet. Alle Bewertungen müssen aber unsere Relevanzprüfung bestehen, erst dann werden sie genehmigt und anschließend als “Verifiziert Bewertung” gekennzeichnet.
                </p>
            </div>
        </div>
    )
}

export default Popup