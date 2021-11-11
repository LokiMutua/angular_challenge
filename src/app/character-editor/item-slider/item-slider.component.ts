/* THIS COMPONENT NEEDS SOME WORK */

import { Component } from '@angular/core';

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrls: ['./item-slider.component.scss']
})
export class ItemSliderComponent {

  public noWrap = true;
  public singleSlideOffset = true;
  public currentSlide = 0;

  public slides = [
    { src: "../../../assets/itemSlider/items/wpn_sword_01_thumb-200x200.jpg",
      description: "Sword 1",
      rarity: "../../../assets/itemSlider/rarities/rarity_00.png"
    },
    { src: "../../../assets/itemSlider/items/wpn_sword_02_thumb-200x200.jpg",
      description: "Sword 2",
      rarity: "../../../assets/itemSlider/rarities/rarity_01.png"
    },
    { src: "../../../assets/itemSlider/items/wpn_sword_03_thumb-200x200.jpg", description: "Sword 3", rarity: "../../../assets/itemSlider/rarities/rarity_02.png" },
  ];

  nextItem() {
    
      if(this.currentSlide == this.slides.length ) return;
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.slides.length ? 0 : next;
  }
 }
