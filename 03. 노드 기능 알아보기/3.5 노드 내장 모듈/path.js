const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);  // 경로 구분자 (윈도 \, POSIX /)
console.log('path.delimiter:', path.delimiter);  // 환경 변수 구분자 (윈도 ;, POSIX :)
console.log('------------------------------');  // 파일이 위치한 폴더 경로
console.log('path.dirname():', path.dirname(string));  // 파일 이름
console.log('path.extname():', path.extname(string));  // 파일 확장자
console.log('path.basename():', path.basename(string)); // 파일 이름.확장자
console.log('path.basename - extname:', path.basename(string, path.extname(string)));  // 파일 이름만 basename(경로, 확장자)
console.log('------------------------------');
console.log('path.parse()', path.parse(string));  // // 파일 경로를 root, dir, base, ext, name으로 분리
console.log('path.format():', path.format({
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js',
}));  // path.parse() 한 객체를 파일 경로로 합침
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));  // \나 /를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환
console.log('------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));  // 절대경로면 true, 상대경로면 false
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));  // 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));  // (상대경로) 여러 인수를 넣으면 하나의 경로로 합침
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));  // (절대경로) 합치되, /를 루트로 인식하므로 앞의 경로를 무시함