import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const sideMenu = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    toggleMenuOpen: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { toggleMenuOpen } = sideMenu.actions
export default sideMenu.reducer