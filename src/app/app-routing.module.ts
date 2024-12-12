import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [{ path: 'produtos', loadChildren: () => import('./app-produtos/app-produtos.module').then(m => m.AppProdutosModule) },
 {path:"", redirectTo:"produtos", pathMatch:"full"},
 { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
 { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
 {path:"**", component: NaoEncontradaComponent, }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}