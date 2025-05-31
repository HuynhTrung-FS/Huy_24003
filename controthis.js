const globalArrowFunction = () => {
  console.log(this); // trỏ đến global scope (window)
};

globalArrowFunction();

const obj = {
  name1: "Javascript",
  myMethod: function () {
    const arrowFunc = () => {
      console.log(this); // Thuộc phạm vi thằng cha gần nhất (obj)
    };

    arrowFunc.call({ name: "HTML" }); // Ko có tác dụng
    arrowFunc.apply({ name: "CSS" }); // Ko có tác dụng
    const boundArrowFunc = arrowFunc.bind({ name: "React" }); // Ko có tác dụng
    boundArrowFunc();
  },
};

obj.myMethod();

const myObjectRegular = {
  name1: "Javascript",
  myMethod: function () {
    const arrowFunc = function () {
      console.log(this); // Thuộc phạm vi của global scope
    };

    arrowFunc.call({ name: "HTML" }); // Có tác dụng
    arrowFunc.apply({ name: "CSS" }); // Có tác dụng
    const boundArrowFunc = arrowFunc.bind({ name: "React" }); // Có tác dụng
    boundArrowFunc();
  },
};
myObjectRegular.myMethod();

setTimeout(() => {
  console.log(this); // Thuộc phạm vi thằng cha gần nhất (window)
}, 1000);

const obj2 = {
  count: 0,
  increment: function () {
    setTimeout(() => {
      this.increment(); // Thuộc phạm vi thằng cha gần nhất (obj2)
    }, 1000);
  },
};

const myObject = {
  value: 20,
  regularMethod: function () {
    const arrowFunc = () => {
      console.log("this.value trong arrowFunc:", this.value);
    };
    arrowFunc();
  },
  arrowMethod: () => {
    console.log("this.value trong arrowMethod:", this.value);
  },
};
myObject.regularMethod();
myObject.arrowMethod();
