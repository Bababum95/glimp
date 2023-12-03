<?php

global $product;
$variations = null;
$variations_name = null;
$variable = $product->is_type('variable');
$current_user = wp_get_current_user();

if ( empty( $product ) || ! $product->is_visible() ) {
    return;
}

$image = $product->get_image(
    'woocommerce_thumbnail',
    array(
        'alt'         => $product->get_title(),
        'data-testid' => 'product-image',
    )
);

if ($variable) {
    foreach ($product->get_attributes() as $attribute) {
        if (strpos($attribute->get_name(), 'pa_') === 0 && strpos($attribute->get_name(), '-sorten') !== false) {
            $variations_name = format_attribute_name($attribute->get_name());
            $attribute_value = $product->get_attribute($attribute->get_name());
            $variations = explode(', ', $attribute_value);
        }
    }
}

function format_attribute_name($name) {
    $name = str_replace('pa_', '', $name);
    $name = str_replace('-', ' ', $name);
    $name = ucwords($name);

    return $name;
}

?>

<div class="wp-block-glimp-comments__popup">
    <div class="wp-block-glimp-comments__popup-container">
        <button class="wp-block-glimp-comments__popup-close open"></button>
        <div class="wp-block-glimp-comments__popup-container-scroll">
        <p class="wp-block-glimp-comments__popup-title">
            Meine Bewertung
        </p>
        <p class="wp-block-glimp-comments__popup-description">
            Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind mit
            <span>*</span>
            markiert
        </p>
        <form
            data-product="<?php echo $product->get_id(); ?>"
            class="wp-block-glimp-comments__popup-form"
        >
            <div class="wp-block-glimp-comments__popup-card">
                <?php if ( ! empty( $image ) ) : ?>
                <div class="wp-block-glimp-comments__popup-card-image">
                    <?php echo $image; ?>
                </div>
                <?php endif; ?>
                <div class="wp-block-glimp-comments__popup-card-info">
                    <?php if ( ! empty( $variations ) ) : ?>
                        <div class="wp-block-glimp-comments__popup-card-select">
                            <label class="wp-block-glimp-comments__popup-card-select-label">
                                <?php echo $variations_name; ?>
                            </label>
                            <select
                                class="wp-block-glimp-comments__popup-card-select-input"
                                name="device"
                            >
                                <option value="">
                                    Wähle eine Option
                                </option>
                                <?php foreach ($variations as $key => $value) : ?>
                                    <option>
                                        <?php echo $value; ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    <?php else : ?>
                        <p class="wp-block-glimp-comments__popup-card-title">
                            <?php the_title(); ?>
                        </p>
                    <?php endif; ?>
                    <span class="wp-block-glimp-comments__popup-card-price">
                        <?php echo $product->get_price_html(); ?>
                    </span>
                </div>
            </div>
            <?php
            if (is_user_logged_in()) :
                echo '<input name="author" type="hidden" value="' . $current_user->user_login . '">';
                echo '<input name="email" type="hidden" value="' . $current_user->user_email . '">';
            else : ?>
            <div class="wp-block-glimp-comments__popup-inputs-wrapper">
                <div class="wp-block-glimp-comments__popup-input-container">
                    <input
                        class="wp-block-glimp-comments__popup-input"
                        type="text"
                        placeholder
                        name="author"
                        required
                    />
                    <label class="wp-block-glimp-comments__popup-label">
                        Vorname *
                    </label>
                </div>
                <div class="wp-block-glimp-comments__popup-input-container">
                    <input
                        class="wp-block-glimp-comments__popup-input"
                        type="text"
                        placeholder
                        name="email"
                    />
                    <label class="wp-block-glimp-comments__popup-label">
                        Email 
                    </label>
                </div>
            </div>
            <label class="wp-block-glimp-comments__popup-checkbox">
                <input
                    class="wp-block-glimp-comments__popup-checkbox-input"
                    type="checkbox"
                    name="save"
                    value="yes"
                />
                <span class="wp-block-glimp-comments__popup-checkbox-checkmark"></span>
                <p class="wp-block-glimp-comments__popup-checkbox-label">
                    Meinen Namen, meine E-Mail-Adresse und meine Website in diesem Browser für die nächste Kommentierung speichern.
                </p>
            </label>
            <?php endif; ?>
            <div class="wp-block-glimp-comments__popup-stars">
                <p class="wp-block-glimp-comments__popup-stars-title">
                    Deine Bewertung
                </p>
                <div class="wp-block-glimp-comments__popup-stars-container">
                    <?php
                    for ($i = 1; $i <= 5; $i++) {
                        echo '<span class="wp-block-glimp-comments__popup-stars-star" data-value="' . $i . '">★</span>';
                    }
                    ?>
                </div>
            </div>
            <p class="wp-block-glimp-comments__popup-textarea-title">
                Erzählen Sie mir mehr darüber
            </p>
            <textarea
                class="wp-block-glimp-comments__popup-textarea"
                placeholder="Deine Bewertung *"
                name="comment"
                required
            ></textarea>
            <button
                class="wp-block-glimp-comments__popup-button"
                type="submit"
            >
                Senden
            </button>
        </form>
        </div>
    </div>
</div>