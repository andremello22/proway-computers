import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-produtos',
  templateUrl: './app-produtos.component.html',
  styleUrl: './app-produtos.component.css'
})
export class AppProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private router: ActivatedRoute
  ) {}
  ngOnInit() {
    const produtos = this.produtosService.getAll();
    this.router.queryParamMap.subscribe((param=>{
      const descricao = param.get('descricao')?.toLowerCase();
      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.produtos = produtos;
    }))
  }

}
