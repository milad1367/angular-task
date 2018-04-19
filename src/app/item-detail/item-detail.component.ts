import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService }  from '../item.service';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  
})
export class ItemDetailComponent implements OnInit {
item: Item;
body: Text;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getItem();
  }
 
  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => {this.item = item;console.log(item);this.body = item['body'];});
  }
 
  goBack(): void {
    this.location.back();
  }

}
