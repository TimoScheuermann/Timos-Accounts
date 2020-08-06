import axios from '@/axios';
import router from '@/router';
import store from '@/store';

function deleteCookie(name: string): void {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function getCookie(name: string): string | undefined {
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
  if (token) {
    axios
      .post('user/verify')
      .then(() => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const user = JSON.parse(window.atob(base64));
        store.commit('validate', user);

        const redirect = getCookie('timos-designs-redirect');
        if (redirect) {
          deleteCookie('timos-design-redirect');
          window.location.replace(redirect);
        } else {
          router.push({ name: 'settings' });
        }
      })
      .catch();
  }
}

export function logOut() {
  store.commit('logout');
  deleteCookie('timos-designs-auth');
  deleteCookie('timos-designs-redirect');
}
