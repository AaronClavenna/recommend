import { fetchData } from "./api.mjs";
import { parseData } from "./parser.mjs";
import { createBlankObject } from "./createBlankObject.mjs";

async function handleData() {
  try {
    const data = await fetchData();
    const parsedData = parseData(data);
    return parsedData.map((item) => Object.assign(createBlankObject(), item));
  } catch (error) {
    console.error("Error in handleData.js:", error);
    throw error;
  }
}

export { handleData };
