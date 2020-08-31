import React, { useEffect } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './hook' or its corresponding t... Remove this comment to see the full error message
import { useMapContext } from './hook';
const { loadModules } = require('esri-loader');

const PointImageLayer = ({
    image,
    center,
    spatialReference
}: any) => {

    const { map, initialized } = useMapContext();

    useEffect(() => {
        let gl: any;
        const asyncEffects = () => {
            loadModules([
                "esri/layers/GraphicsLayer",
                "esri/geometry/Point",
                "esri/Graphic",
                "esri/symbols/PictureMarkerSymbol"
            ]).then(([
                // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'GraphicsLayer' implicitly has an ... Remove this comment to see the full error message
                GraphicsLayer,
                // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'Point' implicitly has an 'any' ty... Remove this comment to see the full error message
                Point,
                // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'Graphic' implicitly has an 'any' ... Remove this comment to see the full error message
                Graphic,
                // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'PictureMarkerSymbol' implicitly h... Remove this comment to see the full error message
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
                map.allLayers.on("change", function(event: any) {
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