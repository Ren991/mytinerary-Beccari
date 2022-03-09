
//Por medio del dispatch las acciones llegan al reducer
const cityActions= {
    getCities: () => {
        //Redux no permite que las acciones sean asincronas por eso hacemos una funcion dentro de otra funcion.
        return async (dispatch, getState) =>{
            const response = await fetch("http://localhost:4000/api/allcities")
            const data= await response.json()
            console.log(data.response)
            dispatch({type:"GET_CITIES", payload: data.response})
            //Type :nombre de la accion , Payload:la carga que le mandamos al tipo de accion
        }
    },
    
    filterCities: (inputValue) => {
        return (dispatch, getState) =>{
            dispatch({type: "FILTER_CITIES", payload: inputValue })
        }
    }
}
export default cityActions