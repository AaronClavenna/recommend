import { handleData } from "./javascript/handleData.mjs";
import { renderRecommendationItem } from "./javascript/renderer.mjs";

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const reccomendationContainer = document.getElementById('recommendations-container');
        const parsedData = await handleData();

        parsedData.forEach(item => {
            renderRecommendationItem(item, reccomendationContainer);
        });
    } catch (error) {
        console.error('Error in script.js:', error);
        //throw error;
    }
});