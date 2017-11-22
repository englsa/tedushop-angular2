import { Component, OnInit } from '@angular/core';
import {SystemConstants} from '../core/common/system.constants';
import {UrlConstants} from '../core/common/url.constants';
import {UltilityService} from '../core/services/ultility.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private utilityservice:UltilityService) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityservice.navigate(UrlConstants.LOGIN);
  }
}
