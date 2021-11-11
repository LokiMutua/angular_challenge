import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



interface Item {
   src: string,
   rarity: string,
   description: string 
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  

  @Input() item: Item;
  @Input() currentSlide: number;
  @Input() index: number;
  @Output() nextItem = new EventEmitter<number>();
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  addNextItem(){
    this.nextItem.emit(this.currentSlide + 1);
  }
}
