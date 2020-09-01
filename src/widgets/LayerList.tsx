import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
import type { IWidgetParams } from './BasemapGallery';
import type { default as LL } from 'esri/widgets/LayerList';
import type { default as E } from 'esri/widgets/Expand';
const { loadModules } = require('esri-loader');

const LayerList = ({ expander = false, position = "top-right" }: IWidgetParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted: boolean = true;
    let layerList: LL;
    let layerListExpand: E;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/LayerList"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [LayerList, Expand] = await loadModules(reqModules);

      layerList = new LayerList({
        view
      });

      if(expander) {
        layerListExpand = new Expand({
          expandIconClass: "esri-icon-layers",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
          view,
          content: layerList
        });
        mounted && view?.ui.add(layerListExpand, position);
      } else {
        mounted && view?.ui.add(layerList, position);
      }
    }

    view?.ready && asyncEffect();

    return () => {
      mounted = false;
      layerList?.destroy();
      layerListExpand?.destroy();
    }
  }, [view, expander, position]);

  return (<></>);

};


export default LayerList;