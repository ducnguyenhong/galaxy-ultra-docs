import { atom, DefaultValue, selector } from 'recoil';

const darkMode = atom<boolean>({
  key: 'DARK_MODE',
  default: new Promise<boolean>((resolve) => {
    const theme = typeof window !== 'undefined' && localStorage ? localStorage.getItem('gu-theme') : 'light';
    resolve(theme === 'dark');
  }),
});

export const darkModeSate = selector<boolean>({
  key: 'DARK_MODE_STATE',

  get: ({ get }) => {
    const state = get(darkMode);
    return state;
  },

  set: ({ set }, data) => {
    if (data instanceof DefaultValue) {
      return;
    }
    localStorage.setItem('gu-theme', data ? 'dark' : 'light');
    set(darkMode, data);
  },
});
