import { ENDPOINT } from "./settings.mjs";

const API_ENDPOINT = ENDPOINT;

async function fetchData() {
  try {
    const response = await fetch(API_ENDPOINT);

    if (!response.ok) {
      throw new Error(`HTTP Error - Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data in api.js:", error);
    throw error;
  }
}

export { fetchData };
