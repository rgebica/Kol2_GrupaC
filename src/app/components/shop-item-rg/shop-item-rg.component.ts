import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-item-rg',
  templateUrl: './shop-item-rg.component.html',
  styleUrls: ['./shop-item-rg.component.css']
})
export class ShopItemRGComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() price: number;

  constructor() {
  }

  ngOnInit() {
  }

}
