import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snacBar: MatSnackBar
  ) { }
  notificar(mensagem: string){
  this.snacBar.open(mensagem, "ok", {
    duration: 2000,
    verticalPosition: 'top',
    horizontalPosition: "center"
  });
  }
}
