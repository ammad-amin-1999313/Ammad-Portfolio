export const lazyDelay = (importFn, delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFn()), delay);
  });
};
