import React, { useEffect } from 'react';
import useMapContext from '../hook';

const GraphicsLayer = ({ ...props }: __esri.GraphicsLayerProperties) => {
    const { map, view } = useMapContext();

    useEffect(() => {
        let mounted = true;
        let layer: __esri.GraphicsLayer;

        const asyncEffect = async () => {

            const _import = await import("@arcgis/core/layers/GraphicsLayer");

            const { default: GraphicsLayer } = _import;

            const layer = new GraphicsLayer(props);

            map?.layers.add(layer);
        }

        view && view.ready && asyncEffect();

        return () => {
            mounted = false;
            map?.layers.remove(layer);
            layer && layer.destroy();
        }
    }, [map, view]);

    return null;

};

export default GraphicsLayer;
