import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import {NotificationService} from '../core/services/notification.service';
import {AuthenService} from '../core/services/authen.service';
export const routes :Routes = [
  {path:'',component:LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],providers:[AuthenService,NotificationService],
  declarations: [LoginComponent],

})
export class LoginModule { }
