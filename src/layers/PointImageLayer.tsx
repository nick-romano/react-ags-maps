import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');

export interface IPointImageLayerProps {
    image: any,
    center: number[],
    spatialReference: number
}

const PointImageLayer = ({
    image,
    center,
    spatialReference
}: IPointImageLayerProps) => {

    const { map } = useMapContext();

    useEffect(() => {
        let gl: __esri.GraphicsLayer;
        const asyncEffects = async () => {

            const [GraphicsLayer, Point, Graphic, PictureMarkerSymbol]: [__esri.GraphicsLayerConstructor, __esri.PointConstructor, __esri.GraphicConstructor, __esri.PictureMarkerSymbolConstructor] = await loadModules([
                "esri/layers/GraphicsLayer",
                "esri/geometry/Point",
                "esri/Graphic",
                "esri/symbols/PictureMarkerSymbol"
            ])

            const loc: __esri.Graphic = new Graphic({
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
            });
            
            gl = new GraphicsLayer({
                graphics: [loc]
            });

            map?.layers.add(gl, 0)
            map?.allLayers.on("change", function (event: any) {
                map?.reorder(gl, 1000);
            });
        };

        map && asyncEffects();

        return () => { map?.layers.remove(gl) };

    }, [map, center, spatialReference]);

    return <></>
};

export default PointImageLayer;