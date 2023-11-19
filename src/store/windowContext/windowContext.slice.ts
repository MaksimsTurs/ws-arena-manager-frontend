import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { WindowContextState } from "./windowContext.type";
import { WindowTabs } from "./windowContext.type";

const initialState: WindowContextState = {
  currentTab: 'Add Member!',
  isEditMode: false
}

const windowContextSlice = createSlice({
  name: 'window-context',
  initialState,
  reducers: {
    changeTab: (state, { payload }: PayloadAction<WindowTabs>) => {
      state.currentTab = payload
    },
    changeEditMode: (state, { payload }: PayloadAction<boolean>) => {
      state.isEditMode = payload
    }
  }
})

export const { changeTab, changeEditMode } = windowContextSlice.actions
export default windowContextSlice.reducer