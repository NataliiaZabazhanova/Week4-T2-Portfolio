/**
Эта функция предназначена для задания фонового изображения блоку с классом .ibg на основе первого найденного внутри него изображения. */
function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

$(document).ready(function () {
  ibg();
});