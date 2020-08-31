import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');

const LayerList = ({ expander = false, position = "top-right" }) => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'view' does not exist on type 'unknown'.
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let layerList: any;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/LayerList"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [LayerList, Expand] = await loadModules(reqModules);

      layerList = new LayerList({
        view
      });

      if(expander) {
        const layerListExpand = new Expand({
          expandIconClass: "esri-icon-layers",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
          view,
          content: layerList
        });
        mounted && view.ui.add(layerListExpand, position);
      } else {
        mounted && view.ui.add(layerList, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      layerList && layerList.destroy();
    }
  }, [view, expander, position]);

  return (<></>);

};


export default LayerList;