export type WindowTabs = 'Add Member!' | 'Guild List!' | 'Guild Statistic!'

export type WindowContextState = {
  currentTab: WindowTabs  
  isEditMode: boolean
}