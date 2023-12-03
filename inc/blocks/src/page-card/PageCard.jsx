import { placeholderImage } from '../assets/images';

export const PageCard = ({ image, title, date, likes, comments }) => {
    return (
        <>
            <img
                className="wp-block-glimp-page-card__image"
                src={image ?? placeholderImage}
                alt={title}
            />
            <div className='wp-block-glimp-page-card__info'>
                <h3 className="wp-block-glimp-page-card__title">
                    {title}
                </h3>
                <div className="wp-block-glimp-page-card__bottom">
                    <div className="wp-block-glimp-page-card__buttons">
                        <button className='wp-block-glimp-page-card__likes'>
                            {likes}
                        </button>
                        <button className='wp-block-glimp-page-card__comments'>
                            {comments}
                        </button>
                    </div>
                    <span className="wp-block-glimp-page-card__date">
                        {date}
                    </span>
                </div>
            </div>
        </>
    )
}
