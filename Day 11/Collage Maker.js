const collageStyles = {
  "style1": {
    layout: "grid",
    columns: 3,
    rows: 3
  },
  "style2": {
    layout: "mosaic",
    width: 300,
    height: 300
  },
  "style3": {
    layout: "carousel",
    width: 500,
    height: 300
  }
};

const fileInput = document.getElementById("file-input");
const collageContainer = document.querySelector(".collage-container");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const collageStyle = collageStyles[document.getElementById("collage-style-select").value];
  createCollage(collageStyle);
});

function createCollage(style) {
  collageContainer.innerHTML = "";
  collageContainer.classList.remove("grid", "mosaic", "carousel");

  if (style.layout === "grid") {
    collageContainer.classList.add("grid");
    collageContainer.style.cssText = `grid-template-columns: repeat(${style.columns}, 1fr); grid-template-rows: repeat(${style.rows}, 1fr);`;
  } else if (style.layout === "mosaic") {
    collageContainer.classList.add("mosaic");
    collageContainer.style.cssText = `display: flex; flex-wrap: wrap; width: ${style.width}px; height: ${style.height}px;`;
  } else if (style.layout === "carousel") {
    collageContainer.classList.add("carousel");
    collageContainer.style.cssText = `display: flex; flex-wrap: nowrap; width: ${style.width}px; height: ${style.height}px;`;
  }

  for (const file of fileInput.files) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.cssText = `border: 5px solid #ddd; margin: 5px;`;
    collageContainer.appendChild(img);
  }
}
