import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrl: './barra-de-pesquisa.component.css'
})
export class BarraDePesquisaComponent implements OnInit {
  descricao = "";
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
      
  }

  pesquisar(){
    if(this.descricao){
      this.router.navigate(['/produtos'], { queryParams: { descricao: this.descricao } });
      return;
    }
    this.router.navigate(["produtos"]);
  }

}
