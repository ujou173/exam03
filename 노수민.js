let basicData = {
  header: {},
  main: {},
  footer: {}
}

let fromJsonData = {
  header : {
    content: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc"
    }
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333"
    }
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666"
    }
  }
}

function exampleOne(basicData, fromJsonData) {
  let value = "";
  // 아래의 호출부를 참고하여, 지역변수 value에
  // 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다.
  let makeTag = "";
  for(key in basicData) {
    // console.log(key);
    makeTag = makeTag + `<${key}>"${fromJsonData[key]["content"]}"</${key}>`
    // console.log(makeTag);
  }
  value = makeTag;
  // console.log(value);
  return value;
}

console.log(exampleOne(basicData, fromJsonData)) // 값 잘 나옴

const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);
console.log(element); // 값 안나옴... 왜?

// HTML 문서가 없어서 안나오는 건가 해서 createElement를 이용해 작성해봐도 값이 안나옴
// const elementTwo = document.createElement('div');
// elementTwo.appendChild(document.children[0].children[1]);
// elementTwo.innerHTML = exampleOne(basicData, fromJsonData);

// 어떻게 짜야 할지 감이 잘 안옵니다
// 일반 객체는 만들 수 있는데, 객체 안에 객체를 넣어서 만드는 방법을 잘 모르겠습니다
class ExampleTwo {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
  }
  set first(value) {
    this._first = String(value);
  }

  set second(value) {
    this._second = String(value);
  }
  set third(value) {
    this._third = String(value);
  }
}

let test = new ExampleTwo("main", "second", "third");
console.log(test);

// class ExampleTwo {
//   constructor(headerContent, mainContent, footerContent, commonWidth, commonHeight, headerColor, mainColor, footerColor) {
//     this.header = {
//       content: headerContent,
//       style: {
//         width: commonWidth,
//         height: commonHeight,
//         backgroundColor: headerColor,
//       }
//     };
//     this.main = {
//       content: mainContent,
//       style: {
//         width: commonWidth,
//         height: commonHeight,
//         backgroundColor: mainColor,
//       }
//     };
//     this.footer = {
//       content: footerContent,
//       style: {
//         width: commonWidth,
//         height: commonHeight,
//         backgroundColor: footerColor,
//       }
//     };
//   }
//   set headerContent(value) {

//   }
// }

