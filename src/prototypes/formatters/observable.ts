export const observableHandler = <T>(data: any): Promise<T> => {
  if (!data.subscribe) return data;

  return new Promise((resolve, reject) => {
    data.subscribe({
      next(x: T) {
        resolve(x);
      },
      error(err) {
        reject(err);
      },
    });
  });
};
