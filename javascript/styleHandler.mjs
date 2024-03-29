import { SETTINGS } from "./settings.mjs";

function applyStyles(recommendationElement, item) {
  const recommendationClass = getClassFromType(item.origin);
  recommendationElement.classList.add(recommendationClass);

  const captionArea = recommendationElement.querySelector(".caption-area");
  if (captionArea) {
    captionArea.style.flexGrow = 1;
    const source = recommendationElement.querySelector(".source");
    if (source) {
      source.style.marginTop = "auto";
    }
  }

  switch (SETTINGS.ORIENTATION) {
    case "below":
      //set style for text being below thumbnail
      //for the moment, this needs no changes. But this is left here for easy expansion purposes.
      break;
    case "aside":
      //set style for text being aside thumbnail
      applyAsideStyles(recommendationElement);
      break;
    default:
      //set style for text being sometimes aside, sometimes below, depending on which fits
      break;
  }
}

function applyAsideStyles(recommendationElement) {
  const individualInternal = recommendationElement.querySelector(
    ".individual-internal"
  );
  if (individualInternal) {
    individualInternal.style.display = "flex";
    individualInternal.style.flexDirection = "row";
    individualInternal.style.alignItems = "center";
  }

  const captionArea = recommendationElement.querySelector(".caption-area");
  if (captionArea) {
    captionArea.style.marginLeft = "6px";
    captionArea.style.marginTop = "6px";
  }
}

function getClassFromType(type) {
  switch (type) {
    case "sponsored":
      return "sponsored-recommendation-individual";
    case "organic":
      return "organic-recommendation-individual";
    default:
      return null;
  }
}

export { applyStyles };
