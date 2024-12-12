import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProdutosComponent } from './app-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const routes: Routes = [{ path: '', component: AppProdutosComponent },
  {path:":id", component: DetalhesProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppProdutosRoutingModule { }
