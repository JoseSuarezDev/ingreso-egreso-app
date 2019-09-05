
import * as fromUI from "./ui.accions";

// "con una interface se le dice que van a ser requeridos 
// una serie de atributos y de que tipo van a ser los mismos"
// creando esta interface State le digo que va a ser de tipo objeto y que los atributos
// requetidos van a ser de algun tipo asignado.
// * Las interfaces tambn pueden tener(requerir) funciones
export interface State {
    isLoading: boolean
}

// creando esta variable de tipo State le digo que la variable que va a ser un objeto y 
// los atribitos asignados van a ser del tipo ya indicado.
const initState: State = {
    isLoading: false
}


// creando esta funcion le digo que el state(estado) es un objero del tipo ya indicado
// y que sus atributos ya tienen un valor iniciado por default.
// tambien indicamos que la accion es de tipo de las acciones ya definidas
// y que la funcion va a devolver un state(estado) que es de tipo objeto y tiene los
// atributos ya indicados. 
export function uiReducer( state = initState, action: fromUI.acciones ) : State {

    switch (action.type) {
        case fromUI.ACTIVAR_LOADING:
            return {
                isLoading: true
            };

        case fromUI.DESACTIVAR_LOADING:
            return {
                isLoading: false
            };
    
        default:
            return state;
    }

}