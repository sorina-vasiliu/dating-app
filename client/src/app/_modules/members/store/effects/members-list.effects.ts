import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

import { Observable, switchMap } from 'rxjs';
import { UserParams } from 'src/app/_models/userParams';
import { User } from 'src/app/_models/user';

import * as fromMembersListActions from '../actions/members-list.actions';

@Injectable()
export class MembersListEffects {
  @Effect()
  getMembers$ = this.actions$.pipe(
    ofType<fromMembersListActions.GetMembers>(
      fromMembersListActions.GET_MEMBERS
    ),
    switchMap(async () =>
      this.membersService.getMembers(new UserParams({} as User))
    ),
  );

  constructor(
    private membersService: MembersService,
    private actions$: Actions,
    private store: Store<{ membersList: { members: Member[] } }>
  ) {}
}
