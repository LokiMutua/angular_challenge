import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingScreenRoutingModule } from './landing-screen-routing.module';
import { LandingScreenComponent } from './landing-screen.component';
import { GlobalModule } from '../global/global.module';
import {CharacterEditorModule} from "../character-editor/character-editor.module";


@NgModule({
  declarations: [
    LandingScreenComponent
  ],
    imports: [
        CommonModule,
        LandingScreenRoutingModule,
        GlobalModule,
        CharacterEditorModule
    ]
})
export class LandingScreenModule { }
