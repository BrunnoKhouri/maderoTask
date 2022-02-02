import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Users } from './../model/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "http://localhost:3002/users";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-failure'] : ['msg-success']
    });
  }

  create(users: Users): Observable< Users> {
    return this.http.post<Users>(this.baseUrl, users).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }  

  public read(): Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Users>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Users>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(users: Users): Observable<Users>{
    const url = `${this.baseUrl}/${users.id}`;
    return this.http.put<Users>(url, users).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Users> {    
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Users>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }
}
