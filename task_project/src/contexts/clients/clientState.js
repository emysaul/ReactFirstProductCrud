import { useReducer } from 'react'
import axios from '../../config/axios';
import { ADD_CLIENT } from '../../types';
import clientContext from './clientContext'
import clientReducer from './clientReducer'

const ClientState = (props) => {
    const initialState = {
        clients: []
    }

    const [state, dispatch] = useReducer(clientReducer, initialState)

    const addClient = async (client) => {
        await axios.post('/clients', client)
        dispatch({
            type: ADD_CLIENT,
            payload: {...client}
        })
    }

    return (
        <clientContext.Provider
            value={{
                clients: state.clients,
                addClient: addClient
            }}
        >
            {props.children}
        </clientContext.Provider>
    )
    
};

export default ClientState