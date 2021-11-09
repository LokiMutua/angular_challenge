/* THIS COMPONENT NEEDS SOME WORK */

import {Component, ViewChild} from '@angular/core';
import {Item} from "../item/item.component";
import {CarouselComponent} from "ngx-bootstrap/carousel";

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrls: ['./item-slider.component.scss']
})
export class ItemSliderComponent {
  itemsPerSlide = 1;
  singleSlideOffset = false;
  noWrap = false;
  @ViewChild(CarouselComponent) carousel: CarouselComponent;

  slidesChangeMessage = '';
  slides: Item[] = [
    {main_image: 'assets/itemSlider/items/wpn_sword_01_thumb-200x200.jpg',
    rarity_image: 'assets/itemSlider/rarities/rarity_00.png',
      socket_image: 'assets/itemSlider/gem_socket_square.png'},
    {main_image: 'assets/itemSlider/items/wpn_sword_02_thumb-200x200.jpg',
      rarity_image: 'assets/itemSlider/rarities/rarity_01.png',
      socket_image: 'assets/itemSlider/gem_socket_square.png'},
    {main_image: 'assets/itemSlider/items/wpn_sword_03_thumb-200x200.jpg',
      rarity_image: 'assets/itemSlider/rarities/rarity_02.png',
      socket_image: 'assets/itemSlider/gem_socket_square.png'},
    {main_image: 'assets/itemSlider/items/wpn_sword_01_thumb-200x200.jpg',
      rarity_image: 'assets/itemSlider/rarities/rarity_03.png',
      socket_image: 'assets/itemSlider/gem_socket_square.png'},
    {main_image: 'assets/itemSlider/items/wpn_sword_02_thumb-200x200.jpg',
      rarity_image: 'assets/itemSlider/rarities/rarity_04.png',
      socket_image: 'assets/itemSlider/gem_socket_square.png'},
    {main_image: 'assets/itemSlider/items/wpn_sword_03_thumb-200x200.jpg',
      rarity_image: 'assets/itemSlider/rarities/rarity_05.png',
      socket_image: 'assets/itemSlider/gem_socket_square.png'}
  ];

  nextItem() {
  this.carousel.nextSlide();
  }
}
