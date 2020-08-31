import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');

const BaseMapGallery = ({ expander = false, position = "top-right" }) => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'view' does not exist on type 'unknown'.
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let baseMapGallery: any;

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
        mounted && view.ui.add(baseMapGalleryExpand, position);
      } else {
        mounted && view.ui.add(baseMapGallery, position);
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


export default BaseMapGallery;