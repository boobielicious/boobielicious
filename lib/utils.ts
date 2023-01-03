export const promiseSerial = async <T>(funcs: Array<() => Promise<T>>): Promise<T[]> =>
  await funcs.reduce(
    async (promise, func) => await promise.then(async result => await func().then(Array.prototype.concat.bind(result))),
    Promise.resolve([] as T[])
  )
