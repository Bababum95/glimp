<?php
$url = get_permalink();
$title = get_the_title();
$summary = get_the_excerpt();
$image_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
?>

<div <?php echo wp_kses_data(get_block_wrapper_attributes()) ?>>
    <button class="wp-block-glimp-share__button">
        <img
            src="<?php echo get_template_directory_uri() . '/assets/icons/Forward Arrow.png' ?>"
            alt="Teilen Sie"
        >
        <span>Teilen Sie</span>
    </button>
    <div class="wp-block-glimp-share__popup">
        <button class="wp-block-glimp-share__copy">
            <img
                src="<?php echo get_template_directory_uri() . '/assets/icons/Link.png' ?>"
                alt="Copy Link"
            >
            Copy Link
        </button>
        <a
            href="mailto:?subject=<?php echo $title ?>&body=<?php echo $summary ?>: <?php echo $url ?>"
            title="Email"
            target="_parent"
            class="wp-block-glimp-share__link"
        >
            <img
                src="<?php echo get_template_directory_uri() . '/assets/icons/Letter With Email Sign.png' ?>"
                alt="Email"
            >
            Email
        </a>
        <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode( $url ); ?>&title=<?php echo $title ?>&summary=<?php echo $summary ?>&source=<?php echo $url ?>"
            onclick="window.open(this.href, this.title, 'toolbar=0, status=0, width=548, height=325'); return false"
            title="LinkedIn"
            target="_parent"
            class="wp-block-glimp-share__link"
        >
            <img
                src="<?php echo get_template_directory_uri() . '/assets/icons/LinkedIn.png' ?>"
                alt="LinkedIn"
            >
            LinkedIn
        </a>
        <a
            href="http://www.facebook.com/sharer.php?s=100&p[url]=<?php echo urlencode( $url ); ?>&p[title]=<?php echo $title ?>&p[summary]=<?php echo $summary ?>&p[images][0]=<?php echo $image_url ?>"
            onclick="window.open(this.href, this.title, 'toolbar=0, status=0, width=548, height=325'); return false"
            title="Facebook"
            target="_parent"
            class="wp-block-glimp-share__link"
        >
            <img
                src="<?php echo get_template_directory_uri() . '/assets/icons/Facebook.png' ?>"
                alt="Facebook"
            >
            Facebook
        </a>
        <a
            href="https://twitter.com/share?url=<?php echo urlencode( $url ); ?>&text=<?php echo $title ?>&hashtags=теги"
            onclick="window.open(this.href, this.title, 'toolbar=0, status=0, width=548, height=325'); return false"
            title="twitter"
            target="_parent"
            class="wp-block-glimp-share__link"
        >
            <img
                src="<?php echo get_template_directory_uri() . '/assets/icons/TwitterX.png' ?>"
                alt="Twitter"
            >
            Twitter
        </a>
        <a
            href="https://reddit.com/submit?url=<?php echo urlencode( $url ); ?>&title=<?php echo $title ?>"
            onclick="window.open(this.href, this.title, 'toolbar=0, status=0, width=548, height=325'); return false"
            title="Reddit"
            target="_parent"
            class="wp-block-glimp-share__link"
        >
            <img
                src="<?php echo get_template_directory_uri() . '/assets/icons/Reddit.png' ?>"
                alt="Reddit"
            >
            Reddit
        </a>
    </div>
</div>

