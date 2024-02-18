function calculateColumns() {
    const container = document.getElementById('recommendations-container');
    const itemWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--item-width'));
    const gap = 1;

    const containerWidth = container.offsetWidth;
    const numColumns = Math.floor((containerWidth - gap ) / (itemWidth + gap));

    document.documentElement.style.setProperty('--num-columns', numColumns);

    console.log(numColumns);
    return numColumns;
}

export { calculateColumns };