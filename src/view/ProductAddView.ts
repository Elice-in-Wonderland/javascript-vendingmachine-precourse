import View from "../Component/View";

class ProductAddView extends View {
  public override template(): string {
    return `상품추가`;
  }
}

export default new ProductAddView();
