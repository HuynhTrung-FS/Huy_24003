// Bất đồng bộ và tại sao nó cần thiết.
// Đồng bộ: các dòng code thực thi tuần tự, dòng này phải xong thì mới đến dòng tiếp theo.

// Ví dụ:
// console.log("1. Bắt đầu tác vụ đồng bộ");

// function hamDongBo() {
//   let sum = 0;
//   for (let i = 0; i < 10000000; i++) {
//     // Giả lập tác vụ tốn thời gian (tính toán)
//     sum += i;
//   }
//   console.log("2. Tác vụ đồng bộ hoàn thành, tổng là: ", sum);
// }
// hamDongBo();

// console.log("3. Kết thúc chương trình đồng bộ");

// Javascript nó chỉ chạy trên một single thread (luồng đơn) trong cả trình duyệt và Node.js
// Nếu như gặp một tác vụ đồng bộ tốn thời gian => luồng chính sẽ bị block (chặn)
// (ví dụ: tính toán phức tạp, trong trình duyệt, thao tác DOM nặng trong NodeJS, I/O đồng bộ, tính toán CPU-bound)
// Trong trình duyệt, nó bị đơ, ko phản hồi tương tác người dùng, trải nghiệm người dùng kém.
// Trong NodeJS : Event loop bị block , ko thể xử lý các request khác, giảm hiệu năng ứng dụng.

// Bất đồng bộ (Asynchronous)
// console.log("1. Bắt đầu tác vụ bất đồng bộ");

// setTimeout(() => {
//   // Bắt đầu tác vụ bất đồng bộ (delay 1s)
//   console.log("2. Tác vụ bất đồng bộ hoàn tính");
// }, 1000);

// console.log("3. Kết thúc chương trình bất đồng bộ");

// Cho phép thực hiện tác vụ tốn thời gian mà không block luồng chính.

// Khi bắt đầu tác vụ đồng bộ, Javascript engine
// sẽ tiếp tục thực thi các dòng code tiếp theo mà ko cần chờ tác vụ đó hoàn thành.

// Khi tác vụ bất đồng bộ hoàn thành, Javscript sẽ thông báo và xử lý kết quả
// (thường thông qua callback hoặc Promise).

// Quy trình làm việc song song, mình giao việc cho người khác và bạn sẽ tiếp tục làm công việc khác.
// => khi công việc đó hoàn thành bạn sẽ đc thông báo và xử lý kết quả.

// Callback Hell - Vấn đề của CallBack lồng nhau.
// function tacVuA(a) {
//   setTimeout(() => {
//     // Bắt đầu tác vụ bất đồng bộ (delay 1s)
//     console.log("Tác vụ A hoàn thành");
//     a(); // Gọi callback khi tác vụ A xong
//   }, 2000);
// }

// function tacVuB(callback) {
//   setTimeout(() => {
//     // Bắt đầu tác vụ bất đồng bộ (delay 1s)
//     console.log("Tác vụ B hoàn tính");
//     callback(); // Gọi callback khi tác vụ B xong
//   }, 1000);
// }

// function tacVuC(callback) {
//   setTimeout(() => {
//     // Bắt đầu tác vụ bất đồng bộ (delay 1s)
//     console.log("Tác vụ C hoàn tính");
//     callback(); // Gọi callback khi tác vụ C xong
//   }, 1000);
// }

// Callback Hell (lồng tác vụ B vào callback của A, và tác vụ C vào callback của B)
// Các tác vụ bất đồng bộ với nhau (lồng nhau) sẽ được chạy theo cách đồng bộ với nhau.
// tacVuA(() => {
//   tacVuB(() => {
//     ///...
//     tacVuC(() => {
//       console.log("Cả ba tác vụ A,B,C hoàn thành.");
//     });
//   });
// });
// console.log("Chương trình chính vẫn chạy...");

// Callback Hell: việc lồng nhau => phức tạp => khó đọc.
// Bắt đầu khó mở rộng hơn: thêm tác vụ thứ 4, thứ 5 sẽ làm cấu trúc lồng nhau càng sau hơn, và phức tạp hơn.
// Tiềm năng khó debug.

// Promise: một chiếc hộp đóng gói -> thực hiện đóng gói một tác vụ bất đồng bộ bên trong.
// Có nghĩa là: mình sẽ ko trực tiếp làm việc vói tác vụ bất đồng bộ, mà chỉ cần giao tiếp với hôp promise.

// Trạng thái Promise: Mỗi promise sẽ trải qua các trạng thái khác nhau,
// -> phản ánh tiến trình thực hiện các tác vụ bất đồng bộ.

