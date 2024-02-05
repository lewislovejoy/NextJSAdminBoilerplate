import { create } from 'zustand'
// import omit from 'lodash-es/omit'

export const useLoginStore = create((set) => ({
  user: null,
  login: (newUser) => set({ user: newUser }),
  logout: () => set({ user: null }),

  //logout2: () => set((state) => omit(state, ['user']), true),
  //login2: (newUser) => set((state) => ({ user: newUser })),
}))
