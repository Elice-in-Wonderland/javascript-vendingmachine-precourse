import View from "../Component/View";
import Coins from "../model/Coins";
import Product from "../model/Product";
import { IState } from "../vc/MainVC";

class ProductPurchaseView extends View {
  money: number;
  coins: Coins;
  products: Array<Product>;

  constructor(props: IState) {
    super();
    this.money = props.money;
    this.coins = props.coins;
    this.products = props.products;
    this.container.innerHTML = this.template();
  }

  public override template(): string {
    if (!this.coins || !this.products) return ``;
    return `
      <div>
        <h2>금액 투입</h2>
        <input id="charge-input"></input>
        <button id="charge-button">투입하기</button>
        <p id="charge-amount">투입한 금액:${this.money}원</p>
      </div>
      <div>
        <h2>구매할 수 있는 상품 현황</h2>
        <table border="1" width="500px">
          <th align="center">상품명</th>
          <th align="center">가격</th>
          <th align="center">수량</th>
          <th align="center">구매</th>
          ${this.products
            .map(
              (product) => `
                  <tr class="product-purchase-item" align="center">
                      <td data-product-name class="product-purchase-name">${product.getName()}</td>
                      <td data-product-price class="product-purchase-price">${product.getPrice()}</td>
                      <td data-product-quantity class="product-purchase-quantity">${product.getQuantity()}</td>
                      <td>
                        <button class="purchase-button">구매하기</button>
                      </td>
                  </tr>
              `
            )
            .join("")}
        </table>
      </div>
      <div>
        <h2>잔돈</h2>
        <button id="coin-return-button">반환하기</button>
        <table border="1" width="500px">
          <th align="center">동전</th>
          <th align="center">개수</th>
          <tr>
            <th>500원</th>
            <td id="coin-500-quantity" align="center"></td>
          </tr>
          <tr>
            <th>100원</th>
            <td id="coin-100-quantity" align="center"></td>
          </tr>
          <tr>
            <th>50원</th>
            <td id="coin-50-quantity" align="center"></td>
          </tr>
          <tr>
            <th>10원</th>
            <td id="coin-10-quantity" align="center"></td>
          </tr>
      </div>
    `;
  }
}

export default ProductPurchaseView;
