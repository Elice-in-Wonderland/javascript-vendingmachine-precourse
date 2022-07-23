import View from "../Component/View";
import { IState, Tproducts } from "../vc/MainVC";

class ProductAddView extends View {
  products: Tproducts = [];

  constructor(props: IState) {
    super();
    this.products = props.products;
    this.container.innerHTML = this.template();
  }

  public override template(): string {
    return `
        <div>
            <h2>상품 추가하기</h2>
            <form>
                <input id="product-name-input"></input>
                <input id="product-price-input"></input>
                <input id="product-quantity-input"></input>
                <button id="product-add-button">추가하기</button>
            </form>
        </div>
        <div>
            <h2>상품 현황</h2>
            <table border="1" width="500px">
                <th align="center">상품명</th>
                <th align="center">가격</th>
                <th align="center">수량</th>
                ${
                  this.products &&
                  this.products
                    .map(
                      (product) => `
                        <tr align="center">
                            <td>${product.getName()}</td>
                            <td>${product.getPrice()}</td>
                            <td>${product.getquantity()}</td>
                        </tr>
                    `
                    )
                    .join("")
                }
            </table>
        </div>
    `;
  }
}

export default ProductAddView;
