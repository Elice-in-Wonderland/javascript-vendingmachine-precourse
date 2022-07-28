/* eslint-disable no-restricted-syntax */
function $(selector: string, scope = document) {
  return scope.querySelector(selector);
}

function $$(selector: string, scope: HTMLElement | Document = document) {
  return [...scope.querySelectorAll(selector)];
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
    const delegatedTarget = (event.target as HTMLElement).closest(selector);

    if (!delegatedTarget) return;

    handler.call(event.target, event);
  };

  on(target, eventName, emitEvent);
}

function emit(target: HTMLElement, typeArg: string, detail: any) {
  const event = new CustomEvent(typeArg, { detail });
  target.dispatchEvent(event);
}

function getDataSet({ children }: HTMLElement, properties: Iterable<string>) {
  const obj: Record<string, string> = {};

  for (const property of properties) {
    for (const child of children) {
      const nextValue = (child as HTMLElement).dataset[property];

      if (nextValue) {
        obj[property] = nextValue;
        break;
      }
    }
  }
  return obj;
}

export { $, $$, createElement, on, delegate, emit, getDataSet };
