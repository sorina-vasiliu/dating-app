import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberMessagesComponent } from './components/member-messages/member-messages.component';
import { PhotoEditorComponent } from './components/photo-editor/photo-editor.component';
import { MembersRoutingModule } from './members-routing.module';
@NgModule({
  declarations: [
    MemberListComponent,
    MemberDetailComponent,
    MemberCardComponent,
    MemberEditComponent,
    MemberMessagesComponent,
    PhotoEditorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MembersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MemberCardComponent],
})
export class MembersModule {}
