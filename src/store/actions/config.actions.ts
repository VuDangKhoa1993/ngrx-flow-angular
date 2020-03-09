import { IConfig } from './../../models/config.interface';
import { Action } from '@ngrx/store';

export enum EConfig {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
    public readonly type = EConfig.GetConfig;
}

export class GetConfigSuccess implements Action {
    public readonly type = EConfig.GetConfigSuccess;
    constructor(public payload: IConfig) { }
}

export type ConfigActions = GetConfig | GetConfigSuccess;