import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadActionsList } from './load/load.actions';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private http: HttpClient) {

  }

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(LoadActionsList.LOAD_INITIAL),
    mergeMap(action =>
      this.http.get(environment.apiUri).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: LoadActionsList.LOAD_SUCCESS, payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: LoadActionsList.LOAD_FAIL }))
      )
    )
  );

};


  // @Effect()
  // login$: Observable<Action> = this.actions$.pipe(
  //   ofType('LOGIN'),
  //   mergeMap(action =>
  //     this.http.post('/auth', action['payload']).pipe(
  //       // If successful, dispatch success action with result
  //       map(data => ({ type: 'LOGIN_SUCCESS', payload: data })),
  //       // If request fails, dispatch failed action
  //       catchError(() => of({ type: 'LOGIN_FAILED' }))
  //     )
  //   )
  // );