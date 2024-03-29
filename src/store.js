import {createStore} from 'redux';

const initialState ={
    jugadores:[
        {
            id:1,
            nombre:"Oliver Atom",
            foto:"https://st-listas.20minutos.es/images/2011-08/297372/3111859_249px.jpg?1518689515"
        },
        {
            id:2,
            nombre:"Benji Price",
            foto:"https://st-listas.20minutos.es/images/2011-08/297372/3111860_249px.jpg?1518689515"
        },
        {
            id:3,
            nombre:"Steve Hyuga",
            foto:"https://st-listas.20minutos.es/images/2011-08/297372/3111862_249px.jpg?1518689515"
        }
    ],
    titulares:[],
    suplentes:[]
}

const reducerEntrenador = (state = initialState, action) =>{
    
    if(action.type === "AGREGAR_TITULAR"){
        return{
            ...state,
            titulares:state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j=>j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplantes:state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j=>j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.filter(j=>j.id !== action.jugador.id),
            jugadores:state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j=>j.id !== action.jugador.id),
            jugadores:state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)