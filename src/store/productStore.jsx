import { create } from 'zustand'

export const useProductStore = create((set) => ({
    searchKey: '',
    setSearchKey: (searchKey) => set(() => ({ searchKey: searchKey})),
  }))