import React, { useCallback, useEffect } from 'react';
import { useMapContext } from './hook';
const { loadModules } = require('esri-loader');
import { MapProps } from './Map';
// this will lazy load the ArcGIS API
// and then use Dojo's loader to require the map class

const MapInstance = ({
    id,
    style,
    children,
    webMapId = null,
    centerX = 10.546874999,
    centerY = 35.31736,
    zoom = 2,
    theme = "light",
    ...optionalProps
}: MapProps) => {
    
    const { updateMap, updateView } = useMapContext();

    useEffect(() => {
        if (typeof (document) !== "undefined") {
            const { loadCss } = require('esri-loader');
            const g = require('esri-loader');
            theme && (theme === "light" || theme === "dark") && loadCss(`https://js.arcgis.com/4.20/esri/themes/${theme.toLowerCase()}/main.css`);
        }
    }, [theme]);

    const loadMap = useCallback(async () => {

        let _view: __esri.MapView, _map: __esri.WebMap;

        const loadMap = async ([WebMap, MapView]: [__esri.WebMapConstructor, __esri.MapViewConstructor]) => {
            try {
                // then we load a web map from an id
                if (webMapId) {
                    _map = new WebMap({
                        // basemap: "dark-gray-vector",
                        portalItem: {
                            id: webMapId
                        }
                    });

                    _map.set({...optionalProps.mapProps});
                } else {
                    _map = new WebMap({
                        basemap: theme === "dark" ? "dark-gray-vector" : "gray-vector",
                        ...optionalProps.mapProps
                    });
                };

                const viewProps: __esri.MapViewProperties = {
                    map: _map,
                    container: id,
                    spatialReference: {
                        wkid: 102100
                    },
                    ...optionalProps.viewProps
                }

                if (centerX && centerY && !webMapId && !viewProps.center) {
                    viewProps.center = [centerX, centerY]
                };

                if (zoom && !webMapId && !viewProps.zoom) {
                    viewProps.zoom = zoom;
                }

                // and we show that map in a container w/ id #viewDiv
                _view = new MapView(viewProps);

                // Remove the default widgets
                _view.ui.components = [];
                // Adds widget below other elements in the top left corner of the view
                await _map.when();
                await _view.when();

                if (webMapId) {
                    _view.extent = _map.portalItem.extent
                }

                return [_map, _view]
            } catch (e) {
                return [e, e]
            }
        };
        
        const imports: [
            Promise<typeof import("@arcgis/core/WebMap")>, 
            Promise<typeof import("@arcgis/core/views/MapView")>
        ] = [import('@arcgis/core/WebMap'), import('@arcgis/core/views/MapView')];

        const [WebMap, MapView] = await Promise.all(imports);

        return await loadMap([WebMap.default, MapView.default]);

    }, [centerX, centerY, id, webMapId, zoom]);

    useEffect(() => {
        let map: any, view: any;
        const asyncEffects = async () => {
            const [map, view] = await loadMap();
            view && updateView(view);
            map && updateMap(map);
        };
        !map && asyncEffects();
        return () => {
            // console.log('map destroyed');
            map && map.destroy();
            view && view.destroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<div id={id} style={{ width: "100%", height: "100%", ...style }}> {children} </div >)
};

export default MapInstance;