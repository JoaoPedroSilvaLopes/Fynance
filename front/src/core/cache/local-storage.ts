import { GetStorage, RemoveStorage, SetStorage } from '../types/cache';

export const get: GetStorage = ({ key }) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};

export const set: SetStorage = ({ key, value }) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const remove: RemoveStorage = ({ key }) => {
  localStorage.removeItem(key);
};
