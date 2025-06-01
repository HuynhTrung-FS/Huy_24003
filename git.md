Nhánh (Branch) - tại sao lại cần?

Lợi ích của nhánh a

- Cô lập thay đổi
- Làm việc song song
- Quy trình làm việc rõ ràng.
- An toàn.

- Câu lệnh liên quan đến branch
  check name branch: git branch ( dấu \* là báo hiệu code đang chạy trên nhánh chính master).
  create a new branch: git branch <ten-nhanh>
  Chuyển đổi nhánh :git switch <ten-nhanh>
  Cách cũ Chuyển đổi nhánh: git checkout <ten-nhanh>

  Gom 2 cách trên thành 1 nhánh: git switch -b <ten-nhanh> hoặc git checkout -b <ten-nhanh>

- Merge (giua 2 Branch): là quá trình tích hợp các thay đổi từ một nhánh này sang nhánh khác.
- Lệnh gộp: git merge <ten-nhanh-can-gop>
- Fast-forward merge: khi em tạo nhánh mới từ một nhánh nào đó.
- Xóa nhánh đã gộp: git branch -d <ten-nhanh>
  d:chỉ xoá nhánh đã gộp
  D:xoá luôn kể cả việc chưa gộp.

- Xung đột nhánh (Conflict branch): khi cả 2 nhánh sửa đổi cùng 1 dòng(hoặc các dòng gần nhau) trong cùng 1 file, Git không thể tự động quyết định phiên bản nào là đúng.
- Dấu hiệu xung đột:

* Git sẽ báo lỗi merge và nói có conflict.
* Lệnh git status sẽ hiển thị các file ở trạng thái "unmerged paths"
* Trong file bị xung đột, git sẽ chèn các dấu đặc biệt

<<<<<<< HEAD
// Code từ nhánh hiện tại (ví dụ: master)
=======
// Code từ nhánh đang được gộp vào (ví dụ: feature/...)

> > > > > > > ten-nhanh-dang-gop
> > > > > > > ádasdasd
