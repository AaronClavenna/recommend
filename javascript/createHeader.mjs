import { applyHeaderStyles } from "./applyHeaderStyles.mjs";
import { SETTINGS } from "./settings.mjs";

function createHeader() {
  const contentContainer = document.getElementById("content-container");

  if (!contentContainer) {
    return;
  }

  const headerContainer = document.createElement("div");
  headerContainer.id = "header-container";

  const leftSection = document.createElement("div");
  leftSection.classList.add("left-section");
  const leftHeaderText = document.createElement("p");
  leftHeaderText.classList.add("header-text");
  leftHeaderText.textContent = SETTINGS.HEADER_TEXT || "";
  leftSection.appendChild(leftHeaderText);

  const rightSection = document.createElement("div");
  rightSection.classList.add("right-section");

  if (SETTINGS.SHOW_COMPANY_LOGO) {
    const rightHeaderText = document.createElement("p");
    rightHeaderText.classList.add("header-text");
    rightHeaderText.textContent = "by Company";

    //could also put an icon here, but I don't have one

    rightSection.appendChild(rightHeaderText);
  }

  const dividerBar = document.createElement("div");
  dividerBar.classList.add("divider-bar");

  headerContainer.appendChild(leftSection);
  headerContainer.appendChild(rightSection);
  headerContainer.appendChild(dividerBar);

  applyHeaderStyles(headerContainer);

  contentContainer.appendChild(headerContainer);
}

export { createHeader };
