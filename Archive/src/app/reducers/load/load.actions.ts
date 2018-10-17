import { Action } from 'rxjs/internal/scheduler/Action';

export const LOAD_INITIAL: string = '[LOAD_ACTION] LOAD_INITIAL';
export const LOAD_SUCCESS: string = '[LOAD_ACTION] LOAD_SUCCESS';
export const LOAD_FAIL: string = '[LOAD_ACTION] LOAD_FAIL';

export interface ILoadState {
    type: string;
    payload?: any;
}

export class LoadInitial implements ILoadState {
    type: string;
    payload?: any = {};
}
export class LoadAction implements ILoadState {
    type: string;
    payload?: any;
    constructor(type: string, payload?: any) {
        this.type = type;
        this.payload = payload;
    }
}

export const LoadActionsList = {
    LOAD_INITIAL, LOAD_SUCCESS, LOAD_FAIL
}