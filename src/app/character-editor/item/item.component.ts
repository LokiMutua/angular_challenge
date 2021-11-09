import {Component, Input, OnInit} from '@angular/core';


export interface Item {
  main_image: string;
  rarity_image: string;
  socket_image: string;
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
