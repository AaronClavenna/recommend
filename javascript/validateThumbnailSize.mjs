import { SETTINGS } from "./settings.mjs";

function validateThumbnailSize() {
    const { THUMBNAIL_SIZE } = SETTINGS;
    const itemWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--item-width')) -12;

    let thumbnailWidth = parseFloat(THUMBNAIL_SIZE?.width) || itemWidth;
    let thumbnailHeight = parseFloat(THUMBNAIL_SIZE?.height) || itemWidth;


    if (isNaN(thumbnailWidth) || thumbnailWidth > itemWidth) {
        thumbnailWidth = itemWidth;
    }

    if (isNaN(thumbnailHeight) || thumbnailHeight > itemWidth) {
        thumbnailHeight = itemWidth;
    }


    return { thumbnailWidth, thumbnailHeight };

}

export { validateThumbnailSize };