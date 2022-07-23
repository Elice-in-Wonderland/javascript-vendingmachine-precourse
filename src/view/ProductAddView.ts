import View from "../Component/View";
import Product from "../model/Product";
import { IState } from "../vc/MainVC";

class ProductAddView extends View {
  products: Array<Product>;

  constructor(props: IState) {
    super();
    this.products = props.products;
    this.container.innerHTML = this.template();
  }

  public override template(): string {
    if (!this.products) return ``;
    return `
        <div>
            <h2>상품 추가하기</h2>
            <input id="product-name-input"></input>
            <input id="product-price-input"></input>
            <input id="product-quantity-input"></input>
            <button id="product-add-button">추가하기</button>
        </div>
        <div>
            <h2>상품 현황</h2>
            <table border="1" width="500px">
                <th align="center">상품명</th>
                <th align="center">가격</th>
                <th align="center">수량</th>
                ${this.products
                  .map(
                    (product) => `
                        <tr align="center">
                            <td>${product.getName()}</td>
                            <td>${product.getPrice()}</td>
                            <td>${product.getQuantity()}</td>
                        </tr>
                    `
                  )
                  .join("")}
            </table>
        </div>
    `;
  }
}

export default ProductAddView;
