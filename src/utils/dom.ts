type TargetType = Element | Document;

const domCreator = (creator: string): HTMLElement =>
  document.createElement(creator);

const domSelector = (
  selector: string,
  scope: TargetType = document,
): HTMLElement | null => {
  return scope.querySelector(selector);
};

export { domCreator, domSelector };
