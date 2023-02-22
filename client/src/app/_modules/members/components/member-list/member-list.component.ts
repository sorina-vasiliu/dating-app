import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { UserParams } from 'src/app/_models/userParams';
import { MembersService } from 'src/app/_services/members.service';

import * as fromMembersListActions from '../../store/actions/members-list.actions';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  members$: Observable<{ members: Member[] }> | undefined;
  members: Member[] = [];
  pagination: Pagination | undefined;
  userParams: UserParams | undefined;
  genderList = [
    { value: 'male', display: 'Males' },
    { value: 'female', display: 'Females' },
  ];

  constructor(
    private memberService: MembersService,
    private store: Store<{ membersList: { members: Member[] } }>
  ) {
    this.userParams = this.memberService.getUserParams();
  }

  ngOnInit(): void {
    // this.memberService.getMembers(new UserParams({} as User)).subscribe(() =>
    //   this.store
    //     .select('membersList')
    //     .pipe(
    //       map((members) => {
    //         return members.members;
    //       })
    //     )
    //     .subscribe((members) => (this.members = members))
    // );
    debugger;
    this.store.dispatch(new fromMembersListActions.GetMembers());
    this.members$ = this.store.select('membersList');

    // this.loadMembers();
  }

  loadMembers() {
    // this.store.dispatch(new fromMembersListActions.GetMembers());
    // if (this.userParams) {
    //   this.memberService.setUserParams(this.userParams);
    //   this.memberService.getMembers(this.userParams).subscribe({
    //     next: (response) => {
    //       if (response.result && response.pagination) {
    //         this.members = response.result;
    //         this.pagination = response.pagination;
    //       }
    //     },
    //   });
    // }
  }

  resetFilters() {
    this.userParams = this.memberService.resetUserParams();
    this.loadMembers();
  }

  pageChanged(event: any) {
    if (this.userParams && this.userParams?.pageNumber !== event.page) {
      this.userParams.pageNumber = event.page;
      this.memberService.setUserParams(this.userParams);
      this.loadMembers();
    }
  }
}
