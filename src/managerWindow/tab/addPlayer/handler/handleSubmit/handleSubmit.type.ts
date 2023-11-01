import store from "@/store/store"
import { AnyAction, CombinedState, ThunkDispatch } from "@reduxjs/toolkit"
import { Dispatch, SyntheticEvent } from "react"

export type HandleSubmitParams = {
  event: SyntheticEvent<HTMLFormElement>
  dispatch: ThunkDispatch<CombinedState<typeof store.dispatch>, undefined, AnyAction> & Dispatch<AnyAction>
  userData?: any[]
}