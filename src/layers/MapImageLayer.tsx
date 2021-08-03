import React, { useEffect } from 'react';
import useMapContext from '../hook';

const MapImageLayer = ({ ...props }: __esri.MapImageLayerProperties) => {
    const { map, view } = useMapContext();

    useEffect(() => {
        let mounted = true;
        let layer: __esri.MapImageLayer;

        const asyncEffect = async () => {

            const _import = await import("@arcgis/core/layers/MapImageLayer");

            const { default: MapImageLayer } = _import;

            const layer = new MapImageLayer(props);

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

export default MapImageLayer;
