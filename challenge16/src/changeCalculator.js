

class changeCalculator {
    coins = [];

    constructor(coins, coinsCount) {
        for (let i = coins.length - 1, j = 0; i >= 0; i--, j++) {
            this.coins[j] = {
                value: coins[i],
                available:coinsCount[i],
                used: 0
            };
        }
    }

    changeCoins(amount) {
        return this.computeNeededCoins(amount, 0, amount);
    }

    computeNeededCoins(amount, coinsUsed, remainingAmount) {
        if (remainingAmount === 0) {
            return coinsUsed;
        }

        if (remainingAmount < 0) {
            return -1;
        }

        for (let i = 0; i < this.coins.length; i++) {
            this.coins[i].used++;
            if (this.coins[i].used <= this.coins[i].available) {
                let currentSolution = this.computeNeededCoins(amount, coinsUsed + 1, remainingAmount - this.coins[i].value);
                if (currentSolution > 0) {
                    return currentSolution;
                }
            }
            this.coins[i].used--;
        }

        return -1;
    }
}

module.exports = changeCalculator;