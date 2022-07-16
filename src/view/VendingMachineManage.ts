import { SELECTOR } from '../constants';
import { $ } from '../utils';
import View from './View';

class VendingMachineManageView extends View {
  constructor() {
    super($(SELECTOR.MAIN) as HTMLElement);
  }

  markUp() {
    return `
      <section>
        <h2>잔돈 충전하기</h2>
      </section>
    `;
  }
}

export default VendingMachineManageView;
