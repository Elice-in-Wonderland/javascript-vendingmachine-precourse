import { SELECTOR } from '../../constants';
import { Coin, Product, VendingMachine } from '../../types/vendingMachine';
import { removeFirstLetter } from '../../utils';

class Template {
  getProductPurchaseView(vendingMachine: VendingMachine) {
    return `
      <section>
        <h2>금액 투입</h2>
        <form id=${removeFirstLetter(SELECTOR.PRODUCT_PURCHASE.CHARGE_FORM)}>
          <input name="amount" type="number" id=${removeFirstLetter(
            SELECTOR.PRODUCT_PURCHASE.CHARGE_INPUT,
          )} placeholder="투입할 금액"/>
          <button id=${removeFirstLetter(
            SELECTOR.PRODUCT_PURCHASE.CHARGE_BUTTON,
          )}>투입하기</button>
        </form>
        <p>투입한 금액: <span id=${removeFirstLetter(
          SELECTOR.PRODUCT_PURCHASE.CHARGE_AMOUNT,
        )}>${vendingMachine.inputAmount}원</span></p>
      </section>
      ${this.getProductList(vendingMachine.products)}
      ${this.getChange(vendingMachine.changeCoins)}
    `;
  }

  getProductList(products: Product[]) {
    return `
      <section>
        <h2>구매할 수 있는 상품 현황</h2>
        <table>
          <tr>
            <th>상품명</th><th>가격</th><th>수량</th><th>구매</th>
          </tr>
          ${products.map((product) => this.getProductItem(product)).join('')}
        </table>
      </section>
    `;
  }

  getProductItem({ name, price, quantity }: Product) {
    return `
      <tr class=${removeFirstLetter(SELECTOR.PRODUCT.MANAGE_ITEM)}>
        <td 
          data-product-name=${name} 
          class=${removeFirstLetter(SELECTOR.PRODUCT.PURCHASE_NAME)}
        >
          ${name}
        </td>
        <td 
          data-product-price=${price} 
          class=${removeFirstLetter(SELECTOR.PRODUCT.PURCHASE_PRICE)}
        >
          ${price}
        </td>
        <td 
          data-product-quantity=${quantity} 
          class=${removeFirstLetter(SELECTOR.PRODUCT.PURCHASE_QUANTITY)}
        >
          ${quantity}
        </td>
        <td class=${removeFirstLetter(SELECTOR.PRODUCT.PURCHASE_BUTTON)}>
        ${
          quantity > 0
            ? `
          <button class=${removeFirstLetter(
            SELECTOR.PRODUCT.PURCHASE_BUTTON,
          )}>구매하기</button>
        
        `
            : `
          <button disabled class=${removeFirstLetter(
            SELECTOR.PRODUCT.PURCHASE_BUTTON,
          )}>구매하기</button>
        `
        }
        </td>
      </tr>
    `;
  }

  getChange(coins: Record<Coin, number>) {
    return `
      <section>
        <h2>잔돈</h2>
        <button id=${removeFirstLetter(
          SELECTOR.PRODUCT_PURCHASE.COIN_RETURN_BUTTON,
        )}>반환하기</button>
        <table>
          <tr>
            <th>동전</th><th>개수</th>
          </tr>
          <tr>
            <th>500원</th><td id=${removeFirstLetter(
              SELECTOR.PRODUCT_PURCHASE.COIN_500_QUANTITY,
            )}>${coins[500]}개</td>
          </tr>
          <tr>
            <th>100원</th><td id=${removeFirstLetter(
              SELECTOR.PRODUCT_PURCHASE.COIN_100_QUANTITY,
            )}>${coins[100]}개</td>
          </tr>
          <tr>
            <th>50원</th><td id=${removeFirstLetter(
              SELECTOR.PRODUCT_PURCHASE.COIN_50_QUANTITY,
            )}>${coins[50]}개</td>
          </tr>
          <tr>
            <th>10원</th><td id=${removeFirstLetter(
              SELECTOR.PRODUCT_PURCHASE.COIN_10_QUANTITY,
            )}">${coins[10]}개</td>
          </tr>
        </table>
      </section>
    `;
  }
}

export default Template;
