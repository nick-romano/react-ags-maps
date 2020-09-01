import React, { useReducer, useEffect } from 'react';
import type MapView from "esri/views/MapView";
import type WebMap from "esri/WebMap";
const { loadModules } = require('esri-loader');



const reducer = (state: any, action: any) => {
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

export interface MapState {
    map: WebMap | null,
    view: MapView | null,
    subscriptions: Object,
    initialized: boolean,
    rendered: boolean
}

const initialState: MapState = {
    map: null,
    view: null,
    subscriptions: {},
    initialized: false,
    rendered: false
}

const MapContext = React.createContext(initialState);

export interface MapContextProvider extends MapState {
    updateMap: Function,
    updateView: Function
}

export interface ProviderProps {
    children?: React.ReactNode | null
}

const MapProvider = ({
    children
}: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateMap = (map: WebMap) => dispatch({ type: "MAP_CHANGED", payload: map });
    const updateView = (view: MapView) => dispatch({ type: "VIEW_CHANGED", payload: view });

    useEffect(() => {
        if (state.map && state.view) {
            dispatch({ type: "MAP_INIT_CHANGED", payload: true });
        };
    }, [state.map, state.view])

    useEffect(() => {
        const asyncEffect = async () => {
            const [watchUtils] = await loadModules(['esri/core/watchUtils']);
            watchUtils.whenFalseOnce(state.view, 'updating', () => {
                dispatch({ type: "MAP_RENDERED_CHANGED", payload: true });
            })
        };
        state.initialized && asyncEffect();
    }, [state.initialized, state.view]);

    const value: MapContextProvider = {
        updateMap,
        updateView,
        map: state.map,
        view: state.view,
        rendered: state.rendered,
        subscriptions: state.subscriptions,
        initialized: state.initialized
    }

    return (
        <MapContext.Provider
            value={value}
        >
            {children}
        </MapContext.Provider>
    )
}

export { MapProvider, MapContext }