import { Component, OnInit } from '@angular/core';
import {RGDataService} from '../../service/rg-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shop-details-rg',
  templateUrl: './shop-details-rg.component.html',
  styleUrls: ['./shop-details-rg.component.css']
})
export class ShopDetailsRGComponent implements OnInit {

  public image = '';
  public text: string;
  public id: number;
  public title: string;
  public price: number;

  constructor(private dataService: RGDataService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    if (id) {
      this.dataService.getById(id).subscribe(res => {
        this.id = res['id'];
        this.title = res['title'];
        this.text = res['text'];
        this.image = res['image'];
        this.price = res['price'];
      });
    } else {
      this.id = 1;
    }
  }
}
