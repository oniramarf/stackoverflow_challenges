require('chai').should();

const changeCalculator = require('../src/changeCalculator');

describe('Test simple cases', function() {

    // [[1], [100], 73]
    it('Simple case with one coin of easy value, affordable', function () {
        let coins = [1];
        let coinsAvailable = [100];
        let amount = 73;

        let c = new changeCalculator(coins, coinsAvailable);
        let result = c.changeCoins(amount);
        result.should.be.a('number');
        result.should.equal(73);
    })

    // [[7],[2],21]
    it('Simple case with one coin of easy value, not affordable', function () {
        let coins = [7];
        let coinsAvailable = [2];
        let amount = 21;

        let c = new changeCalculator(coins, coinsAvailable);
        let result = c.changeCoins(amount);
        result.should.be.a('number');
        result.should.equal(-1);
    })

    // [[1,3,4,5],[2,2,1,1],12]
    it('Simple case with multiple coins available, affordable', function () {
        let coins = [1,3,4,5];
        let coinsAvailable = [2,2,1,1];
        let amount = 12;

        let c = new changeCalculator(coins, coinsAvailable);
        let result = c.changeCoins(amount);
        result.should.be.a('number');
        result.should.equal(3);
    })

    // [[1,5,10,20],[5,2,1,1],23]
    it('More complex case, affordable', function () {
        let coins = [1,5,10,20];
        let coinsAvailable = [5,2,1,1];
        let amount = 23;

        let c = new changeCalculator(coins, coinsAvailable);
        let result = c.changeCoins(amount);
        result.should.be.a('number');
        result.should.equal(4);
    })

    // [[2,4,7,10],[2,1,1,1],18]
    it('Another complex case, affordable', function () {
        let coins = [2,4,7,10];
        let coinsAvailable = [2,1,1,1];
        let amount = 18;

        let c = new changeCalculator(coins, coinsAvailable);
        let result = c.changeCoins(amount);
        result.should.be.a('number');
        result.should.equal(4);
    })

    // [[2,5,7],[1,1,1],10]
    it('More complex case, not affordable', function () {
        let coins = [2,5,7];
        let coinsAvailable = [1,1,1];
        let amount = 10;

        let c = new changeCalculator(coins, coinsAvailable);
        let result = c.changeCoins(amount);
        result.should.be.a('number');
        result.should.equal(-1);
    })

    // [[2,5,7,10],[2,1,1,1],16]
    it('Very complex case, affordable', function () {
        let coins = [2,5,7,10];
        let coinsAvailable = [2,1,1,1];
        let amount = 16;

        let c = new changeCalculator(coins, coinsAvailable);
        let result = c.changeCoins(amount);
        result.should.be.a('number');
        result.should.equal(4);
    })
})