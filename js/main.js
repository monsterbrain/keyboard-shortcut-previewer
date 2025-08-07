document.addEventListener("DOMContentLoaded", function () {
  // Add click handler for keyboard keys
  const keyboardLis = document.querySelectorAll("#keyboard li");
  keyboardLis.forEach(li => {
    li.addEventListener("click", (e) => {
      const btn = e.target.closest("li");
      if (btn.classList.contains("pressed")) {
        btn.classList.remove("pressed");
      } else {
        btn.classList.add("pressed");
      }
      console.log("clicked on li", e);
    });
  });

  // Add input handler for shortcut info
  const shortcutInfo = document.getElementById("shortcut-info");
  const shortcutTitle = document.getElementById("shortcut-title");
  shortcutInfo.addEventListener("input", function () {
    shortcutTitle.textContent = shortcutInfo.value;
  });

  // Hide preview div initially
  const imgPreviewDiv = document.getElementById("img-preview-div");
  imgPreviewDiv.style.display = "none";

  // Add save image handler
  const saveImgBtn = document.getElementById("save-img-btn");
  saveImgBtn.addEventListener("click", function () {
    const mainElement = document.getElementById("main");
    const e_width = mainElement.offsetWidth;
    const e_height = mainElement.offsetHeight;
    const e_x_offset = window.scrollX + mainElement.getBoundingClientRect().left;
    const e_y_offset = window.scrollY + mainElement.getBoundingClientRect().top;

    html2canvas(mainElement, {
      dpi: 192,
      scale: 1,
      backgroundColor: null,
    }).then((canvas) => {
      imgPreviewDiv.style.display = "block";
      const base64image = canvas.toDataURL("image/png");

      const imgElement = document.createElement("img");
      imgElement.src = base64image;
      imgElement.width = 640;
      
      const imgOutPreview = document.getElementById("img-out-preview");
      imgOutPreview.innerHTML = "";
      imgOutPreview.appendChild(imgElement);

      imgElement.onload = () => {
        const genImgSizeLabel = document.getElementById("gen-img-size-label");
        if (genImgSizeLabel) {
          genImgSizeLabel.textContent = 
            "image dimensions = " +
            imgElement.width +
            "px, " +
            imgElement.height +
            "px";
        }
      };

      setTimeout(() => {
        window.scrollBy(0, 500);
      }, 250);
    });
  });

  // Theme switching functionality
  const themeClassicBtn = document.getElementById("theme-classic");
  const themeTransparentBtn = document.getElementById("theme-transparent");
  const mainElement = document.getElementById("main");

  themeClassicBtn.addEventListener("click", function() {
    mainElement.classList.remove("semi-transparent");
    themeClassicBtn.style.backgroundColor = "#5b50f1";
    themeClassicBtn.style.color = "#fff";
    themeTransparentBtn.style.backgroundColor = "#FFFFFF";
    themeTransparentBtn.style.color = "rgba(0, 0, 0, 0.85)";
  });

  themeTransparentBtn.addEventListener("click", function() {
    mainElement.classList.add("semi-transparent");
    themeTransparentBtn.style.backgroundColor = "#5b50f1";
    themeTransparentBtn.style.color = "#fff";
    themeClassicBtn.style.backgroundColor = "#FFFFFF";
    themeClassicBtn.style.color = "rgba(0, 0, 0, 0.85)";
  });

  // Set default theme (classic)
  themeClassicBtn.style.backgroundColor = "#5b50f1";
  themeClassicBtn.style.color = "#fff";
});
