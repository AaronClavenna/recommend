//import { SETTINGS } from "./javascript/settings.js";
import { fetchData } from "./javascript/api.js";

document.addEventListener('DOMContentLoaded', async function() {
    console.log('script connected');
    try {
        const data = await fetchData();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error in script.js,', error);
    }
});