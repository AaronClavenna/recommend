function renderRecommendationItem(item, container) {
    const reccomendationElement = document.createElement('div');
    const reccomendationClass = getClassFromType(item.origin);

    reccomendationElement.classList.add(reccomendationClass);

    reccomendationElement.innerHTML = `
    <a href=${item.url} target="_blank">
      <div class="individual-internal">
        <img src=${item.thumbnailURL} />

        <div class="caption-area">
          <p class="caption">${item.name}</p>
          <p class="source">${item.branding}</p>
        </div>
      </div>
    </a>

    `;
    container.appendChild(reccomendationElement);
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

export { renderRecommendationItem };