import Cookies from "universal-cookie";
const cookie = new Cookies();

export const setCookie = (key, value) => {
  cookie.set(key, value, {
    path: "/",
  });
};

export const removeCookie = (key) => {
  cookie.remove(key, {
    path: "/",
  });
};

export const getCookie = (key) => {
  return cookie.get(key);
};
