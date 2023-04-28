// 1. CLI환경에서 입력을 받은 데이터가, html파일의 이름으로 사용된다.
// 2. html파일의 기본 요구사항
// a. title 태그의 기본 정보
// b. body 태그의 자식으로서 최상위 div #root 태그 사용 유무 선택가능한 방식
// c. 본문<p> 태그 내용 작성
// 3. 위 a,b,c 항을 모두 충족하는 형태의 CLI입력을 모두 받고, 입력데이터를 기초데이터로 HTML파일이 /result 디렉토리에 생성(create)

import inquirer from 'inquirer';
import { program } from 'commander';
import fs from 'fs';

inquirer
  .prompt([{
    type: 'input',
    name: 'title',
    message: 'title의 기본 정보 : '
  }, {
    type: 'confirm',
    name: 'root',
    message: 'root태그 사용 할건가?',
  },
  {
    type: 'input',
    name: 'content',
    message: '본문 <p>태그 내용 작성'
  }
  ])
  .then(ans => {
    let body = '';
    if(ans.root === true){
      body = '<div id="root"></div>'
    }
    const title = ans.title;
    const content = ans.content;
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>${title}</title>
</head>
<body>
  ${body}
  <p>${content}</p>
</body>
</html>
`
    program
      .argument('filename')
      .action((filename) => {
        fs.writeFile(`C:/Users/Administrator/Desktop/이경택/2023_04_28_inquirer_commander/result/${filename}.html`, html, (err) => {
          if (err) throw err;
          console.log(`${filename}.html created successfully`);
        })
      })
      .parse(process.argv)
  })

