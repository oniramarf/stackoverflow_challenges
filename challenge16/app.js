
const fs = require('fs');
const calc = require('./src/changeCalculator');

fs.readFile('./input/Challenge16.txt', 'utf8', (err, data) => {
    let inputData = JSON.parse(data);
    let result = [];

    for (let i = 0; i < inputData.length; i++) {
        let c = new calc(inputData[i][0], inputData[i][1]);
        result.push(c.changeCoins(inputData[i][2]));
    }

    console.log(result);
});