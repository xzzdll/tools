const fs = require('fs')
const account = require('./json/account.json');

const target = {};
let csvContent = `"key","en","cn"\n`;

Object.keys(account).forEach(key => {
  csvContent += `"${key}","${account[key].replace(/"/g,'""')}","${target[key] || ''}"\n`;
});

fs.writeFileSync('./dist/account.csv', csvContent, 'utf-8');
