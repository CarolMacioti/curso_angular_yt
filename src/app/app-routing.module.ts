import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

/* Cada PATH representa uma rota */
/* :id é o comando p\ criar uma rota dinâmica, quero, com ele, dizer que essa rota irá mudar cada vez que for acessada */

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
