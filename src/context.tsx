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


const MapProvider = ({
    children
}: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateMap = (map: any) => dispatch({ type: "MAP_CHANGED", payload: map });
    const updateView = (view: any) => dispatch({ type: "VIEW_CHANGED", payload: view });

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


    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MapContext.Provider
            value={{
                // @ts-expect-error ts-migrate(2322) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
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