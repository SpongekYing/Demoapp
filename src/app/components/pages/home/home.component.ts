import { Component, OnInit } from '@angular/core';
import { CommodityService } from 'src/app/services/commodity.service';
import { Commodity } from 'src/app/Shared/Model/Commodity/Commodity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  commoditys:Commodity[] = [];
  constructor(private commodityService:CommodityService){
    this.commoditys = commodityService.getAll();
  }

  ngOnInit(): void {
    
  }
}
