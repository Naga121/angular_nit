import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminGuard } from './Guards/admin.guard';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempletformComponent } from './Components/templetform/templetform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsvsformsComponent } from './Components/fsvsforms/fsvsforms.component';
import { IsvsformComponent } from './Components/isvsform/isvsform.component';
import { ReactformdemoComponent } from './Components/reactformdemo/reactformdemo.component';
import { NestedformComponent } from './Components/nestedform/nestedform.component';
import { FormbuilderComponent } from './Components/formbuilder/formbuilder.component';
import { FormArrayControlComponent } from './Components/form-array-control/form-array-control.component';
import { ReactValidationComponent } from './Components/react-validation/react-validation.component';
import { HomeComponent } from './RouterComponents/home/home.component';
import { ElectronicsComponent } from './RouterComponents/electronics/electronics.component';
import { FootwearsComponent } from './RouterComponents/footwears/footwears.component';
import { NotFoundComponent } from './RouterComponents/not-found/not-found.component';
import { CourseDurationComponent } from './RouterComponents/course-duration/course-duration.component';
import { CourseFeeComponent } from './RouterComponents/course-fee/course-fee.component';
import { AdminHomeComponent } from './Guards/admin-home/admin-home.component';
import { LoginComponent } from './Guards/login/login.component';
import { DatademoComponent } from './Components/datademo/datademo.component';

@NgModule({
  declarations: [
    AppComponent,
    TempletformComponent,
    FsvsformsComponent,
    IsvsformComponent,
    ReactformdemoComponent,
    NestedformComponent,
    FormbuilderComponent,
    FormArrayControlComponent,
    ReactValidationComponent,
    HomeComponent,
    ElectronicsComponent,
    FootwearsComponent,
    NotFoundComponent,
    CourseDurationComponent,
    CourseFeeComponent,
    AdminHomeComponent,
    LoginComponent,
    DatademoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminGuard],
  bootstrap: [ReactValidationComponent]
})
export class AppModule { }
