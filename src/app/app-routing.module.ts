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
    path: 'admin',
    component: AdminSidebarWrapperComponent,
    children: [
      { path: 'kreirajProfesora', component: CreateProfessorComponent, },
      { path: 'azurirajProfesora', component: UpdateProfessorComponent, },
      { path: 'obrisiProfesora', component: DeleteProfessorComponent, },
      { path: 'kreirajStudenta', component: CreateStudentComponent, },
      { path: 'azurirajStudenta', component: UpdateStudentComponent, },
      { path: 'obrisiStudenta', component: DeleteStudentComponent, },
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
