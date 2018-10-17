import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ILoadState } from './load/load.actions';
import { LoadReducer } from './load/load.reducer';

export interface AppState {
  loadState: ILoadState;
}

export const reducers: ActionReducerMap<AppState> = {
  loadState: LoadReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
