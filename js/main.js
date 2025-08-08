document.addEventListener("DOMContentLoaded", function () {
  // Key click functionality
  const keys = document.querySelectorAll("li");
  keys.forEach(key => {
    key.addEventListener("click", function(e) {
      if (e.target.classList.contains("pressed")) {
        e.target.classList.remove("pressed");
      } else {
        e.target.classList.add("pressed");
      }
      console.log("clicked on li", e);
    });
  });

  // Shortcut info input functionality
  const shortcutInfo = document.getElementById("shortcut-info");
  const shortcutTitle = document.getElementById("shortcut-title");
  
  shortcutInfo.addEventListener("input", function() {
    shortcutTitle.textContent = shortcutInfo.value;
  });

  // Hide image preview div initially
  const imgPreviewDiv = document.getElementById("img-preview-div");
  imgPreviewDiv.style.display = "none";
  
  // Save image button functionality
  const saveImgBtn = document.getElementById("save-img-btn");
  saveImgBtn.addEventListener("click", function() {
    const mainElement = document.getElementById("main");
    
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
      
      imgElement.onload = function() {
        const genImgSizeLabel = document.getElementById("gen-img-size-label");
        if (genImgSizeLabel) {
          genImgSizeLabel.textContent = "image dimensions = " + imgElement.width + "px, " + imgElement.height + "px";
        }
      };
      
      setTimeout(() => {
        window.scrollBy(0, 500);
      }, 250);
    });
  });
});
