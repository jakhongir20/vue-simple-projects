export function localStorageGetItem(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
}

export function localStorageSetItem(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function localStorageRemoveItem(key: string) {
    return localStorage.removeItem(key);
}
