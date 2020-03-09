import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { GetUser, EUserAction, GetUserSuccess, GetUsers, GetUsersSuccess } from '../actions/user.actions';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class UserEffects {
    constructor(
        private userService: UserService,
        private action$: Actions,
        private store: Store<IAppState>
    ) { }

    @Effect()
    getUser$ = this.action$.pipe(
        ofType<GetUser>(EUserAction.GetUser),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this.action$.pipe(
        ofType<GetUsers>(EUserAction.GetUsers),
        switchMap(() => this.userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    )
}