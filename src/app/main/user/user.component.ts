import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap';
import {NotificationService} from '../../core/services/notification.service';
import {MessageContstants} from '../../core/common/message.constants';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('modalAddEdit') public modalAddEdit:ModalDirective;
  public pageIndex: number = 1;
  public pageSize: number = 10;
  public pageDisplay: number = 10;
  public totalRows: number;
  public filter: string = '';
  public users: any[];
  public entity:any;
  constructor(private _dataService: DataService , private _notificatioService:NotificationService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService.get('/api/appUser/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
      .subscribe((response: any) => {
        this.users = response.Items;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
        this.totalRows = response.TotalRows;
        //console.log(response);
      });
  }
  loadRole(Id:any) {
    this._dataService.get('/api/appUser/detail/'+Id)
      .subscribe((response: any) => {
       this.entity = response;
        console.log(this.entity);
      });
  }
  pageChanged(event:any):void{
    this.pageIndex = event.page;
    this.loadData();
  }
  showAddModal(){
    this.entity = {};
    this.modalAddEdit.show();
  }
  showEditModal(Id:any){
    this.loadRole(Id);
    this.modalAddEdit.show();
  }
  saveChange(valid:boolean){
    if(valid){
      if(this.entity.Id == undefined){
        this._dataService.post('/api/appUser/add',JSON.stringify(this.entity))
        .subscribe((response:any)=>{
          this.loadData();
          this.modalAddEdit.hide();
          this._notificatioService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
        },error =>this._dataService.handleError(error));
      }else{
        this._dataService.put('/api/appUser/update',JSON.stringify(this.entity))
        .subscribe((response:any)=>{
          this.loadData();
          this.modalAddEdit.hide();
          this._notificatioService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
        },error =>this._dataService.handleError(error));
      }
    }
  }
  DeleteItem(id:any){
    this._notificatioService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG,()=>this.deleteItemComfirm(id))
  }
  deleteItemComfirm(id:any){
    this._dataService.delete('/api/appUser/delete','id',id).subscribe((response:Response)=>{
      this._notificatioService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
      this.loadData();
    })
  }
}