declare namespace MissionUtils {
    class Random {
        static pickNumberInList(arr: Array<number>): number;
    }
}

interface ICoin {
    10: number;
    50: number;
    100: number;
    500: number;
}

interface IProduct {
    name: string;
    price: number;
    quantity: number;
}
