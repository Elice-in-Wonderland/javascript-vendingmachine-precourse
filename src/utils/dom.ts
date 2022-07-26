/* eslint-disable no-prototype-builtins */
import { tableStyle } from '../style';
export const printCoinPossession = (coins: ICoin) => {
    return `
        <table style='${tableStyle}'>
        <tr>
            <td style='${tableStyle}'>동전</td>
            <td style='${tableStyle}'>개수</td>
        </tr>
        <tr>
            <td style='${tableStyle}'>500원</td>
            <td id="vending-machine-coin-500-quantity" style='${tableStyle}'>${
        coins['500'] ? coins['500'] + '개' : ''
    }</td>
        </tr>
        <tr>
            <td style='${tableStyle}'>100원</td>
            <td id="vending-machine-coin-100-quantity" style='${tableStyle}'>${
        coins['100'] ? coins['100'] + '개' : ''
    }</td>
        </tr>
        <tr>
            <td style='${tableStyle}'>50원</td>
            <td id="vending-machine-coin-50-quantity" style='${tableStyle}'>${
        coins['50'] ? coins['50'] + '개' : ''
    }</td>
        </tr>
        <tr>
            <td style='${tableStyle}'>10원</td>
            <td id="vending-machine-coin-10-quantity
            " style='${tableStyle}'>${coins['10'] ? coins['10'] + '개' : ''}</td>
        </tr>
        </table>
        `;
};

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
