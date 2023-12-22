import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Star } from './Star';
import { formatDate } from '../assets/utils';

export function Save({ attributes }) {
    const { rating, name, text, quelle, date } = attributes;
    return (
        <article {...useBlockProps.save()}>
            <div className='wp-block-glimp-review__rating' data-rating={rating}>
                {Array(5).fill().map((_, index) => (
                    <Star key={index} active={index < rating} />
                ))}
                <span
                    className="wp-block-glimp-review__comment-approved"
                    data-type="open-verified-popup"
                >
                    Verifizierte
                </span>
            </div>
            <div className='wp-block-glimp-review__content'>
                <RichText.Content
                    value={name}
                    tagName="p"
                    className='wp-block-glimp-review__name'
                />
                <RichText.Content
                    value={text}
                    tagName="p"
                    className='wp-block-glimp-review__text'
                />
            </div>
            <div className='wp-block-glimp-review__meta'>
                {attributes.date && (
                    <span className='wp-block-glimp-review__date'>
                        {formatDate(date)}
                    </span>
                )}
                {quelle && (
                    <span className='wp-block-glimp-review__quelle'>
                        Quelle:
                        <RichText.Content
                            value={quelle}
                            tagName="p"
                            className='wp-block-glimp-review__quelle-content'
                        />
                    </span>
                )}
            </div>
        </article>
    );
}
