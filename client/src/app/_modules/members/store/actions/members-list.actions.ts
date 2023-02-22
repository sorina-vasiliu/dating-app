import { Action } from '@ngrx/store';
import { Member } from 'src/app/_models/member';

export const ADD_MEMBER = 'ADD_MEMBER';
export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';

export class GetMembers implements Action {
  readonly type = GET_MEMBERS;
}

export class GetMembersSuccess implements Action {
  readonly type = GET_MEMBERS_SUCCESS;
  constructor(public payload: Member[]) {}
}

export class AddMember implements Action {
  readonly type = ADD_MEMBER;
  constructor(public payload: Member) {}
}

export type MembersListActions = GetMembers | AddMember;
