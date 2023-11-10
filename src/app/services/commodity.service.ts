import { Injectable } from '@angular/core';
import { commodity } from 'src/data';
import { Commodity } from '../Shared/Model/Commodity/Commodity';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  constructor() { }

  getAll():Commodity[]{
    return commodity;
  }
}