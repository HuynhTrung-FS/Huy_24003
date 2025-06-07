// DOM: document object model
// DOM : javascript , dùng để thay đổi trang web
// DOM: là mô tả cấu trúc của một trang web

// Node (nút): Mỗi phần trên của DOM
// Node được chia thành 2 loại: Element Node và Text Node
// Element Node: thẻ html (ví dụ: thẻ <p>, thẻ <h1>,....)
// Text Node: chữ bên trong thẻ

// Quan hệ: parent, child, Sibling
// parent: nút cha
// child: nút con
// sibling: nút "anh, chị em" (đồng cấp, chung thằng cha)

// getElementById(id): Tìm theo ID (ID là phải duy nhất)

// querySelector(selector): Tìm theo thằng class/ hoặc tag (class chính là name)
// querySelector nó chỉ lấy phần tử đầu tiên của class/ tag (trong vd: class = "name")
var doanVan = document.querySelector(".name");
console.log(doanVan);

// querySelectorAll(selector): lấy tất cả các class/tag bằng với giá trị mà mình đưa vào.
var doanVanAll = document.querySelectorAll(".name");
console.log(doanVanAll);

// Duyệt DOM: di chuyển các phần từ HTML trong cây DOM
// Các thuộc tính duyệt DOM quan trọng:

// Đây chính là cac thuộc tính thuộc về ElementNode

// parentNode: Đi lên phần tử cha gần nhất
// var currentItem = document.getElementById("current-item");
// var parentItem = currentItem.parentNode;
// console.log(parentItem);

//childen: lấy danh sách phần tử HTML con của một thẻ.
// var listChildren = parentItem.children;
// console.log(listChildren);

//firstElementChild: lấy phần tử HTML con đầu tiên trong 1 thẻ bất kì (trong vd: thẻ ul)
// var firstChild = parentItem.firstElementChild;
// console.log(firstChild);

//lastElementChild: lấy phần tử HTML con cuối cùng trong 1 thẻ bất kì (trong vd: thẻ ul)
// var lastChild = parentItem.lastElementChild;
// console.log(lastChild);

// nextElementSibling: lấy phần HTML ANH/CHỊ/EM liền kề sau
// var nextItem = currentItem.nextElementSibling;
// console.log(nextItem);

// var lastItem = document.getElementById("last-item");
//previosElementSibling: lấy phần HTML ANH/CHỊ/EM liền kề trước/trên
// var previousItem = lastItem.previousElementSibling;
// console.log(previousItem);

// Đi lên thằng cha của thằng currentItem, rồi xuống thằng con đầu tiên.
// var chooseItem = currentItem.parentNode.firstElementChild;
// console.log(chooseItem);

// var children1 = parentItem.firstChild;
// console.log(children1);

// Các thuộc tinh của thằng textNode:
// textContent: thay đổi nội dung chữ bên trong của thẻ
// var listTitle = document.getElementById("first-item");
// listTitle.textContent = "Muc Dau Tien";

// innerHTML: Thay đổi nội dung (cả về cấu trúc lẫn text) bên trong thẻ đó
// listTitle.innerHTML = "<h1>Muc Dau Tien đã chỉn hcuaw</h1>";

// getAttribute: lấy giá trị của thuộc tính bên trong 1 thẻ,
// setAttribute: gán giá trị cho 1 thuộc tính bên trong 1 thẻ
// var hinh = document.getElementById("image-item");
// console.log(hinh.getAttribute("src"));
// hinh.setAttribute("src", "./hinhanh");

// Thêm vs Xoá phần tử
// createElement(<tagname>): Tạo thẻ HTML mới (tạo phần tử node mới)
// Ví dụ: tagname có thể là div, p, ul,...
// ví dụ: var newItem =  document.createElement("li"); // tạo ra một thẻ li mới.
// => <li></li>
// Thêm nội dung vào element: newItem.textContent = "Muc moi";
// => <li>Muc moi</li>

// var newItem = document.createElement("li");
// newItem.textContent = "Muc moi";
// Thêm phần từ vào cây DOM
// var parentItemNode = document.getElementById("item-list"); // lấy ra thằng ul
// dùng thuộc tính: appendChild: Thêm phần tử này vào cuối của phần tử cha
// parentItemNode.appendChild(newItem);

// Thêm phần tử tại vị trí được xác định
// insertBefore(newNode, referenceNode): thêm phần tử newNode với thằng referenceNode (thêm vào đằng trước thằng reference)
// var newItem1 = document.createElement("li");
// newItem1.textContent = "Muc moi tiep theo";
// var referenceNode = document.getElementById("current-item"); // referenceNode bắt buộc phải tồn tại trong cây DOM
// parentItemNode.insertBefore(newItem1, referenceNode);

// Xoá phần tử trong cây DOM
// remove(): Xoá phần tử
// currentItem.remove();

// Các câu lệnh xử lý sự kiện
// Hành động: click, submit, gõ phím (change),....
// Cách làm:
// 1. Truy vấn phần tử (xác định vị trí phần tử): document.getElementById/ document.querySelector/ document.querySelectorAll
// 2. addEventListener: Thêm sự kiện lắng nghe cho phần tử
// 3. Viết code xử lý sự kiện.

// Cú pháp:
// Tên sự kiện: click
// var latItemNode = document.getElementById("last-item");
// lastItemNode.addEventListener("click", function () {
//   // Thêm code cho sự kiện.
//   console.log("click muc 4");
// });

// Tên sự kiện: submit => đi đôi với thẻ form
// var formRegister = document.getElementById("formDangKy");
// formRegister.addEventListener("submit", function (event) {
//   event.preventDefault(); // tránh việc reload lại trang web tuy nhiên form vẫn submit.
//   let ten = document.getElementById("name").value;
//   let password = document.getElementById("password").value;
//   console.log(ten);
//   console.log(password);
// });

// Tên sự kiện:change => thường sẽ đi vs thẻ input, textarea
// var ten = document.getElementById("name");
// ten.addEventListener("change", function () {
//   console.log(ten.value);
// });
// change => với ô select
// var selectCity = document.getElementById("selectCity");
// selectCity.addEventListener("change", function () {
//   console.log(selectCity.value);
// });

// children vs childNodes
// childNodes: Đếm tất cả bao gồm (Element Node vs TextNode)
const parentChildNodes = document.getElementById("parent");
console.log(parentChildNodes.childNodes);

// children: Đếm element node
const parentChildren = document.getElementById("parent");
console.log(parentChildren.children);

// firstChild vs firstElementChild
// firstChild: lấy phần tử con đầu tiên (textNode vs elementNode)
console.log(parentChildNodes.firstChild);
// firstElementChild: lấy phần tử con đầu tiên (elementNode)
console.log(parentChildren.firstElementChild);

// lastChild vs lastElementChild
// lastChild: lấy phần tử con cuối cùng (textNode vs elementNode)
console.log(parentChildNodes.lastChild);
// lastElementChild: lấy phần tử con  cuối cùng (elementNode)
console.log(parentChildren.lastElementChild);
