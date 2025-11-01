import Cookies from 'js-cookie';

const TOKEN = 'token';

export const getToken = () => {
  return Cookies.get(TOKEN);
};

export const saveToken = (token: string) => {
  Cookies.remove(TOKEN);
  Cookies.set(TOKEN, token, { expires: 60 * 60 * 24 });
};

export const destroyToken = () => {
  Cookies.remove(TOKEN);
};

export default {
  getToken,
  saveToken,
  destroyToken,
};
