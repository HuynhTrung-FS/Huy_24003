var currentelement = document.getElementById("second-item");
console.log(currentelement);
var parent = currentelement.parentNode;
console.log(parent);
// parent.innerHTML = "<li>Mục A</li><li>Mục B</li><li>Mục C</li>";

var kq = currentelement.previousElementSibling;
kq.textContent = "Đã thay đổi!";
console.log(kq);

parent.parentNode.textContent = "Nội dung của div đã thay đổi";
console.log(parent.parentNode);
