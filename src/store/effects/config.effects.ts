import { IConfig } from './../../models/config.interface';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EConfig, GetConfig, GetConfigSuccess } from '../actions/config.actions';
import { of } from 'rxjs';

@Injectable()
export class ConfigEffects {
    constructor(
        private configService: ConfigService,
        private action$: Actions
    ) { }

    @Effect()
    getConfig$ = this.action$.pipe(
        ofType<GetConfig>(EConfig.GetConfig),
        switchMap(() => this.configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config))
        })
    );



}
