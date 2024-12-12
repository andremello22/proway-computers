import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProdutosRoutingModule } from './app-produtos-routing.module';
import { AppProdutosComponent } from './app-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    AppProdutosRoutingModule,
    FormsModule
  ]
})
export class AppProdutosModule { }
