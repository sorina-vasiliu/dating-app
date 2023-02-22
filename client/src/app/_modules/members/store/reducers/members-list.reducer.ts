import { Action } from '@ngrx/store';
import { Member } from 'src/app/_models/member';
import * as fromMembersListActions from '../actions/members-list.actions';

export interface State {
  members: Member[];
}

const initialState: State = {
  members: [],
};

export function membersListReducer(
  state: State | undefined = initialState,
  action: Action
) {
  switch (action.type) {
    case fromMembersListActions.GET_MEMBERS:
      return {
        ...state,
        members: [...state.members],
      };
    default:
      return state;
  }
}
