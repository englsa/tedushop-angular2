import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { PaginationModule,ModalModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms'
const userRoutes :Routes =[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:UserComponent}
]
@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent],
  providers:[DataService,NotificationService]
})
export class UserModule { }
