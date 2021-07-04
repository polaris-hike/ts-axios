interface IOnFulfilled<V> {
  (value: V): V | Promise<V>;
}

interface IOnRejected {
  (error: any): any;
}

export interface Interceptor<V> {
  onFulfilled?: IOnFulfilled<V>;
  onRejected?: IOnRejected;
}

export default class AxiosInterceptorManager<V> {
  public interceptors: Array<Interceptor<V> | null> = []
  use(onFulfilled?: IOnFulfilled<V>, onRejected?: IOnRejected): number {
    this.interceptors.push({onFulfilled,onRejected});
    return this.interceptors.length - 1;
  }
  eject(id: number) {
    if(this.interceptors[id]) {
      this.interceptors[id] = null;
    }
  }
}




