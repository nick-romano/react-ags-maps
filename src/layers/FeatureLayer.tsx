import React, { useEffect } from 'react';
import useMapContext from '../hook';
const { loadModules } = require('esri-loader');

const FeatureLayer = ({ ...props } : __esri.FeatureLayerProperties) => {
  const { map, view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let layer: __esri.FeatureLayer;

    const asyncEffect = async () => {
      const reqModules = ["esri/layers/FeatureLayer"];

      const [ FeatureLayer ] : [__esri.FeatureLayerConstructor] = await loadModules(reqModules);

      const layer = new FeatureLayer(props);

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

export default FeatureLayer;
