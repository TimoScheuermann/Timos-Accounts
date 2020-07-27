import router from '@/router';
import store from '@/store';
import * as jwt from 'jsonwebtoken';
import { User } from './models';

function deleteCookie(name: string): void {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function getCookie(name: string): string | undefined {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return undefined;
}

export async function validateAndAutoLogin() {
  const token = getCookie('timos-designs-auth');
  jwt.verify(
    token,
    process.env.VUE_APP_JWT_SECRET,
    (err: Record<string, string>, decoded: User) => {
      if (!err) {
        store.commit('validate', decoded);
      } else {
        console.error(err.message);
      }
    }
  );
  const redirect = getCookie('timos-design-redirect');
  if (redirect) {
    deleteCookie('timos-design-redirect');
    window.location.replace(redirect);
  } else {
    router.push({ name: 'settings' });
  }
}

export function logOut() {
  store.commit('logout');
  deleteCookie('timos-designs-auth');
  deleteCookie('timos-design-redirect');
}
