import Axios from './Axios';
import { AxiosInstance} from './types';
import {CancelToken, isCancel} from './cancel';

function createInstance() {
  const context = new Axios();

  // NOTE: 让 request 里面的 this 指向 context
  let instance = Axios.prototype.request.bind(context);
  instance = Object.assign(instance,Axios.prototype,context)
  return instance as AxiosInstance;
}

const axios = createInstance();
axios.cancelToken = new CancelToken();
axios.isCancel = isCancel;

export default axios

export * from './types'