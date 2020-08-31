import React, { useReducer, useEffect } from 'react';
const { loadModules } = require('esri-loader');



const reducer = (state, action) => {
    switch (action.type) {
        case "MAP_CHANGED":
            return {
                ...state,
                map: action.payload
            }
        case "VIEW_CHANGED":
            return {
                ...state,
                view: action.payload
            }
        case "SUBSCRIPTION_ADDED":
            return {
                ...state,
                subscriptions: { ...state.subscriptions, ...action.payload }
            }
        case "SUBSCRIPTION_CANCELED":
            //todo
            return {
                ...state
            }
        case "MAP_INIT_CHANGED":
            return {
                ...state,
                initialized: action.payload
            }
        case "MAP_RENDERED_CHANGED": 
            return {
                ...state,
                rendered: action.payload
            }
        default:
            return state;
    }
}

const initialState = {
    map: null,
    view: null,
    subscriptions: {},
    initialized: false,
    rendered: false
}


const MapContext = React.createContext(initialState);


const MapProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateMap = (map) => dispatch({ type: "MAP_CHANGED", payload: map });
    const updateView = (view) => dispatch({ type: "VIEW_CHANGED", payload: view });

    useEffect(() => {
        if (state.map && state.view) {
            dispatch({ type: "MAP_INIT_CHANGED", payload: true });
        };
    }, [state.map, state.view])

    useEffect(() => {
        const asyncEffect = async () => {
            await loadModules(['esri/core/watchUtils']).then(function ([watchUtils]) {
                watchUtils.whenFalseOnce(state.view, 'updating', () => {
                    dispatch({ type: "MAP_RENDERED_CHANGED", payload: true });
                })
            });
        };
        state.initialized && asyncEffect();
    }, [state.initialized, state.view]);


    return (
        <MapContext.Provider
            value={{
                updateMap,
                updateView,
                map: state.map,
                view: state.view,
                rendered: state.rendered,
                subscriptions: state.subscriptions,
                initialized: state.initialized
            }}
        >
            {children}
        </MapContext.Provider>
    )
}

export { MapProvider, MapContext }