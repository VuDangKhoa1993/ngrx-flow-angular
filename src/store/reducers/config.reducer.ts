import { IConfigState } from '../state/config.state';
import { ConfigActions, EConfig } from '../actions/config.actions';

export const configReducer = (state: IConfigState, action: ConfigActions): IConfigState => {
    switch (action.type) {
        case EConfig.GetConfigSuccess:
            return {
                ...state,
                config: action.payload
            };
            default: 
                return state;
    }
}