import React, { useEffect } from 'react';
import useMapContext from '../hook';

const GeoJSONLayer = ({ ...props }: __esri.GeoJSONLayerProperties) => {
    const { map, view } = useMapContext();

    useEffect(() => {
        let mounted = true;
        let layer: __esri.GeoJSONLayer;

        const asyncEffect = async () => {

            const _import = await import("@arcgis/core/layers/GeoJSONLayer");

            const { default: GeoJSONLayer } = _import;

            const layer = new GeoJSONLayer(props);

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

export default GeoJSONLayer;
