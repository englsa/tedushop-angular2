import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import {UltilityService} from '../core/services/ultility.service';
import {AuthenService} from '../core/services/authen.service';
import { SignalrService } from '../core/services/signalr.service';
import {SidebarMenuComponent} from '../shared/sidebar-menu/sidebar-menu.component';
import {TopMenuComponent} from '../shared/top-menu/top-menu.component';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent,SidebarMenuComponent,TopMenuComponent],
  providers:[UltilityService,AuthenService,SignalrService]
})
export class MainModule { }