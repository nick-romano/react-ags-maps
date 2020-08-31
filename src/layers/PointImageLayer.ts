import React, { useEffect } from 'react';
import { useMapContext } from './hook';
const { loadModules } = require('esri-loader');

const PointImageLayer = ({ image, center, spatialReference }) => {

    const { map, initialized } = useMapContext();

    useEffect(() => {
        let gl;
        const asyncEffects = () => {
            loadModules([
                "esri/layers/GraphicsLayer",
                "esri/geometry/Point",
                "esri/Graphic",
                "esri/symbols/PictureMarkerSymbol"
            ]).then(([
                GraphicsLayer,
                Point,
                Graphic,
                PictureMarkerSymbol
            ]) => {
                const loc = new Graphic({
                    geometry: new Point({
                        x: center[0],
                        y: center[1],
                        spatialReference: {
                            wkid: spatialReference
                        }
                    }),
                    symbol: new PictureMarkerSymbol({
                        url: image,
                        width: "64px",
                        height: "64px"
                    })
                })
                gl = new GraphicsLayer({
                    graphics: [loc]
                });

                map.layers.add(gl, 0)
                map.allLayers.on("change", function(event) {
                    map.reorder(gl, 1000);
                });
            });
        };

        map && asyncEffects();

        return () => map && map.layers.remove(gl);

    }, [map, center, spatialReference]);

    return <></>
};

export default PointImageLayer;