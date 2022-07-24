class Coins {
  private coin_500 = 0;
  private coin_100 = 0;
  private coin_50 = 0;
  private coin_10 = 0;

  public setCoinsByMoney(money: number) {
    // TODO: 랜덤함수 구현
    if (money >= 500) {
      this.coin_500 += ~~(money / 500);
      money = money % 500;
    }
    if (money >= 100) {
      this.coin_100 += ~~(money / 100);
      money = money % 100;
    }
    if (money >= 50) {
      this.coin_50 += ~~(money / 50);
      money = money % 50;
    }
    if (money >= 10) {
      this.coin_10 += ~~(money / 10);
      money = money % 10;
    }
  }

  public getReturnedCoins(money: number) {
    let { coin_500, coin_100, coin_50, coin_10 } = this.getAllCoins();
    let return_500 = 0;
    let return_100 = 0;
    let return_50 = 0;
    let return_10 = 0;

    if (money >= 500) {
      const quot = ~~(money / 500);
      if (quot > coin_500) {
        return_500 = coin_500;
        money -= return_500 * 500;
        coin_500 = 0;
      } else {
        return_500 = quot;
        coin_500 -= quot;
        money -= money % 500;
      }
    }
    if (money >= 100) {
      const quot = ~~(money / 100);
      if (quot > coin_100) {
        return_100 = coin_100;
        money -= return_100 * 100;
        coin_100 = 0;
      } else {
        return_100 = quot;
        coin_100 -= quot;
        money -= money % 100;
      }
    }
    if (money >= 50) {
      const quot = ~~(money / 50);
      if (quot > coin_50) {
        return_50 = coin_50;
        money -= return_50 * 50;
        coin_50 = 0;
      } else {
        return_50 = quot;
        coin_50 -= quot;
        money -= money % 50;
      }
    }
    if (money >= 10) {
      const quot = ~~(money / 10);
      if (quot > coin_10) {
        return_10 = coin_10;
        money -= return_10 * 10;
        coin_10 = 0;
      } else {
        return_10 = quot;
        coin_10 -= quot;
        money -= money % 10;
      }
    }

    this.coin_500 = coin_500;
    this.coin_100 = coin_100;
    this.coin_50 = coin_50;
    this.coin_10 = coin_10;

    return {
      coin_500: return_500,
      coin_100: return_100,
      coin_50: return_50,
      coin_10: return_10,
    };
  }

  public getTotalMoney() {
    return (
      this.get_500() * 500 +
      this.get_100() * 100 +
      this.get_50() * 50 +
      this.get_10() * 10
    );
  }

  public getAllCoins() {
    return {
      coin_500: this.get_500(),
      coin_100: this.get_100(),
      coin_50: this.get_50(),
      coin_10: this.get_10(),
    };
  }

  private get_500() {
    return this.coin_500;
  }
  private get_100() {
    return this.coin_100;
  }
  private get_50() {
    return this.coin_50;
  }
  private get_10() {
    return this.coin_10;
  }
}

export default Coins;
