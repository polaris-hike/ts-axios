import axios, { AxiosResponse} from './axios';

const baseURL = 'http://localhost:8080';

interface User {
  name: string;
  password: string;
}

let user:User = {
  name: 'wuxuwei',
  password: '123456'
}

const cancelToken = axios.cancelToken;
const source = cancelToken.source()


axios({
  method: 'post',
  url: baseURL + '/post',
  headers: {
    'content-type': 'application/json',
    'name': 'wuxuwei'
  },
  cancelToken: source.token,
  data: user
}).then((res:AxiosResponse<User>)=>{
  console.log(res);
},err=>{
  console.log(err);
})

source.cancel('用户取消了请求')


