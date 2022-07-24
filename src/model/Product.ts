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

  public minusQuantity() {
    if (this.quantity <= 0) return;
    this.quantity -= 1;
  }

  public getName() {
    return this.name;
  }
  public getPrice() {
    return this.price;
  }
  public getQuantity() {
    return this.quantity;
  }
}

export default Product;
