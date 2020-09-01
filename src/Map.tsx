import React from 'react';
import { MapProvider } from './context';
import MapInstance from './MapInstance';

export interface MapProps {
    id: string,
    webMapId?: string | null,
    style?: object | null,
    centerX?: number | null,
    centerY?: number | null,
    zoom?: number | null,
    portal?: string,
    theme?: |"dark"|"light",
    children?: React.ReactNode | null
}

const Map = ({
    id,
    webMapId=null,
    style,
    centerX,
    centerY,
    zoom,
    children,
    portal
}: MapProps) => (
    <MapProvider><MapInstance id={id} webMapId={webMapId} style={style} centerX={centerX} centerY={centerY} zoom={zoom} portal={portal}>{children}</MapInstance></MapProvider>
)

export default Map;