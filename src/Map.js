import React from 'react';
import { MapProvider } from './context';
import MapInstance from './MapInstance';

const Map = ({id, webMapId=null, style, centerX, centerY, zoom, children, portal}) => (
    <MapProvider><MapInstance id={id} webMapId={webMapId} style={style} centerX={centerX} centerY={centerY} zoom={zoom} portal={portal}>{children}</MapInstance></MapProvider>
)

export default Map;