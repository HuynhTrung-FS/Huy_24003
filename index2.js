var driverList = [
  {
    chu: "Tran Van Teo",
    doanDuong: [5, 20, 50, 6], // 81
  },
  {
    chu: "Nguyen Van A",
    doanDuong: [10], //10
  },
  {
    chu: "Vo Van B",
    doanDuong: [3, 7, 2], // 12
  },
  {
    chu: "Nguyen Thi D",
    doanDuong: [40, 15], //55
  },
];
//Tính tổng từng đoạn đường của từng người có trong danh sách.
for (var i = 0; i < driverList.length; i++) {
  var tong = 0;
  for (var j = 0; j < driverList[i].doanDuong.length; j++) {
    tong += driverList[i].doanDuong[j];
  }
  console.log(tong);
}
// Tìm người có đoạn đường đi lớn nhất trong danh sách.
