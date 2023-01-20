import { NotFoundComponent } from './../../../../safex/src/app/project/pages/not-found/not-found.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { AutofocusDirective } from '@trungk18/core/directives/autofocus.directive';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { QuillModule } from 'ngx-quill';
import { JiraControlModule } from '../jira-control/jira-control.module';
import { AddIssueModalComponent } from './components/add-issue-modal/add-issue-modal.component';
import { IssueAssigneesSelectComponent } from './components/add-issue-modal/issue-assignees-select/issue-assignees-select.component';
import { IssuePrioritySelectComponent } from './components/add-issue-modal/issue-priority-select/issue-priority-select.component';
import { IssueReporterSelectComponent } from './components/add-issue-modal/issue-reporter-select/issue-reporter-select.component';
import { IssueTypeSelectComponent } from './components/add-issue-modal/issue-type-select/issue-type-select.component';
import { BoardPageComponents } from './components/board';
import { IssueUtilComponents } from './components/issues';
import { NavigationComponents } from './components/navigation';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';
import { IssueResultComponent } from './components/search/issue-result/issue-result.component';
import { SearchDrawerComponent } from './components/search/search-drawer/search-drawer.component';
import { UserComponent } from './components/user/user.component';
import { NZ_JIRA_ICONS } from './config/icons';
import { BoardComponent } from './pages/board/board.component';
import { FullIssueDetailComponent } from './pages/full-issue-detail/full-issue-detail.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardReportingComponent } from './components/card-reporting/card-reporting.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    AutofocusDirective,
    ...NavigationComponents,
    ...BoardPageComponents,
    ...IssueUtilComponents,
    ProjectComponent,
    BoardComponent,
    SettingsComponent,
    FullIssueDetailComponent,
    SearchDrawerComponent,
    IssueResultComponent,
    AddIssueModalComponent,
    UserComponent,
    IssueTypeSelectComponent,
    IssuePrioritySelectComponent,
    IssueReporterSelectComponent,
    IssueAssigneesSelectComponent,
    ResizerComponent,
    DashboardComponent,
    CardReportingComponent,
    NotFoundPageComponent,
    UtilisateursComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzIconModule.forChild(NZ_JIRA_ICONS),
    NzToolTipModule,
    NzModalModule,
    NzDropDownModule,
    NzSelectModule,
    NzNotificationModule,
    NzDrawerModule,
    NzTableModule,
    NzPopoverModule,
    DragDropModule,
    TextFieldModule,
    FormsModule,
    ReactiveFormsModule,
    JiraControlModule,
    ContentLoaderModule,
    QuillModule,
    NzTableModule,
    NzButtonModule,
    NzCardModule,
    NzBadgeModule,
    NzSpinModule,
    NzFormModule

  ]
})
export class ProjectModule {}
