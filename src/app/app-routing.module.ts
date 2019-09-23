import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { UniversitiesComponent } from './universities/universities.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { FacultyDetailsComponent } from './faculty/faculty-details/faculty-details.component';
import { StudyProgrammeDetailsComponent } from './faculty/study-programme-details/study-programme-details.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { CreateProfessorComponent } from './administrator/create-professor/create-professor.component';
import { AdminSidebarWrapperComponent } from './administrator/admin-sidebar-wrapper/admin-sidebar-wrapper.component';
import { ListProfessorComponent } from './administrator/list-professor/list-professor.component';
import { UpdateEmployeeComponent } from './administrator/update-employee/update-employee.component';
import { UpdateProfessorComponent } from './administrator/update-professor/update-professor.component';
import { CreateEmployeeComponent } from './administrator/create-employee/create-employee.component';
import { ListEmployeeComponent } from './administrator/list-employee/list-employee.component';
import { PregledStudenataComponent } from './profesor/pregled-studenata/pregled-studenata.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionSidebarWrapperComponent } from './discussion-sidebar-wrapper/discussion-sidebar-wrapper.component';
import { CreateNotificationComponent } from './profesor/create-notification/create-notification.component';
import { SingleStudentComponent } from './_shared/single-student/single-student.component';
import { ChooseFacultyComponent } from './_shared/choose-faculty/choose-faculty.component';
import { ChooseProgrammeComponent } from './_shared/choose-programme/choose-programme.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Guest] }
  },
  {
    path: 'universities',
    component: UniversitiesComponent
  },
  {
    path: 'university/:id',
    component: SidebarWrapperComponent,
    children: [
      { path: '', component: UniversityDetailsComponent },
      { path: 'studyProgramme/:id', component: StudyProgrammeDetailsComponent, },
      { path: 'subject/:id', component: SubjectDetailsComponent },
      { path: 'faculty/:id', component: FacultyDetailsComponent },
      {
        path: 'profesorPanel',
        component: null,
        children: [
          { path: '', component: ChooseFacultyComponent },
          { path: 'faculty/:id', component: ChooseProgrammeComponent },
          {
            path: ':programId',
            component: null,
            children: [
              { path: '', component: ListSubjectsComponent },
              // { path: 'upravljanjeSilabusa', component: ManageSyllabusComponent, },
              // { path: 'upravljanjeObavestenjima', component: ManageNotificationsComponent, },
              { path: ':subjectId/students', component: PregledStudenataComponent, },
              { path: ':subjectId/students/:id', component: SingleStudentComponent },
              // { path: 'kreirajIshodSilabusa', component: CreateSyllabusOutcomeComponent, },
              { path: '::subjectId/notifications/create', component: CreateNotificationComponent, },
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'diskusija',
    component: DiscussionSidebarWrapperComponent,
    children: [
      { path: 'nekaDiskusija', component: DiscussionComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminSidebarWrapperComponent,
    children: [
      { path: 'professor/new', component: CreateProfessorComponent, },
      { path: 'professor', component: ListProfessorComponent, },
      { path: 'professor/:id', component: UpdateProfessorComponent, },

      { path: 'employee/new', component: CreateEmployeeComponent, },
      { path: 'employee', component: ListEmployeeComponent, },
      { path: 'employee/:id', component: UpdateEmployeeComponent, },
    ]
  },
  {
    path: 'faculties/:id',
    component: FacultyDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
