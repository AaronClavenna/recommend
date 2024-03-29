import { resizeAndCropImage } from "./thumbnailHandler.mjs";
import { applyStyles } from "./styleHandler.mjs";

function renderRecommendationItem(item, container) {
  resizeAndCropImage(item.thumbnailURL).then((resizedImage) => {
    const recommendationElement = document.createElement("div");

    recommendationElement.innerHTML = `
      <a href=${item.url} target="_blank">
        <div class="individual-internal">
          <img src=${resizedImage} />

          <div class="caption-area">
            <p class="caption">${item.name}</p>
            <p class="source">${item.branding}</p>
          </div>
        </div>
      </a>
      `;

    applyStyles(recommendationElement, item);

    container.appendChild(recommendationElement);
  });
}

export { renderRecommendationItem };
