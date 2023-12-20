import {
    starterPack,
    zeugnisCoins,
    expressLieferservice,
    erhalte,
    bonuspunkte,
    stelleDein
} from '../../assets/images';

const Block = ({ blockProps }) => {
    return (
        <div {...blockProps}>
            <p className="wp-block-glimp-anderes__title">Anderes</p>
            <p className="wp-block-glimp-anderes__text">
                Bei glimp erwarten Dich ebenfalls andere Angebote, Services und Aktionen.
            </p>
            <div className="wp-block-glimp-anderes__images">
                <img src={starterPack} alt="Starter Pack" />
                <img src={zeugnisCoins} alt="Zeugnis Coins" />
                <img src={expressLieferservice} alt="Express Lieferservice" />
                <img src={erhalte} alt="Erhalte bis zu 10%" />
                <img src={bonuspunkte} alt="Bonuspunkte für die erste Bestellung!" />
                <img src={stelleDein} alt="Stelle Dein eigenes set aus Elf Bar zasummen" />
            </div>
        </div>
    )
}

export default Block