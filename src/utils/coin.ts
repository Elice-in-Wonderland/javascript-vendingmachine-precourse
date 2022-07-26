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
