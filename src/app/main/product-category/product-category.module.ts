import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { ProductCategoryRouter } from './product-category.routes';

import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { DataService } from './../../core/services/data.service';
import { UltilityService } from './../../core/services/ultility.service';

@NgModule({
  imports: [
    CommonModule,
    ProductCategoryRouter,
    TreeModule,
    ModalModule,
    FormsModule
  ],
  declarations: [ProductCategoryComponent],
  providers: [DataService, UltilityService]
})
export class ProductCategoryModule { }