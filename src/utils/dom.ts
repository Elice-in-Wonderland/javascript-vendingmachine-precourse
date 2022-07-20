type TargetType = Element | Document;

const domCreator = (creator: string): HTMLElement =>
  document.createElement(creator);

const domSelector = (
  selector: string,
  scope: TargetType = document,
): HTMLElement | null => {
  return scope.querySelector(selector);
};

const addEventListenerToTarget = (
  eventTarget: TargetType | null,
  type: string,
  listener: (event: Event) => void,
) => {
  if (eventTarget == null) return;

  eventTarget.addEventListener(type, listener);
};

export { domCreator, domSelector, addEventListenerToTarget };
