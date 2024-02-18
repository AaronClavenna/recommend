import { validateThumbnailSize } from "./validateThumbnailSize.mjs";

function resizeAndCropImage(thumbnailURL) {
  const { thumbnailWidth, thumbnailHeight } = validateThumbnailSize();

  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";

    image.onload = () => {
      const { width, height } = image;

      let newWidth, newHeight;
      let offsetX = 0,
        offsetY = 0;

      const thumbnailAspectRatio = thumbnailWidth / thumbnailHeight;
      const imageAspectRatio = width / height;

      if (imageAspectRatio > thumbnailAspectRatio) {
        // resize by width
        newWidth = thumbnailWidth;
        newHeight = (newWidth / width) * height;

        offsetY = Math.max(0, (newHeight - thumbnailHeight) / 2);
      } else {
        // resize by height
        newHeight = thumbnailHeight;
        newWidth = (newHeight / height) * width;

        offsetX = Math.max(0, (newWidth - thumbnailWidth) / 2);
      }

      const canvas = document.createElement("canvas");
      canvas.width = thumbnailWidth;
      canvas.height = thumbnailHeight;

      const context = canvas.getContext("2d");
      context.drawImage(
        image,
        offsetX,
        offsetY,
        width - offsetX * 2,
        height - offsetY * 2,
        0,
        0,
        thumbnailWidth,
        thumbnailHeight
      );

      resolve(canvas.toDataURL());
    };

    image.src = thumbnailURL;
  });
}

export { resizeAndCropImage };
