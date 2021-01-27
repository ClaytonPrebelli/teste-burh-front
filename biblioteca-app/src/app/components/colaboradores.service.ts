import { Colaborador } from './colaboradores.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  url="http://crudcrud.com/api/2382338bfbab44bea4f2089b534e3f16/register"
  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }

  showMessage(msg:string, isError:boolean=false): void {
    this.snackBar.open(msg,'X',{
    duration: 3000,
    horizontalPosition:'right',
    verticalPosition:"top"
    })
  }
    create(colaborador:Colaborador): Observable<Colaborador>{
      return this.http.post<Colaborador>(this.url,colaborador).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
    }
    errorHandler(e: any): Observable<any> {
      this.showMessage('Erro de Banco de Dados', true)
      return EMPTY
    }
}
