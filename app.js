// 1. CLI환경에서 입력을 받은 데이터가, html파일의 이름으로 사용된다.
// 2. html파일의 기본 요구사항
// a. title 태그의 기본 정보
// b. body 태그의 자식으로서 최상위 div #root 태그 사용 유무 선택가능한 방식
// c. 본문<p> 태그 내용 작성
// 3. 위 a,b,c 항을 모두 충족하는 형태의 CLI입력을 모두 받고, 입력데이터를 기초데이터로 HTML파일이 /result 디렉토리에 생성(create)

import inquirer from 'inquirer';
import { program } from 'commander';
import fs from 'fs';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`;


program
  .arguments('filename')
  .action((filename) => {
    fs.writeFile(`${filename}.html`, html, (err) => {
      if (err) throw err;
      console.log(`${filename}.html created successfully`);
    });
  });

program.parse(process.argv);

inquirer
  .prompt([{
    type: 'input',
    name: 'title',
    message: 'html title : '
  },
  {
    type: 'input',
    name : 'content',
    message: 'html content: '
  }
])
