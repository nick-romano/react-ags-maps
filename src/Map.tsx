import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './context' was resolved to 'C:/Users/Nicho... Remove this comment to see the full error message
import { MapProvider } from './context';
// @ts-expect-error ts-migrate(6142) FIXME: Module './MapInstance' was resolved to 'C:/Users/N... Remove this comment to see the full error message
import MapInstance from './MapInstance';

const Map = ({
    id,
    webMapId=null,
    style,
    centerX,
    centerY,
    zoom,
    children,
    portal
}: any) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MapProvider><MapInstance id={id} webMapId={webMapId} style={style} centerX={centerX} centerY={centerY} zoom={zoom} portal={portal}>{children}</MapInstance></MapProvider>
)

export default Map;