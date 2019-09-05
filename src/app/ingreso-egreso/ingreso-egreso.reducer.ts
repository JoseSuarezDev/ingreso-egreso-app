import { IngresoEgreso } from './ingreso-egreso.model';
import * as fromIngresoEgreso from './ingreso-egreso.actions';

export interface IngresoEgresoState {
    items: IngresoEgreso[];
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