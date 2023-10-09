$("document").ready(function () {
  $("li").click((e) => {
    var btn = $(e.target);
    if (btn.hasClass("pressed")) {
      btn.removeClass("pressed");
    } else {
      btn.addClass("pressed");
    }
    console.log("clicked on li" + e);
  });

  $("#shortcut-info").on("input", function () {
    $("#shortcut-title").text($("#shortcut-info").val());
  });

  $("#img-preview-div").hide();
  $("#save-img-btn").click(function () {
    var e = document.getElementById("main");
    var e_width = e.offsetWidth;
    var e_height = e.offsetHeight;
    var e_x_offset = window.scrollX + e.getBoundingClientRect().left;
    var e_y_offset = window.scrollY + e.getBoundingClientRect().top;

    html2canvas(e, {
      dpi: 192,
      scale: 1,
      backgroundColor: null,
      // width: e_width,
      // height: e_height,
      // x: e_x_offset,
      // y: e_y_offset
    }).then((canvas) => {
      //document.body.appendChild(canvas)
      $("#img-preview-div").show();
      var base64image = canvas.toDataURL("image/png");

      let $imgDiv = $('<img src="' + base64image + '" width = "640"/>');
      $("#img-out-preview").empty();
      $("#img-out-preview").append($imgDiv);

      $imgDiv[0].onload = () => {
        $("#gen-img-size-label").text(
          "image dimensions = " +
            $imgDiv[0].width +
            "px, " +
            $imgDiv[0].height +
            "px"
        );
      };

      setTimeout(() => {
        window.scrollBy(0, 500);
      }, 250);

      // resizeImage(base64image, 298);
      // var win = window.open('', "_blank");
      // win.document.write('<img src="' + base64image + '"/>');
      // win.document.close();
    });
  });
});
