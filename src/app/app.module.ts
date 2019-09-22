import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversitiesComponent } from './universities/universities.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { UniversityCardComponent } from './university-card/university-card.component';
import { FooterComponent } from './footer/footer.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { ChatSideBarComponent } from './chat-side-bar/chat-side-bar.component';
import { FacultiesCardComponent } from './faculties-card/faculties-card.component';
import { ResponsiblePersonComponent } from './responsible-person/responsible-person.component';
import { FacultyDetailsComponent } from './faculty/faculty-details/faculty-details.component';
import { StudyProgrammeDetailsComponent } from './faculty/study-programme-details/study-programme-details.component';
import { UniversityOverviewComponent } from './university-overview/university-overview.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';



import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SilabusComponent } from './silabus/silabus.component';
import { AnnouncementComponent } from './announcement/announcement.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { TeachingMaterialComponent } from './teaching-material/teaching-material.component';

import { TreeModule } from 'angular-tree-component';

import { NgScrollbarModule } from 'ngx-scrollbar';


import { CommonModule } from '@angular/common';
import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProfessorComponent } from './administrator/create-professor/create-professor.component';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminNavBarComponent } from './administrator/admin-nav-bar/admin-nav-bar.component';
import { AdminSidebarWrapperComponent } from './administrator/admin-sidebar-wrapper/admin-sidebar-wrapper.component';
import { ListProfessorComponent } from './administrator/list-professor/list-professor.component';
import { UpdateEmployeeComponent } from './administrator/update-employee/update-employee.component';
import { ListEmployeeComponent } from './administrator/list-employee/list-employee.component';
import { UpdateProfessorComponent } from './administrator/update-professor/update-professor.component';
import { CreateEmployeeComponent } from './administrator/create-employee/create-employee.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfesorNavBarComponent } from './profesor/profesor-nav-bar/profesor-nav-bar.component';
import { PregledStudenataComponent } from './profesor/pregled-studenata/pregled-studenata.component';
import { ProfesorSidebarWrapperComponent } from './profesor/profesor-sidebar-wrapper/profesor-sidebar-wrapper.component';
import { NaprednaPretragaComponent } from './napredna-pretraga/napredna-pretraga.component';
import { StudentReviewDetailComponent } from './profesor/student-review-detail/student-review-detail.component';
import { CreateSyllabusOutcomeComponent } from './profesor/create-syllabus-outcome/create-syllabus-outcome.component';
import { ManageNotificationsComponent } from './profesor/manage-notifications/manage-notifications.component';
import { ManageSyllabusComponent } from './profesor/manage-syllabus/manage-syllabus.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionSidebarWrapperComponent } from './discussion-sidebar-wrapper/discussion-sidebar-wrapper.component';
import { CreateNotificationComponent } from './profesor/create-notification/create-notification.component';



// import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { ScrollToModule } from 'ng2-scroll-to-el';
import { LmsTableComponent } from './_shared/lms-table/lms-table.component';
import { ThSortableDirective } from './_directives/th-sortable.directive';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SideBarComponent,
    UniversitiesComponent,
    NavHeaderComponent,
    UniversityCardComponent,
    FooterComponent,
    UniversityDetailsComponent,
    ChatSideBarComponent,
    FacultiesCardComponent,
    ResponsiblePersonComponent,
    FacultyDetailsComponent,
    UniversityOverviewComponent,
    SubjectDetailsComponent,
    SilabusComponent,
    AnnouncementComponent,
    ExamResultsComponent,
    TeachingMaterialComponent,
    StudyProgrammeDetailsComponent,
    SidebarWrapperComponent,
    LoginComponent,
    CreateProfessorComponent,
    AdminNavBarComponent,
    AdminSidebarWrapperComponent,
    ListProfessorComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    UpdateProfessorComponent,
    CreateEmployeeComponent,
    ProfesorNavBarComponent,
    PregledStudenataComponent,
    ProfesorSidebarWrapperComponent,
    NaprednaPretragaComponent,
    StudentReviewDetailComponent,
    CreateSyllabusOutcomeComponent,
    ManageNotificationsComponent,
    ManageSyllabusComponent,
    DiscussionComponent,
    DiscussionSidebarWrapperComponent,
    CreateNotificationComponent,
    LmsTableComponent,
    ThSortableDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    TreeModule.forRoot(),
    NgScrollbarModule,
    CommonModule,
    NgbModule,
    MatTooltipModule,
    AngularEditorModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
