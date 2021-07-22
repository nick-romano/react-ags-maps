import React, { useReducer } from "react";
import { render, act } from '@testing-library/react';
import { Map } from "../";
import setMocks from './setMocks';

jest.mock('../hook', () => ({
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
        updateMap: jest.fn(),
        updateView: jest.fn()
    }))
}));

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

setMocks();

describe('smoke test Map render', () => {
    it('should render and call WebMap and MapView with default arguments', async () => {

        act(() => {render(<Map id={id} />)});

        const WebMap = await import("@arcgis/core/WebMap");
        const MapView = await import("@arcgis/core/views/MapView");

        expect(MapView.default).toBeCalledTimes(1);
        expect(WebMap.default).toBeCalledTimes(1);

        expect(WebMap.default).toBeCalledWith(defaultWebMapConstructorArgs);
        expect(MapView.default).toBeCalledWith(defaultMapViewConstructorArgs);
    });
});