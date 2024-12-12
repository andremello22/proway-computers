import { Router } from '@angular/router';
import { IprodutoCarrinho } from '../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  
  itensCarrinho: IprodutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }
  
  
    ngOnInit():void {
      this.itensCarrinho = this.carrinhoService.obtemCarrinho();
      this.calcularTotal();
    }

    removerProdutoCarrinho(produtoId: number){
      this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
      this.carrinhoService.removerProdutoDoCarrinho(produtoId)
      this.calcularTotal();
    }

    calcularTotal(){
      this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
    }

    comprar(){
      alert("Parabéns você concluiu a sua compra!!")
      this.carrinhoService.limparCarrinho();
      this.router.navigate(["produtos"]);

    }

}
