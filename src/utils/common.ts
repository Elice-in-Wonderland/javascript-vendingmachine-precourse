export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type FormDataObj = Record<string, string | undefined>;

const isFreezableObj = (value: any) =>
  value && typeof value === 'object' && !Object.isFrozen(value);

function deepFreeze(obj: any) {
  Object.keys(obj).forEach((prop) => {
    const value = obj[prop];
    if (isFreezableObj(value)) deepFreeze(value);
  });

  return Object.freeze(obj);
}

const removeFirstLetter = (selector: string) => selector.slice(1);

function formDataToObject(formData: FormData) {
  return [...formData.entries()].reduce((acc: FormDataObj, [key, value]) => {
    // input return type === string
    if (typeof value !== 'string' || value === '') return acc;

    acc[key] = value;
    return acc;
  }, {});
}

const every = <T>(f: (arg: T) => boolean, iter: any) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const a of iter) {
    if (!f(a)) return false;
  }
  return true;
};

const entries = <T>(obj: T): Entries<T> => Object.entries(obj) as any;

export { deepFreeze, removeFirstLetter, formDataToObject, every, entries };
