/* eslint-disable no-prototype-builtins */
import { tableStyle } from '../style';

export const getInputValue = (target: HTMLElement, id: string) => {
    return (target.querySelector(`#${id}`) as HTMLInputElement).value;
};

export const addEvent = (container, eventType: string, selector: string, handler: (event: Event) => void) => {
    const children = [...container.querySelectorAll(selector)];
    const isTarget = (target) => children.includes(target) || target.closest(selector);
    container.addEventListener(eventType, (event: Event) => {
        if (!isTarget(event.target)) return false;
        handler(event);
    });
};
