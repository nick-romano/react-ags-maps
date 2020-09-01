/// <reference types="arcgis-js-api" />
import React from 'react';
import type MapView from "esri/views/MapView";
import type WebMap from "esri/WebMap";
export interface MapState {
    map: WebMap | null;
    view: MapView | null;
    subscriptions: Object;
    initialized: boolean;
    rendered: boolean;
}
declare const MapContext: React.Context<MapState>;
export interface MapContextProvider extends MapState {
    updateMap: Function;
    updateView: Function;
}
export interface ProviderProps {
    children?: React.ReactNode | null;
}
declare const MapProvider: ({ children }: ProviderProps) => JSX.Element;
export { MapProvider, MapContext };
