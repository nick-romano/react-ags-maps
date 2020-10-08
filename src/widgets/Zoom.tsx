import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
import { IWidgetParams } from '../common/types';
const { loadModules } = require('esri-loader');

const Zoom = ({ position = "top-right" } : IWidgetParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let zoom: __esri.Zoom;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/Zoom"];

      const [Zoom] : [__esri.ZoomConstructor] = await loadModules(reqModules);

      zoom = new Zoom({
        view
      });
      
      mounted && view?.ui.add(zoom, position);
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      zoom && zoom.destroy();
    }
  }, [view, position]);

  return (<></>);

};


export default Zoom;