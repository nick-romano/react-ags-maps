import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
import type { IWidgetParams } from '../common/types';
const { loadModules } = require('esri-loader');

const BaseMapGalleryWidget = ({ expander = false, position = "top-right" }: IWidgetParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let baseMapGallery: __esri.BasemapGallery;
    let expand: __esri.Expand;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/BasemapGallery"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [BaseMapGallery, Expand] = await loadModules(reqModules);

      baseMapGallery = new BaseMapGallery({
        view
      });

      if (expander) {
        expand = new Expand({
          expandIconClass: "esri-icon-basemap",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          expandTooltip: "Expand Basemap Selector", // optional, defaults to "Expand" for English locale
          view,
          content: baseMapGallery
        });
        mounted && view?.ui.add(expand, position);
      } else {
        mounted && view?.ui.add(baseMapGallery, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      baseMapGallery && baseMapGallery.destroy();
      expand && expand.destroy();
    }
  }, [view, expander, position]);

  return (<></>);

};

export default BaseMapGalleryWidget;