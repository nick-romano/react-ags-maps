import React from 'react';
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
}
declare const Map: ({ id, webMapId, style, centerX, centerY, zoom, children, portal }: MapProps) => JSX.Element;
export default Map;
