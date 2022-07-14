import VendingMachine from './model/VendingMachine';

class Controller {
  model: VendingMachine;

  view: any;

  constructor(model: VendingMachine, view) {
    this.model = model;
    this.view = view;
  }
  // TODO: 버블링을 활용한 탭 메뉴 핸들링
  // 상품 관리, 잔돈 충전, 상품 구매

  // TODO: 렌더링할 때 모델의 정보가 필요해서 모델을 주입
  // TODO: 뷰에서는 전달된 모델로 화면에 렌더링
}

export default Controller;
