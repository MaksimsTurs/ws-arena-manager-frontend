import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { WindowContextState } from "./windowContext.type";
import { WindowTabs } from "./windowContext.type";

const initialState: WindowContextState = {
  currentTab: 'My Guild!',
  isEditMode: false,
  isCompareMode: false
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
    },
    changeCompareMode: (state, { payload }: PayloadAction<boolean>) => {
      state.isCompareMode = payload
    }
  }
})

export const { changeTab, changeEditMode, changeCompareMode } = windowContextSlice.actions
export default windowContextSlice.reducer