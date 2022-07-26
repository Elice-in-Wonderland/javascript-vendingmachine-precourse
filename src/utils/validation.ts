import { VALIDATION_MESSAGE, MINIMUM_QUANTITY } from '../utils/constants';
export const productValidation = (product: IProduct, products: IProduct[]) => {
    const { name, price, quantity } = product;
    if (!name) {
        alert(VALIDATION_MESSAGE.EMPTY_INPUT);
        return false;
    }
    if (duplicateName(name, products)) {
        alert(VALIDATION_MESSAGE.DUPLICATE_NAME);
        return false;
    }
    if (price < 0 || price % 10 !== 0) {
        alert(VALIDATION_MESSAGE.NO_ROUNDED_VALUE_AND_OVER_ZERO);
        return false;
    }
    if (quantity < MINIMUM_QUANTITY) {
        alert(VALIDATION_MESSAGE.UNDER_ONE);
        return false;
    }
    return true;
};

const duplicateName = (productName: string, products: IProduct[]) => {
    return products.filter((item) => item.name === productName).length !== 0 ? true : false;
};
