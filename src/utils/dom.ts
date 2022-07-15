function $(selector: string, scope = document) {
  return scope.querySelector(selector);
}

function $$(selector: string, scope: HTMLElement | Document = document) {
  return scope.querySelectorAll(selector);
}

function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attributes: Record<string, any> = {},
) {
  const ele = document.createElement(tagName);

  Object.entries(attributes).forEach(([key, value]) => {
    ele.setAttribute(key, value);
  });

  return ele;
}

function on(
  target: HTMLElement,
  eventName: string,
  handler: (event: Event) => void,
) {
  target.addEventListener(eventName, handler);
}

function delegate(
  target: HTMLElement,
  eventName: string,
  selector: string,
  handler: (event: Event) => void,
) {
  const emitEvent = (event: Event) => {
    const potentialElements = $$(selector, target);

    // eslint-disable-next-line no-restricted-syntax
    for (const potentialElement of potentialElements) {
      if (potentialElement === event.target) {
        handler.call(event.target, event);
        return;
      }
    }
  };

  on(target, eventName, emitEvent);
}

export { $, $$, createElement, on, delegate };
