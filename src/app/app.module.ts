import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainningComponent } from './trainning/trainning.component';
import { CurrentTrainningComponent } from './trainning/current-trainning/current-trainning.component';
import { NewTrainningComponent } from './trainning/new-trainning/new-trainning.component';
import { PastTrainningComponent } from './trainning/past-trainning/past-trainning.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavlistComponent } from './navigation/sidenavlist/sidenavlist.component';
import { StopTrainingComponent } from './trainning/current-trainning/stop-training.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainningComponent,
    CurrentTrainningComponent,
    NewTrainningComponent,
    PastTrainningComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavlistComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
