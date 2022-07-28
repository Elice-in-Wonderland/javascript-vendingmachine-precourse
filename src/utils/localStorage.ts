const getItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (err) {
    return null;
  }
};

const setItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
