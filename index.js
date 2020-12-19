/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createStore} from "redux"
import {Provider} from "react-redux"

const initialState = {
    residents: []
}

const reducer = (state = initialState, action) => {
    if(action.type =='add') {
        const newFavorite = [...state.residents, action.payload]
        return {...state, residents:newFavorite}
    } else if (action.type =='remove') {
        const newFavorite = state.residents.filter( item => {
            return item.id != action.payload
        });
        let newState = { residents: newFavorite };
        return newState;
    }
    return state;
}

const store = createStore(reducer)

const RootApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RootApp);