// Pending(chờ xử lý):
// Trạng thái ban đầu của Promise khi Promise vừa được tạo ra và các tác vụ bất đồng bộ vẫn đang được thực hiện.
// Promise ở trạng thái pending nghĩa là các tác vụ chưa hoàn thành.
// Lúc này, các hàm resolve() hoặc reject() chưa được gọi.

// fulfilled (thành công):
// Trạng thái thành công của promise khi tác vụ bất đồng bộ hoàn thành thành công.
// Promise chuyển sang trạng thái fullfiled khi hàm resolve(value) được gọi
// Giá trị value được truyền vào resolve() trở thành giá trị kết quả của promise.
// các .then() callback được liên kết với promise và sẽ được thực thi (nếu như mình mún sử dụng giá trị data trả về).s

// Rejected ( thất bại)
//Trạng thái thất bại của Promise, khi tác vụ bất đồng bộ đã hoàn thành nhưng bị thấ bại (xảy ra lỗi).
// Promise chuyển sang trạng thái Rejected khi hàm reject(reason).
// các catch() callback được liên kết với promise và sẽ được thực thi (nếu như mình mún sử dụng giá trị data trả về).

// Tạo promise:
const myPromise = new Promise((resolve, reject) => {
  //execute code
});
// resolve, reject : hai hàm đặc biệt được cung cấp bởi executor function. => là công cụ điều khiển trạng thái của promise

// ví dụ:
// const myFirstPromise = new Promise((resolve, reject) => {
//   // Bắt đầu tác vụ bất đồng bộ (delay 1s)
//   console.log("Promise được tạo ra");
//   setTimeout(() => {
//     resolve("Promise đã thành công"); // Gọi resolve sau 1 giây
//   }, 1000);
// });

// then: Tương tác với promise khi tác vụ hoàn thành thành công.
// catch: Tương tác với promise khi tác vụ hàon thành thất bại.
// finally: Luôn tương tác với promise khi tác vụ thành công hoặc thất bại.
// myFirstPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise hoàn thành"); // báo hiệu kết thúc.
//   });

// console.log("Promise được tạo ra ở trạng thái ban đầu: pending");

// Ví dụ:
// const loiHuaMuaDoAn = new Promise((thanhCong, thatBai) => {
//   console.log("Lời hứa mua đồ ăn đang được tạo ra..."); // Báo hiểu lời hứa bắt đầu
//   setTimeout(() => {
//     const coDoAnKhong = false; // Giả sử hôm nay quán có đồ ăn.
//     if (coDoAnKhong) {
//       thanhCong("Mua đồ ăn thanh công!!"); // Tác vụ thành công
//     } else {
//       thatBai("Hôm nay quán hết đồ ăn rồi!"); // Tác vụ thất bại.
//     }
//   }, 1000);
// });

// console.log("Lời hứa được tạo ra (đang chờ đi mua đồ ăn"); // báo hiệu lời hứa đã sẵn sàng.

// then, catch, finally
// loiHuaMuaDoAn
//   .then((result) => {
//     console.log(result); // In ra "Mua đồ ăn thanh công!!"
//   })
//   .catch((error) => {
//     console.log(error); // In ra "Hôm nay quán hết đồ ăn rồi!"
//   })
//   .finally(() => {
//     console.log("Lời húa hoàn thành"); // In ra "Lời húa hoàn thành"
//   });

// Promise Chain - Giải quyết được callBack Hell

// function tacVuPromiseA() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Tác vụ Promise A hoàn thành");
//       resolve("Kết quả từ Task A");
//     }, 500);
//   });
// }

// function tacVuBPromise(dataFromA) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(dataFromA);
//       console.log("Tác vụ Promise B hoàn tính");
//       resolve("Kết quả từ Task B");
//     }, 1000);
//   });
// }

// function tacVuCPromise(dataFromB) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(dataFromB);
//       console.log("Tác vụ Promise C hoàn tính");
//       resolve("Kết quả từ Task C");
//     }, 1500);
//   });
// }

// tacVuPromiseA()
//   .then((dataA) => {
//     tacVuBPromise(dataA); // Chaining: trả về promise từ .then()
//   })
//   .then((dataB) => {
//     tacVuCPromise(dataB); // chaining
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("Chuong trinh chinh van chay...");

// Các hàm tiện ích có trong Promises

