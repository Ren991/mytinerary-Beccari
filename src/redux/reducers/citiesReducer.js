const initialState = {//Estado inicial lo declaramos como objeto
    cities: [],  //Estado global de la aplicacion , su estado inicial esta vacio, son inmutables. 
    citiesFiltered: [],

}

function cityReducer(state = initialState, action){ //Esta funcion recibe un state y una accion.
    switch (action.type) { //creamos un switch , dependiendo la acción ejecuta una cosa o la otra.
        case ("GET_CITIES")://Obtener ciudades
            return {
                ...state, //se actualiza el estado.
                cities: action.payload, //Guarda todas las ciudades
                citiesFiltered: action.payload //Guarda las ciudades filtradas
            }
        case("FILTER_CITIES") ://Filtrar ciudades
        return {
            ...state,          //Filtro lo que viene como parametro del otro lado 
            citiesFiltered: state.cities.filter(ciudad => ciudad.name.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0) 
            
        }   
        default:
            return state //En caso que no se cumplan ninguna de las dos condiciones vuelve al initial state
        }
      }
      
    export default cityReducer