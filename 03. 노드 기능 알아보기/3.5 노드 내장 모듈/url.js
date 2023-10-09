const url = require('url');  // URL은 노드 내장 객체이기도 해서 require할 필요는 없음

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');  // 이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리됨
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));