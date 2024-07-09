import { create } from 'zustand';

export const getToken = () => {
  return sessionStorage.getItem('token') || null;
};


export const useAuthStore = create((set) => ({
  token: getToken(),
  setToken: (token) => {
    set({ token });
    sessionStorage.setItem('token', token);
  },
  logout: () => {
    set({ token: null });
    sessionStorage.removeItem('token');
  },
}));
