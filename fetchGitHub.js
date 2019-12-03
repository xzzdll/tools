const shell = require("shelljs");
const fs = require('fs')
const exec = require('child_process').exec;

shell.cd(`../workSpace`)

const files = fs.readdirSync('./')
files.forEach(function (item, index) {
  let stat = fs.lstatSync(`./${item}`)
  if (stat.isDirectory() === true) {
    exec(`cd ./${item};git pull`, function (error, stdout, stderr) {
      if (error) {
        console.error('error: ' + error);
        return;
      }
      console.log(`已经成功拉取${item}`)
    });
  }
})