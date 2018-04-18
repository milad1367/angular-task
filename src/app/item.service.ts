import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from './item';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ItemService {
  private itemsUrl = 'https://api.github.com/repos/angular/angular/issues?state=open';  // URL to web api
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  /** GET heroes from the server */
  getItems (): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(items => this.log(`fetched items`)),
        catchError(this.handleError('getItems', []))
      );
  }
    /** GET hero by id. Will 404 if id not found */
    private itemUrl = 'https://api.github.com/repos/angular/angular/issues';
    getItem(number: number): Observable<Item> {
      const url = `${this.itemUrl}/${number}`;
      return this.http.get<Item>(url).pipe(
        tap(_ => this.log(`fetched item id=${number}`)),
        catchError(this.handleError<Item>(`getItem id=${number}`))
      );
    }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ItemService: ' + message);
  }
}