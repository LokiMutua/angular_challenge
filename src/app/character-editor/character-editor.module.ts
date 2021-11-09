import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterEditorRoutingModule } from './character-editor-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { ItemSliderComponent } from './item-slider/item-slider.component';


@NgModule({
  declarations: [
    ItemSliderComponent
  ],
  imports: [
    CommonModule,
    CharacterEditorRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    AngularSvgIconPreloaderModule
  ],
  exports: [ItemSliderComponent]
})
export class CharacterEditorModule { }
