import { views } from 'esri/views/View';
import React, { useEffect } from 'react';
import useMapContext from '../hook';
import { CustomLayerView2D } from '../utils/AnimatedLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

export interface IAnimatedPointLayer {
    x: number,
    y: number
}


class AnimatedLayer extends GraphicsLayer {

    createLayerView(view: any, options?: __esri.LayerCreateLayerViewOptions | undefined): Promise<__esri.LayerView> {
        // We only support MapView, so we only need to return a
        // custom layer view for the `2d` case.
        const j: Promise<__esri.LayerView> = new Promise(res => {
            res(new CustomLayerView2D({
                view: view,
                layer: this
            }));
        });
        return j;
    }
};


const AnimatedEventLayer = ({ x, y }: IAnimatedPointLayer) => {
    const { map, view } = useMapContext();

    useEffect(() => {

        const asyncEffect = async () => {

            const eventLayer = new AnimatedLayer({
                graphics: [
                    {
                        // @ts-ignore
                        type: "point",
                        longitude: -71.2643,
                        latitude: 42.0909
                    }
                ]
            });
            // @ts-ignore
            map.layers.add(eventLayer, 1000);
            // @ts-ignore
            map.allLayers.on("change", function (event) {
                // @ts-ignore
                map.reorder(eventLayer, 1000);
            });
        };

        map && view &&view.ready && asyncEffect();

        // @ts-ignore
        return () => { map && map.layers.remove(eventLayer) && console.log('removing event layer') }
    }, [map, view, x, y])

    return null;
};

export default AnimatedEventLayer;