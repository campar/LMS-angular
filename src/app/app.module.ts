import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import {HttpClientModule} from '@angular/common/http';
import { UniversitiesComponent } from './universities/universities.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { UniversityCardComponent } from './university-card/university-card.component';
import { FooterComponent } from './footer/footer.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { ChatSideBarComponent } from './chat-side-bar/chat-side-bar.component';
import { FacultiesCardComponent } from './faculties-card/faculties-card.component';
import { ResponsibleRectorComponent } from './responsible-rector/responsible-rector.component';
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
    ResponsibleRectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
