export const loadingAwait = (delay, rejectDelay) => {
  return new Promise((resolve, reject) => {
    const fetchPromise = new Promise((res) => {
      setTimeout(() => {
        res(`Data fetched from`);
      }, delay);
    });

    const timeoutPromise = new Promise((_, rej) =>
      setTimeout(() => rej(new Error("Fetch timeout")), rejectDelay),
    );

    Promise.race([fetchPromise, timeoutPromise]).then(resolve).catch(reject);
  });
};
