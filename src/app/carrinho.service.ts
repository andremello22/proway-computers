import { IprodutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items: IprodutoCarrinho[] = [];
  constructor() { }
  obtemCarrinho(){

    this.items = JSON.parse(localStorage.getItem('carrinho') || "[]");
    return this.items;
  }

  aicionarAoCarrinho(produto: IprodutoCarrinho){
    this.items.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.items));
  }

  limparCarrinho(){
    this.items = [];
    localStorage.clear();
  }

  removerProdutoDoCarrinho(produtoId: number){

      this.items = this.items.filter(item => item.id !== produtoId);
      localStorage.setItem('carrinho', JSON.stringify(this.items));

    }
}
