import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
import { IWidgetParams } from '../common/types';
const { loadModules } = require('esri-loader');

const Legend = ({ expander = false, position = "top-right" }: IWidgetParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let legend: __esri.Legend;
    let legendExpand: __esri.Expand;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/Legend"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [Legend, Expand]: [__esri.LegendConstructor, __esri.ExpandConstructor | null] = await loadModules(reqModules);

      legend = new Legend({
        view: view
      });

      if(expander) {
        legendExpand = new Expand!({
          expandIconClass: "esri-icon-layer-list",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          view: view,
          content: legend
        });
        mounted && view?.ui.add(legendExpand, position);
      } else {
        mounted && view?.ui.add(legend, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      legend?.destroy();
      legendExpand?.destroy();
    }
  }, [view, expander, position]);

  return (<></>);

};


export default Legend;