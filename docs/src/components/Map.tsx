import { Map } from 'react-ags-maps';

import React from 'react';

export type _MapProps = __esri.MapProperties;

export interface MapProps {
    id: string;
    webMapId?: string | null;
    style?: object | null;
    centerX?: number | null;
    centerY?: number | null;
    zoom?: number | null;
    portal?: string;
    theme?: "dark" | "light";
    children?: React.ReactNode | null;
    viewProps?: __esri.ViewProperties;
    mapProps?: _MapProps;
}

const Mapp = (props: MapProps) => <Map {...props} />

export default Mapp;
