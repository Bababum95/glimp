import { placeholderImage } from '../images';

export const PageCard = ({
    image,
    title,
    date,
    likes,
    comments,
    buttonText,
    logo,
    className='wp-block-glimp-page-card'
}) => {
    return (
        <>
            <img
                className={`${className}__image${logo ? ' logo' : ''}`}
                src={image ?? placeholderImage}
                alt={title}
            />
            <div className={`${className}__info`}>
                <h3 className={`${className}__title`}>
                    {title}
                </h3>
                {buttonText ? (
                    <button className={`${className}__button`}>
                        {buttonText}
                    </button>
                ) : (
                    <div className={`${className}__bottom`}>
                        <div className={`${className}__buttons`}>
                            <button className={`${className}__likes`}>
                                {likes}
                            </button>
                            <button className={`${className}__comments`}>
                                {comments}
                            </button>
                        </div>
                        <span className={`${className}__date`}>
                            {date}
                        </span>
                    </div>
                )}
            </div>
        </>
    )
}
