const getLocalStorageItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

const setLocalStorageItem = <Type>(key: string, value: Type): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};

export { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem };
