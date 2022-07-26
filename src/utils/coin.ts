export const randomChargeCoin = (money: number) => {
    const coinObj = {
        10: 0,
        50: 0,
        100: 0,
        500: 0,
    };
    while (money > 0) {
        const randomNumber = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
        if (money / randomNumber >= 1) {
            coinObj[randomNumber] = coinObj[randomNumber] + 1;
            money -= randomNumber;
        }
    }
    return coinObj;
};

export const returnCoin = (money: number, coins: ICoin) => {
    const sortCoin = Object.entries(coins).reverse();
    const returnCoins = {};
    let totalReturnMoney = 0;
    sortCoin.forEach(([key, value]) => {
        const keyCoin = Number(key);
        const moneyCount = Math.floor(money / keyCoin);
        if (moneyCount < 0) {
            return;
        }
        if (moneyCount < value) {
            coins[key] -= moneyCount;
            money -= moneyCount * keyCoin;
            totalReturnMoney += moneyCount * keyCoin;
            returnCoins[key] = moneyCount;
            return;
        }
        coins[key] = 0;
        money -= Number(value) * keyCoin;
        totalReturnMoney += Number(value) * keyCoin;
        returnCoins[key] = Number(value);
    });
    return { money, coins, returnCoins, totalReturnMoney };
};
