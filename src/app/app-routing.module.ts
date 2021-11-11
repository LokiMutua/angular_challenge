import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterEditorModule } from './character-editor/character-editor.module';
import { LandingScreenModule } from './landing-screen/landing-screen.module';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: "landing", loadChildren: () => LandingScreenModule },
  {
    path: "slides", loadChildren: () => CharacterEditorModule 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
