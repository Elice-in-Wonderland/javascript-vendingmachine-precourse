interface IProductProps {
  name: string;
  price: number;
  quantity: number;
}

class Product {
  private name: string;
  private price: number;
  private quantity: number;

  constructor({ name, price, quantity }: IProductProps) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  public getName() {
    return this.name;
  }
  public getPrice() {
    return this.price;
  }
  public getquantity() {
    return this.quantity;
  }
}

export default Product;
