import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Guards/admin-home/admin-home.component';
import { AdminGuard } from './Guards/admin.guard';
import { LoginComponent } from './Guards/login/login.component';
import { CourseDurationComponent } from './RouterComponents/course-duration/course-duration.component';
import { CourseFeeComponent } from './RouterComponents/course-fee/course-fee.component';
import { ElectronicsComponent } from './RouterComponents/electronics/electronics.component';
import { FootwearsComponent } from './RouterComponents/footwears/footwears.component';
import { HomeComponent } from './RouterComponents/home/home.component';
import { NotFoundComponent } from './RouterComponents/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'elctronics-list',component:ElectronicsComponent},
  {path:'elctronics-list/:id',component:FootwearsComponent,
    children:[
      {path:'duration',component:CourseDurationComponent},
      {path:'fee',component:CourseFeeComponent}
    ],
  },
  {path:'admin',component:AdminHomeComponent, canActivate:[AdminGuard]},
  {path:'login',component:LoginComponent},
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
