import { SETTINGS } from "./settings.mjs";

function applyHeaderStyles(headerContainer) {
  // for the left section
  const leftSection = headerContainer.querySelector(".left-section");
  if (leftSection) {
    leftSection.style.fontSize = "1.2em";
    leftSection.style.float = "left";
    leftSection.style.paddingLeft = "0.2em";
  }

  // for the right section
  const rightSection = headerContainer.querySelector(".right-section");
  if (rightSection) {
    rightSection.style.display = SETTINGS.SHOW_COMPANY_LOGO ? "flex" : "none";
    rightSection.style.fontSize = "0.6em";
    rightSection.style.color = "#666";
    rightSection.style.float = "right";
    rightSection.style.marginTop = "1.5em";
    rightSection.style.paddingRight = "1em";
  }

  const dividerBar = headerContainer.querySelector(".divider-bar");
  if (dividerBar) {
    dividerBar.style.clear = "both";
    dividerBar.style.borderTop = "1px solid #ccc";
    dividerBar.style.marginTop = "4px";
    dividerBar.style.marginBottom = "4px";
  }
}

export { applyHeaderStyles };
