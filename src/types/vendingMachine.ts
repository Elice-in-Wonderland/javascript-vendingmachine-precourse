interface VendingMachine {
  inputAmount: number;
  coins: Record<string, number>;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export { VendingMachine, Product };
