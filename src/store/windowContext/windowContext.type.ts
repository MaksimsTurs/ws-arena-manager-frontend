export type WindowTabs = 'Add Member!' | 'Guild List!' | 'Guild Statistic!' | 'My Guild!'

export type WindowContextState = {
  currentTab: WindowTabs  
  isEditMode: boolean
  isCompareMode: boolean
}