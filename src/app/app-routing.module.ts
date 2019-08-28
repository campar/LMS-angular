import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { UniversitiesComponent } from './universities/universities.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { FacultyDetailsComponent } from './faculty/faculty-details/faculty-details.component';
import { UniversityOverviewComponent } from './university-overview/university-overview.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'universities',
    component: UniversitiesComponent
  },
  {
    path: 'university/:id',
    component: UniversityOverviewComponent,
    children: [
      { path: '', component: UniversityDetailsComponent},
      { path: 'faculty', component: FacultyDetailsComponent, },
      { path: 'subject', component: SubjectDetailsComponent}
    ]
  },
  {
    path: 'faculties/:id',
    component: FacultyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
