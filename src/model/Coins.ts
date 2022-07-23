class Coins {
  private coin_500 = 0;
  private coin_100 = 0;
  private coin_50 = 0;
  private coin_10 = 0;

  public setCoinsByMoney(money: number) {
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

  public getTotalMoney() {
    return (
      this.get_500() * 500 +
      this.get_100() * 100 +
      this.get_50() * 50 +
      this.get_10() * 10
    );
  }

  public get_500() {
    return this.coin_500;
  }
  public get_100() {
    return this.coin_100;
  }
  public get_50() {
    return this.coin_50;
  }
  public get_10() {
    return this.coin_10;
  }
}

export default Coins;
