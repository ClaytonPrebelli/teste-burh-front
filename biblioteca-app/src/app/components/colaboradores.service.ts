import { environment } from './../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Colaborador } from './colaboradores.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';


@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
    constructor(private snackBar: MatSnackBar, private http: HttpClient, private route: ActivatedRoute) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top"
    })
  }
  create(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(environment.apiUlr, colaborador).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
  }
  read(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(environment.apiUlr)
  }
  readById(_id: string | null): Observable<Colaborador> {
    const url = `${environment.apiUlr}/${_id}`
    return this.http.get<Colaborador>(url).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
  }
  update(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${environment.apiUlr}/${colaborador._id}`
    console.log(url)   
    return this.http.put<Colaborador>(url, colaborador).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
  }
  delete(_id:number): Observable<Colaborador>{
    const url = `${environment.apiUlr}/${_id}`
    return this.http.delete<Colaborador>(url).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
  }


  errorHandler(e: any): Observable<any> {
    this.showMessage('Ops! Há algo errado com o banco de dados', true)
    return EMPTY
  }
}
