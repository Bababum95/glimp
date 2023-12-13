import { ReferralPhone } from '../assets/images'

const Referral = () => {
    return (
        <>
            <p className='wp-block-glimp-referral__title'>
                Lade Deine Freunde mit einem Klick ein und holt euch Boni zusammen
            </p>
            <div className="wp-block-glimp-referral__main">
                <img
                    className='wp-block-glimp-referral__image'
                    src={ReferralPhone}
                    alt="Referral Phone"
                />
                <div className="wp-block-glimp-referral__items">
                    <div className="wp-block-glimp-referral__item">
                        <p className="wp-block-glimp-referral__item-title">
                            Du bekommst
                        </p>
                        <span className="wp-block-glimp-referral__item-button">
                            5 €
                        </span>
                        <p className="wp-block-glimp-referral__item-text">
                            Gutscheinrabatt auf Deine nächste Bestellung ab 15 €
                        </p>
                    </div>
                    <div className="wp-block-glimp-referral__item">
                        <p className="wp-block-glimp-referral__item-title">
                            Ihr Freund erhält
                        </p>
                        <span className="wp-block-glimp-referral__item-button">
                            3 €
                        </span>
                        <span
                            className="
                                wp-block-glimp-referral__item-button
                                wp-block-glimp-referral__item-button_primary
                            "
                        >
                            +100 coins
                        </span>
                        <p className="wp-block-glimp-referral__item-text">
                            nach der ersten Bestellung auf den ersten Einkauf
                        </p>
                    </div>
                </div>
            </div>
            <ol className="wp-block-glimp-referral__list">
                <li className="wp-block-glimp-referral__list-item">
                    <span className="wp-block-glimp-referral__list-item-number">
                        1
                    </span>
                    <p className="wp-block-glimp-referral__list-item-title">
                        Melde Dich an
                    </p>
                    <p className="wp-block-glimp-referral__list-item-text">
                        Logge Dich bei glimp einfach ein oder erstelle ein Konto
                    </p>
                </li>
                <li className="wp-block-glimp-referral__list-item">
                    <span className="wp-block-glimp-referral__list-item-number">
                        2
                    </span>
                    <p className="wp-block-glimp-referral__list-item-title">
                        Sende eine Einladung
                    </p>
                    <p className="wp-block-glimp-referral__list-item-text">
                        Gib die E-Mail Adresse deines Freundes an und sende eine Einladung. Auf diese E-Mail kommt eine Nachricht mit einem Aktionscode
                    </p>
                </li>
                <li className="wp-block-glimp-referral__list-item">
                    <span className="wp-block-glimp-referral__list-item-number">
                        3
                    </span>
                    <p className="wp-block-glimp-referral__list-item-title">
                        Genießt Boni zusammen
                    </p>
                    <p className="wp-block-glimp-referral__list-item-text">
                        Nachdem Dein Freund eine Bestellung mit dem Aktionscode getätigt hat, erhältst Du und Dein Freund einen Bonus.
                    </p>
                </li>
            </ol>
        </>
    )
}

export default Referral