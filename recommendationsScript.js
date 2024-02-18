import { calculateColumns } from "./javascript/gridCalculator.mjs";
import { handleData } from "./javascript/handleData.mjs";
import { renderRecommendationItem } from "./javascript/renderer.mjs";
import { createHeader } from "./javascript/createHeader.mjs";
import { SETTINGS } from "./javascript/settings.mjs";
import { applyBaseStyles } from "./javascript/applyBaseStyles.mjs";


document.addEventListener('DOMContentLoaded', async function () {
    
    try {

        const contentContainer = document.getElementById('recommendations-content-container');
        if (!contentContainer) {
            console.error('Content container not found.');
            return;
        }

        applyBaseStyles();

        contentContainer.style.maxHeight = SETTINGS.CONTAINER_SIZE.HEIGHT || 'inherit';
        contentContainer.style.maxWidth = SETTINGS.CONTAINER_SIZE.WIDTH || 'inherit';
        contentContainer.style.overflow = 'hidden';
        
        createHeader();
        
        const recommendationContainer = document.createElement('div');
        recommendationContainer.id = 'recommendations-container';
        
        contentContainer.appendChild(recommendationContainer);
        
        
        const parsedData = await handleData();
        
        const itemWidth = 
        typeof SETTINGS.ITEM_WIDTH === 'number' ? SETTINGS.ITEM_WIDTH + 'px' : '150px'; 
        document.documentElement.style.setProperty('--item-width', itemWidth);
        
        calculateColumns();
        window.addEventListener('resize', calculateColumns);
        
        parsedData.forEach(item => {
            renderRecommendationItem(item, recommendationContainer);
        });
        
        
    } catch (error) {
        console.error('Error in script.js:', error);
        //throw error;
    }
});