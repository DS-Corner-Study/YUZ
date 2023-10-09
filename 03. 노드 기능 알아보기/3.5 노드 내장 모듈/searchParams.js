// searchParams.js
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));  // 키에 해당하는 모든 값 (배열)
console.log('searchParams.get():', myURL.searchParams.get('limit'));  // 키에 해당하는 첫 번째 값
console.log('searchParams.has():', myURL.searchParams.has('page'));  // 해당 키가 있는지 없는지 검사

console.log('searchParams.keys():', myURL.searchParams.keys());  // searchParams의 모든 키(key)를 iterator 객체로 가져옴 (ES2015 문법)
console.log('searchParams.values():', myURL.searchParams.values());  // searchParams의 모든 값(value)을 iterator 객체로 가져옴

myURL.searchParams.append('filter', 'es3');  // 해당 키 추가. 중복값 상관없이 추가됨
myURL.searchParams.append('filter', 'es5');  
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');  // 같은 키의 값을 모두 지우고 새로 추가함
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');  // 키 제거
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();  // 조작한 searchParams 객체를 다시 문자열로 만듦. 이 문자열을 search에 대입하면 주소 객체에 반영됨.