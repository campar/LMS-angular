import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { UniversitiesComponent } from './universities/universities.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { UniversityCardComponent } from './university-card/university-card.component';
import { FooterComponent } from './footer/footer.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { ChatSideBarComponent } from './chat-side-bar/chat-side-bar.component';
import { FacultiesCardComponent } from './faculties-card/faculties-card.component';
import { ResponsibleRectorComponent } from './responsible-rector/responsible-rector.component';
import { FacultyDetailsComponent } from './faculty/faculty-details/faculty-details.component';
import { StudyProgrammeDetailsComponent } from './faculty/study-programme-details/study-programme-details.component';
import { UniversityOverviewComponent } from './university-overview/university-overview.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SilabusComponent } from './silabus/silabus.component';
import { AnnouncementComponent } from './announcement/announcement.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { TeachingMaterialComponent } from './teaching-material/teaching-material.component';

import { TreeModule } from 'angular-tree-component';

import { NgScrollbarModule } from 'ngx-scrollbar';


import { CommonModule } from '@angular/common';


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
    ResponsibleRectorComponent,
    FacultyDetailsComponent,
    UniversityOverviewComponent,
    SubjectDetailsComponent,
    SilabusComponent,
    AnnouncementComponent,
    ExamResultsComponent,
    TeachingMaterialComponent,
    StudyProgrammeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    TreeModule.forRoot(),
    NgScrollbarModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
