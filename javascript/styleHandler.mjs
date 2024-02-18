import { SETTINGS } from "./settings.mjs";

function applyStyles(reccomendationElement, item) {
    const reccomendationClass = getClassFromType(item.origin);
    reccomendationElement.classList.add(reccomendationClass);

    switch (SETTINGS.ORIENTATION) {
        case 'below':
            //set style for text being below thumbnail
            break;
        case 'aside':
            //set style for text being aside thumbnail
            break;
        default:
            //set style for text being sometimes aside, sometimes below, depending on which fits
            break;
    }
}


function getClassFromType(type) {
    switch (type) {
        case 'sponsored':
            return 'sponsored-recommendation-individual';
        case 'organic':
            return 'organic-recommendation-individual';
        default:
            return null;
    }
}

export { applyStyles };