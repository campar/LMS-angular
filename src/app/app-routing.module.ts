import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { UniversitiesComponent } from './universities/universities.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { FacultyDetailsComponent } from './faculty/faculty-details/faculty-details.component';
import { UniversityOverviewComponent } from './university-overview/university-overview.component';

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
      { path: 'faculty', component: FacultyDetailsComponent, }
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
