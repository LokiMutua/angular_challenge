import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSliderComponent } from './item-slider/item-slider.component';

const routes: Routes = [
  {
    path: "", component: ItemSliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterEditorRoutingModule { }
