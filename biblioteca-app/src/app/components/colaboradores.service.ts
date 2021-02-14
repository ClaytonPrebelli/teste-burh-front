import { environment } from './../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Colaborador } from './colaboradores.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
    constructor(private snackBar: MatSnackBar, private http: HttpClient, private route: ActivatedRoute) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }  
  create(colaborador: Colaborador): Observable<Colaborador> {
    
    return this.http.post<Colaborador>(`${environment.apiUrl}`, colaborador
                         ).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
  }

   read(): Observable<Colaborador[]> {
     console.log(this.http.get<Colaborador[]>(environment.apiUrl))
    return this.http.get<Colaborador[]>(environment.apiUrl)
  }
  readById(_id: any): Observable<Colaborador> {
    const url = `${environment.apiUrl}/${_id}`
    return this.http.get<Colaborador>(url).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
  }

  update(colaborador: Colaborador): Observable<Colaborador>{
    const url = `${environment.apiUrl}/${colaborador._id}`
    console.log(colaborador._id)
    console.log(colaborador);
    return this.http.put<Colaborador>(url, colaborador).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
  }
  delete(_id:number): Observable<Colaborador>{
    const url = `${environment.apiUrl}/${_id}`
    return this.http.delete<Colaborador>(url).pipe(map((obj) => obj), catchError(e => this.errorHandler(e)))
  }


  errorHandler(e: any): Observable<any> {
    this.showMessage('Ops! Há algo errado com o banco de dados', true)
    return EMPTY
  }
}
