const initialState = {//Estado inicial
    cities: [],  //Declaramos arrays vacios
    citiesFiltered: [],

}

function cityReducer(state = initialState, action){ //Esta funcion recibe un state y una accion.
    switch (action.type) { //creamos un switch , dependiendo la acción retorna una cosa o la otra.
        case ("GET_CITIES")://Obtener ciudades
            return {
                ...state, //se actualiza el estado.
                cities: action.payload,
                citiesFiltered: action.payload
            }
        case("FILTER_CITIES") ://Filtrar ciudades
        return {
            ...state,
            citiesFiltered: state.cities.filter(ciudad => ciudad.name.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0) 
            
        }   
        default:
            return state
        }
      }
      
    export default cityReducer