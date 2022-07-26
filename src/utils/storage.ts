export const setLocalStorage = (key: string, item) => {
    localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key: string, initValue) => {
    const localStorageData = localStorage.getItem(key);
    return localStorageData ? JSON.parse(localStorageData) : initValue;
};
