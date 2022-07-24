class View {
  protected container: HTMLElement = document.createElement("div");

  constructor() {
    this.container.innerHTML = this.template();
  }

  protected template() {
    return ``;
  }

  public getContainer() {
    return this.container;
  }
}

export default View;
