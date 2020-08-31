import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');

const Legend = ({ expander = false, position = "top-right" }) => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'view' does not exist on type 'unknown'.
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let legend: any;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/Legend"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [Legend, Expand] = await loadModules(reqModules);

      legend = new Legend({
        view
      });

      if(expander) {
        const legendExpand = new Expand({
          expandIconClass: "esri-icon-layer-list",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          view,
          content: legend
        });
        mounted && view.ui.add(legendExpand, position);
      } else {
        mounted && view.ui.add(legend, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      legend && legend.destroy();
    }
  }, [view, expander, position]);

  return (<></>);

};


export default Legend;