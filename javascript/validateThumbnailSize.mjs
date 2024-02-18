import { SETTINGS } from "./settings.mjs";

function validateThumbnailSize() {
    const { THUMBNAIL_SIZE } = SETTINGS;

    let thumbnailWidth = parseFloat(THUMBNAIL_SIZE?.width);
    let thumbnailHeight = parseFloat(THUMBNAIL_SIZE?.height);

     const itemWidthStyle = getComputedStyle(document.documentElement).getPropertyValue('--item-width');
    const itemWidth = isNaN(parseFloat(itemWidthStyle)) ? null : parseFloat(itemWidthStyle);

    if (!isNaN(itemWidth)) {
        if (!isNaN(thumbnailWidth) && thumbnailWidth > itemWidth) {
            thumbnailWidth = itemWidth;
        }

        if (!isNaN(thumbnailHeight) && thumbnailHeight > itemWidth) {
            thumbnailHeight = itemWidth;
        }
    }

    return { width: thumbnailWidth-20, height: thumbnailHeight-20 };
}

export { validateThumbnailSize };