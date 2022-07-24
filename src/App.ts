import { $ } from "./util/index";
import HeaderVC from "./vc/HeaderVC";
import MainVC from "./vc/MainVC";
import { TabType } from "./vc/MainVC";

class App {
  root: HTMLDivElement;
  HeaderVC: HeaderVC;
  MainVC: MainVC;
  selectedTab!: TabType;

  constructor() {
    this.root = $("#app") as HTMLDivElement;
    this.HeaderVC = new HeaderVC(this.onSelectTab.bind(this));
    this.MainVC = new MainVC();
    this.render();
  }

  onSelectTab(newTab: TabType) {
    if (this.selectedTab === newTab) return;
    this.selectedTab = newTab;
    this.MainVC.changeView(this.selectedTab);
    this.render();
  }

  render() {
    this.root.innerHTML = "";
    this.root.appendChild(this.HeaderVC.getContainer());
    this.root.appendChild(this.MainVC.getContainer());
  }
}

export default App;