// Promise.all(promises):
// Đưa vào 1 mảng các promise => trả về một cái promise duy nhất.
// resolve: 1 mảng tất cả các resolve (tất cả các promise phải được resolve).
// reject: chỉ cần ít nhất 1 promise bị reject -> tất cả promise đều bị reject.

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise 1 đã resolve sau 2 giây");
//     resolve("abc");
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   //   console.log("Promise 2	resolve sau 1 giây");
//   //   resolve("def");
//   // }, 1000);
//   reject("Promise 2 bi loi");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise 3	resolve sau 3 giây");
//     resolve("ghk");
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values); // mảng của tất cả các resolve ["abc","def","ghk"]
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Promises.race
// Thường nó sẽ áp dụng thực hiện nhiệm vụ bất đồng bộ độc lập và chỉ cần kết quả nhanh nhất của tác vụ
// (ví dụ: Chọn server nhanh nhất từ nhiều server.)
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise nhanh đã resolve sau 500ms");
    resolve("Promise nhanh thắng cuộc!");
  }, 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise chua nhanh	resolve sau 1000ms");
    resolve("Promise chua nhanh chậm hơn!");
  }, 1000);
});

Promise.race([promise2, promise1])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.resolve(value)
// -> tạo ra promise đã được fullfiled.
Promise.resolve("abc").then((result) => {
  console.log(result);
});

// Promise.reject(reason)
// -> tạo ra promise đã được loi.
Promise.reject("abc").catch((error) => {
  console.log(error);
});

// Async/Await: Cú pháp "đồng bộ" cho bất đồng bộ
// Async:
// Luôn trả về 1 promise.
async function helloAsync() {
  return "xin chào"; // resolve("xin chào")
}

helloAsync().then((result) => {
  console.log(result);
});

async function errorAsync() {
  throw new Error("Xin chào"); // reject(new Error("Xin chào"))
}
errorAsync().catch((error) => {
  console.log(error);
});

// Await
async function hamViDu() {
  console.log("Chuong trinh chinh van chay...");
  const ketQuaCho1giay = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kết quả từ Task 1 giay");
    }, 1000);
  });
  console.log(ketQuaCho1giay);
  const ketQuaChoNuagiay = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kết quả từ Task Nua Giay");
    }, 500);
  });
  console.log(ketQuaChoNuagiay);
  return "Hoan Thanh";
}

hamViDu().then((result) => {
  console.log(result);
});

// Fetch API
// Ajax (Asynchronous JavaScript and XML):
// Về cơ bản một công cụ cho phép mình tạo ra các trang web động và tương tác tốt hơn.
// Điếm mấu chốt của Ajax là khả năng giao tiếp với server bất đồng bộ mà không cần phải tải lại trang web.

// Cải thiện giao diện người dùng, tạo ra trang web động.
// Các ứng dụng Ajax:
// dữ liệu khi cuộn trang (infinite scroll)
// submit form (không cần reload lại trang)
// cập nhật dữ liệu theo thời gian (chat, notification realtime)

//Fetch API
// Trả về một cái promise (dễ dàng kết hợp với then, catch, async/await)
// API hiện đại và mạnh hơn XMLHttpRequest để thực hiện Ajax Request.
// fetch(url, options)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Lỗi Fetch:", error);
//   });

// Ví dụ: JSONPlaceholder API (lấy data)
//https://jsonplaceholder.typicode.com/
// Sử dụng Promise Chain (.then(), .catch())
fetch("https://jsonplaceholder.typicode.com/posts") // URL của JSONPlaceholder API endpoint để lấy danhsách posts
  .then((response) => {
    console.log("Response status:", response.status); // In ra HTTP status code (ví dụ: 200 OK)
    if (!response.ok) {
      // Kiểm tra nếu response không thành công (ví dụ: 404, 500)
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse body response thành JSON (trả về Promise)
  })

  .then((posts) => {
    console.log("Dữ liệu Posts từ JSONPlaceholder API:", posts); // In ra danh sách posts (dạng mảng obj)
    // Ở đây bạn có thể xử lý dữ liệu posts, ví dụ: hiển thị lên trang web
  })
  .catch((error) => {
    console.error("Lỗi Fetch API:", error); // Xử lý lỗi fetch
  });
console.log("Chương trình chính vẫn chạy...");

// AJAX: Giao tiếp server bất đồng bộ, không cần reload lại trang.
// Fetch API: cong cụ hiện đại hơn để gửi request, trả về Promise.
// GET REQUEST: lấy dữ liệu từ server.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    data.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// POST REQUEST: thêm dữ liệu
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Async/await với fetch
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Lỗi HTTP / server");
    }
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
      }),
    });
    if (!response.ok) {
      throw new Error("Lỗi HTTP / server");
    }
    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
}
