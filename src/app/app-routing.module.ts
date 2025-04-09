import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PersonagensPageComponent } from './pages/personagens-page/personagens-page.component';
import { PersonagensDetalheComponent } from './pages/personagens-detalhe/personagens-detalhe.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent /// http://localhost:4200
  },
  {
    path: 'personagens', component: PersonagensPageComponent /// http://localhost:4200/personagens
  },
  {
    path: 'personagens/:id', component: PersonagensDetalheComponent /// http://localhost:4200/personagens/581
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
