import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
import type { default as BmG } from 'esri/widgets/BasemapGallery';
const { loadModules } = require('esri-loader');

export interface IWidgetParams {
  expander?: boolean,
  position?:
      | "bottom-leading"
      | "bottom-left"
      | "bottom-right"
      | "bottom-trailing"
      | "top-leading"
      | "top-left"
      | "top-right"
      | "top-trailing"
      | "manual";
}

const BaseMapGalleryWidget = ({expander=false, position="top-right"}: IWidgetParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let baseMapGallery: BmG;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/BasemapGallery"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [BaseMapGallery, Expand] = await loadModules(reqModules);

      baseMapGallery = new BaseMapGallery({
        view
      });

      if(expander) {
        const baseMapGalleryExpand = new Expand({
          expandIconClass: "esri-icon-basemap",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          // expandTooltip: "Expand baseMapGallery", // optional, defaults to "Expand" for English locale
          view,
          content: baseMapGallery
        });
        mounted && view?.ui.add(baseMapGalleryExpand, position);
      } else {
        mounted && view?.ui.add(baseMapGallery, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      baseMapGallery && baseMapGallery.destroy();
    }
  }, [view, expander, position]);

  return (<></>);

};

export default BaseMapGalleryWidget;