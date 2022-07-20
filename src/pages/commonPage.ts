class CommonPage {
  pageElement: HTMLElement;

  createPageElement(): HTMLElement {
    const newNode: HTMLElement = domCreator('div');
    newNode.innerHTML = 'buyProductPage';

    return newNode;
  }

  addPageElement(newNode: HTMLElement): void {
    this.pageElement?.appendChild(newNode);
  }
}
export default CommonPage;
