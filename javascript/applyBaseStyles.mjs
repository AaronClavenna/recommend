const styles = `
body {
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
  }
  #recommendations-container {
    display: grid;
    grid-template-columns: repeat(var(--num-columns, 3), 1fr);
    grid-auto-rows: 1fr;
  }
  
  .organic-recommendation-individual,
  .sponsored-recommendation-individual {
    width: 100%;
    max-width: var(--item-width);
    margin: 2px;
    display: flex;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    max-width: 90%;
  }
  
  a:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }
  
  .individual-internal {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .caption-area {
    margin-left: 6px;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
  }
  
  .caption {
    font-size: 0.8em;
    margin-top: 5px;
  }
  
  .source {
    font-size: 0.6em;
    color: #666;
  }
  
`;

function applyBaseStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

export { applyBaseStyles };