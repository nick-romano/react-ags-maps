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
    children?: React.ReactNode | null,
    viewProps?: __esri.ViewProperties,
    mapProps?: __esri.MapProperties
}

const Map = ({
    id,
    webMapId=null,
    style,
    centerX,
    centerY,
    zoom,
    children,
    portal,
    theme="dark",
    ...optionalProps
}: MapProps) => (
    <MapProvider><MapInstance id={id} webMapId={webMapId} style={style} centerX={centerX} centerY={centerY} zoom={zoom} portal={portal} {...optionalProps} theme={theme}>{children}</MapInstance></MapProvider>
)

export default Map;