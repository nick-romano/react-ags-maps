import React from "react";
import { render } from '@testing-library/react';
import MapInstance from "../MapInstance";
import setMocks from './setMocks';

setMocks();


const id = 'myId';

const defaultWebMapConstructorArgs = {
    basemap: "gray-vector"
};

const defaultMapViewConstructorArgs = {
    "center": [10.546874999, 35.31736],
    "container": "myId",
    "map": expect.any(Object),
    "spatialReference": {
        "wkid": 102100
    },
    "zoom": 2
};


describe('testing Map Instance Props', () => {
    it('should render and call WebMap and MapView with default arguments', async () => {

        await render(<MapInstance id={id} />);

        const WebMap = await import("@arcgis/core/WebMap");
        const MapView = await import("@arcgis/core/views/MapView");
        expect(MapView.default).toBeCalledTimes(1);
        expect(WebMap.default).toBeCalledTimes(1);

        expect(WebMap.default).toBeCalledWith(defaultWebMapConstructorArgs);
        expect(MapView.default).toBeCalledWith(defaultMapViewConstructorArgs);
    });

    it('should handle a webMapId prop and add it to the WebMap constructor args', async () => {
        const webMapId = "ea4411";

        await render(<MapInstance id={id} webMapId={webMapId} />);

        const WebMap = await import("@arcgis/core/WebMap");
        const MapView = await import("@arcgis/core/views/MapView");
        expect(MapView.default).toBeCalledTimes(1);
        expect(WebMap.default).toBeCalledTimes(1);

        expect(WebMap.default).toBeCalledWith({ portalItem: { id: webMapId} });
        expect(MapView.default).toBeCalledWith({
            container: "myId",
            map: expect.objectContaining({ portalItem: {id: webMapId}, set: expect.any(Function) }),
            "spatialReference": {
                "wkid": 102100
            }
        });
    });

    it('should handle centerX and centerY prop and alter mapView constructor args', async () => {
        const [centerX, centerY] = [1, 2]
        await render(<MapInstance id={id} centerX={centerX} centerY={centerY} />);

        const MapView = await import("@arcgis/core/views/MapView");

        expect(MapView.default).toBeCalledTimes(1);

        expect(MapView.default).toBeCalledWith({ ...defaultMapViewConstructorArgs, center: [centerX, centerY] });
    });

    it('should handle zoom prop and alter mapView constructor args', async () => {
        const zoom = 12;

        await render(<MapInstance id={id} zoom={zoom} />);

        const MapView = await import("@arcgis/core/views/MapView");

        expect(MapView.default).toBeCalledTimes(1);

        expect(MapView.default).toBeCalledWith({ ...defaultMapViewConstructorArgs, zoom });
    });

    it('should handle theme prop and change basemaps on WebMap constructor', async () => {
        const theme = 'dark'

        await render(<MapInstance id={id} theme={theme} />);

        const WebMap = await import("@arcgis/core/WebMap");
        expect(WebMap.default).toBeCalledTimes(1);

        expect(WebMap.default).toBeCalledWith({ basemap: 'dark-gray-vector' });
    });

    it('should handle theme prop and change css load', async () => {
        const theme = 'dark'

        await render(<MapInstance id={id} theme={theme} />);

        const { loadCss } = require('esri-loader');

        expect(loadCss).toBeCalledWith(expect.stringContaining(theme));
    })
});

