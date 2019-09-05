import { IngresoEgreso } from './ingreso-egreso.model';
import * as fromIngresoEgreso from './ingreso-egreso.actions';
import { AppState } from '../app.reducers';

export interface IngresoEgresoState {
    items: IngresoEgreso[];
}

// Lazy Load
export interface AppState extends AppState {
    ingresoEgreso: IngresoEgresoState;
}

const initState : IngresoEgresoState = {
    items: []
} 

export function ingresoEgresoReducer( state = initState, actions : fromIngresoEgreso.Acciones ) : IngresoEgresoState {

    switch (actions.type) {
        case fromIngresoEgreso.SET_ITEMS:
            return {
                items: [ 
                    ...actions.item.map( item => {
                        return { ...item }
                    })
                ]
            }

        case fromIngresoEgreso.UNSET_ITEMS:
            return {
                items: []
            };
    
        default:
            return state;
    }

}