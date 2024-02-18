import { SETTINGS } from "./settings.mjs";

function validateThumbnailSize() {
    const itemWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--item-width'));

    let thumbnailWidth = itemWidth || 100;
    let thumbnailHeight = itemWidth || 100;


    switch (SETTINGS.ORIENTATION) {
        case 'below':
            thumbnailHeight = 0.7*thumbnailWidth;
            break;
        case 'aside':
            thumbnailHeight = itemWidth / 3;
            thumbnailWidth = thumbnailHeight;
            break;
        default:
            //settings for a reactive mode here if needed. For now, it's just more 'below':
            thumbnailHeight = 0.8*thumbnailWidth;
            break;
    }


    return { thumbnailWidth, thumbnailHeight };

}

export { validateThumbnailSize };