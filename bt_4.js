// classList:
// classList.add(): Thêm class mà ko ảnh hưởng đến class hiện có.
// classList.remove(): Xoá class cụ thể mà ko ảnh hưởng đến toàn bộ class khác.

var nuthightlight = document.getElementById("highlightButton");
nuthightlight.addEventListener("click", function () {
  var mangli = document.querySelectorAll("li");
  for (var i = 0; i < mangli.length; i++) {
    // mangli[i].setAttribute("class", "color-item hightlight");
    mangli[i].classList.add("hightlight");
    mangli[i].classList.remove("color-item");
  }
});
