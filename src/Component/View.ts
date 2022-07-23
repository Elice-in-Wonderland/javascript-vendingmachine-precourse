class View {
  protected container = document.createElement("div");

  constructor() {
    this.container.innerHTML = this.template();
  }

  public template() {
    return ``;
  }

  public getContainer() {
    return this.container;
  }
}

export default View;
