import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { UniversitiesComponent } from './universities/universities.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { FacultyDetailsComponent } from './faculty/faculty-details/faculty-details.component';
import { StudyProgrammeDetailsComponent } from './faculty/study-programme-details/study-programme-details.component';
import { UniversityOverviewComponent } from './university-overview/university-overview.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { CreateProfessorComponent } from './administrator/create-professor/create-professor.component';
import { AdminSidebarWrapperComponent } from './administrator/admin-sidebar-wrapper/admin-sidebar-wrapper.component';
import { DeleteProfessorComponent } from './administrator/delete-professor/delete-professor.component';
import { UpdateStudentComponent } from './administrator/update-student/update-student.component';
import { UpdateProfessorComponent } from './administrator/update-professor/update-professor.component';
import { CreateStudentComponent } from './administrator/create-student/create-student.component';
import { DeleteStudentComponent } from './administrator/delete-student/delete-student.component';
import { ProfesorSidebarWrapperComponent } from './profesor/profesor-sidebar-wrapper/profesor-sidebar-wrapper.component';
import { PregledStudenataComponent } from './profesor/pregled-studenata/pregled-studenata.component';
import { StudentReviewDetailComponent } from './profesor/student-review-detail/student-review-detail.component';
import { CreateSyllabusOutcomeComponent } from './profesor/create-syllabus-outcome/create-syllabus-outcome.component';
import { ManageNotificationsComponent } from './profesor/manage-notifications/manage-notifications.component';
import { ManageSyllabusComponent } from './profesor/manage-syllabus/manage-syllabus.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionSidebarWrapperComponent } from './discussion-sidebar-wrapper/discussion-sidebar-wrapper.component';
import { CreateNotificationComponent } from './profesor/create-notification/create-notification.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ AuthGuard ],
    data: { roles: [ Role.Guest ] }
  },
  {
    path: 'universities',
    component: UniversitiesComponent
  },
  {
    path: 'university/:id',
    component: SidebarWrapperComponent,
    children: [
      { path: '', component: UniversityDetailsComponent},
      { path: 'studyProgramme/:id', component: StudyProgrammeDetailsComponent, },
      { path: 'subject/:id', component: SubjectDetailsComponent},
      { path: 'faculty/:id', component: FacultyDetailsComponent},
    ]
  },
  {
    path: 'diskusija',
    component: DiscussionSidebarWrapperComponent,
    children: [
      { path: 'nekaDiskusija', component: DiscussionComponent},
    ]
  },
  {
    path: 'admin',
    component: AdminSidebarWrapperComponent,
    children: [
      { path: 'kreirajProfesora', component: CreateProfessorComponent, },
      { path: 'azurirajProfesora', component: UpdateProfessorComponent, },
      { path: 'upravljajProfesorom', component: DeleteProfessorComponent, },
      { path: 'kreirajStudenta', component: CreateStudentComponent, },
      { path: 'azurirajStudenta', component: UpdateStudentComponent, },
      { path: 'upravljajStudentom', component: DeleteStudentComponent, },
    ]
  },
  {
    path: 'profesorPanel',
    component: ProfesorSidebarWrapperComponent,
    children: [
      { path: 'upravljanjeSilabusa', component: ManageSyllabusComponent, },
      { path: 'upravljanjeObavestenjima', component: ManageNotificationsComponent, },
      { path: 'pregledStudenata', component: PregledStudenataComponent, },
      { path: 'pregledStudenata/:id', component: StudentReviewDetailComponent, },
      { path: 'kreirajIshodSilabusa', component: CreateSyllabusOutcomeComponent, },
      { path: 'kreirajObavestenje', component: CreateNotificationComponent, },
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
