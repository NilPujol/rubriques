import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriterisComponent } from './projecte/components/criteris/criteris.component';
import { RubriquesComponent } from './projecte/components/rubriques/rubriques.component';
import { ValoracionsComponent } from './projecte/components/valoracions/valoracions.component';

const routes: Routes = [
  {
    path: 'criteris',
    component: CriterisComponent,
  },
  {
    path: 'valoracions',
    component: ValoracionsComponent,
  },
  {
    path: 'rubriques',
    component: RubriquesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
