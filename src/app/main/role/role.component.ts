import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  public pageIndex: number = 1;
  public pageSize: number = 10;
  public pageDisplay: number = 10;
  public totalRows: number;
  public filter: string = '';
  public roles: any[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService.get('/api/appRole/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
      .subscribe((response: any) => {
        this.roles = response.Items;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
        this.totalRows = response.TotalRows;
        console.log(response);
      });
  }
  pageChanged(event:any):void{
    this.pageIndex = event.page;
    this.loadData();
  }
}