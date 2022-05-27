import { AxiosResponse } from 'axios';

import { instance } from './instance';

export const authAPI = {
  login(data: any) {
    return instance.post<any, AxiosResponse<any>>('auth/login', data);
  },
  logout() {
    return instance.delete<any, AxiosResponse<any>>('auth/me');
  },
};
// = { email: 'nya-admin@nya.nya', password: '1qazxcvBG' }
