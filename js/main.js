document.addEventListener("DOMContentLoaded", function () {
  // Add click handlers to keyboard keys
  var keys = document.querySelectorAll("li");
  keys.forEach(function(key) {
    key.addEventListener("click", function(e) {
      if (e.target.classList.contains("pressed")) {
        e.target.classList.remove("pressed");
      } else {
        e.target.classList.add("pressed");
      }
    });
  });

  // Handle shortcut info input
  var shortcutInput = document.getElementById("shortcut-info");
  var shortcutTitle = document.getElementById("shortcut-title");
  if (shortcutInput && shortcutTitle) {
    shortcutInput.addEventListener("input", function() {
      shortcutTitle.textContent = shortcutInput.value;
    });
  }

  // Theme switching functionality
  var themeSelector = document.getElementById("theme-selector");
  var keyboard = document.getElementById("keyboard");
  
  if (themeSelector && keyboard) {
    themeSelector.addEventListener("change", function() {
      var selectedTheme = this.value;
      
      // Remove all theme classes
      keyboard.classList.remove("theme-blue", "theme-green", "theme-orange");
      
      // Add the selected theme class (default doesn't need a class)
      if (selectedTheme !== "default") {
        keyboard.classList.add("theme-" + selectedTheme);
      }
    });
  }

  // Hide image preview div initially
  var imgPreviewDiv = document.getElementById("img-preview-div");
  if (imgPreviewDiv) {
    imgPreviewDiv.style.display = "none";
  }
  // Image saving functionality
  var saveImgBtn = document.getElementById("save-img-btn");
  if (saveImgBtn) {
    saveImgBtn.addEventListener("click", function() {
      var e = document.getElementById("main");
      var e_width = e.offsetWidth;
      var e_height = e.offsetHeight;
      var e_x_offset = window.scrollX + e.getBoundingClientRect().left;
      var e_y_offset = window.scrollY + e.getBoundingClientRect().top;

      html2canvas(e, {
        dpi: 192,
        scale: 1,
        backgroundColor: null,
      }).then(function(canvas) {
        var imgPreviewDiv = document.getElementById("img-preview-div");
        if (imgPreviewDiv) {
          imgPreviewDiv.style.display = "block";
        }
        
        var base64image = canvas.toDataURL("image/png");

        var imgElement = document.createElement("img");
        imgElement.src = base64image;
        imgElement.width = 640;
        
        var imgOutPreview = document.getElementById("img-out-preview");
        if (imgOutPreview) {
          imgOutPreview.innerHTML = "";
          imgOutPreview.appendChild(imgElement);
        }

        setTimeout(function() {
          window.scrollBy(0, 500);
        }, 250);
      });
    });
  }
});
