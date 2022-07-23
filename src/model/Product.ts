class Product {
  private name: string;
  private price: number;
  private qty: number;

  constructor(name: string, price: number, qty: number) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }

  public getInfo() {
    return { name: this.getName(), price: this.getPrice(), qty: this.getQty() };
  }
  private getName() {
    return this.name;
  }
  private getPrice() {
    return this.price;
  }
  private getQty() {
    return this.qty;
  }
}

export default Product;
