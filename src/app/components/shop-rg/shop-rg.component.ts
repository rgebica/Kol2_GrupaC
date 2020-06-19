import { Component, OnInit } from '@angular/core';
import {RGDataService} from '../../service/rg-data.service';

@Component({
  selector: 'app-shop-rg',
  templateUrl: './shop-rg.component.html',
  styleUrls: ['./shop-rg.component.css']
})
export class ShopRGComponent implements OnInit {

  public items$: any;

  constructor(private service: RGDataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
