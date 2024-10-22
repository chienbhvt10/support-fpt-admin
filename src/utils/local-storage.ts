class LocalStorageFunction {
  public get(key: string, fallback: any = null) {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  public set(key: string, value: object | string, callback?: () => void) {
    window.localStorage.setItem(key, JSON.stringify(value));

    if (callback) {
      callback();
    }
  }

  public remove(key: string, callback?: () => void) {
    window.localStorage.removeItem(key);

    if (callback) {
      callback();
    }
  }
}
const LocalStorage = new LocalStorageFunction();
export default LocalStorage;
