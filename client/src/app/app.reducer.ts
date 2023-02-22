import { ActionReducerMap } from '@ngrx/store';

import * as memberList from './_modules/members/store/reducers/members-list.reducer';

export interface AppState {
  memberList: memberList.State;
}

export const appReducer: ActionReducerMap<any, any> = {
  memberList: memberList.membersListReducer
};