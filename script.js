import { calculateColumns } from "./javascript/gridCalculator.mjs";
import { handleData } from "./javascript/handleData.mjs";
import { renderRecommendationItem } from "./javascript/renderer.mjs";
import { SETTINGS } from "./javascript/settings.mjs";

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const reccomendationContainer = document.getElementById('recommendations-container');
        const parsedData = await handleData();

        const itemWidth = 
        typeof SETTINGS.ITEM_WIDTH === 'number' ? SETTINGS.ITEM_WIDTH + 'px' : '150px'; 
        document.documentElement.style.setProperty('--item-width', itemWidth);

        calculateColumns();
        window.addEventListener('resize', calculateColumns);

        parsedData.forEach(item => {
            renderRecommendationItem(item, reccomendationContainer);

            // multiplier for testing more items
            renderRecommendationItem(item, reccomendationContainer);
            renderRecommendationItem(item, reccomendationContainer);
            renderRecommendationItem(item, reccomendationContainer);
        });
    } catch (error) {
        console.error('Error in script.js:', error);
        //throw error;
    }
});