$("document").ready(function () {
  $("li").click((e) => {
    var btn = $(e.target);
    if(btn.hasClass('pressed')) {
      btn.removeClass('pressed');
    } else {
      btn.addClass('pressed');
    }
    console.log('clicked on li'+e);
  });

  $('#shortcut-info').on('input',function(){
     $('#shortcut-title').text($('#shortcut-info').val());
  });
});
