import { Action } from '@ngrx/store';
import { LoadInitial, LoadActionsList, ILoadState } from './load.actions';

export function LoadReducer(state = new LoadInitial(), action: ILoadState) {

    switch (action.type) {
        case LoadActionsList.LOAD_SUCCESS:
            return {
                ...action, ...state,
                payload: action.payload
            }
        case LoadActionsList.LOAD_FAIL:
            return {
                ...action, ...state
            }
        case LoadActionsList.LOAD_INITIAL:
            return {
                ...action, ...state
            }
        default:
            return state;
    }

}