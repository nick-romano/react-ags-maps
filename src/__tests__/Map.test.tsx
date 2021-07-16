import React from "react";
import { render } from '@testing-library/react';
import Map from "../Map";


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
}


beforeEach(() => {
    jest.clearAllMocks();
    jest.mock("@arcgis/core/WebMap", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation((args: __esri.MapViewConstructor) => ({ set: jest.fn(), ...args }))
    }));

    jest.mock("@arcgis/core/views/MapView", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation((args: __esri.MapViewConstructor) => ({ args }))
    }));

    jest.mock('esri-loader', () => ({
        __esModule: true,
        loadCss: jest.fn()
    }))
});

describe('smoke test Map render', () => {
    it('should render and call WebMap and MapView with default arguments', async () => {

        await render(<Map id={id} />);

        const WebMap = await import("@arcgis/core/WebMap");
        const MapView = await import("@arcgis/core/views/MapView");

        expect(MapView.default).toBeCalledTimes(1);
        expect(WebMap.default).toBeCalledTimes(1);

        expect(WebMap.default).toBeCalledWith(defaultWebMapConstructorArgs);
        expect(MapView.default).toBeCalledWith(defaultMapViewConstructorArgs);
    });
});