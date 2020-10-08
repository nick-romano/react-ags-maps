import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');
import { IWidgetParams } from '../common/types';

const Home = ({expander=false, position="top-right"}: IWidgetParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let home: __esri.Home;
    let expandWidget : __esri.Expand;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/Home"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [Home, Expand] : [__esri.HomeConstructor, __esri.ExpandConstructor] = await loadModules(reqModules);

      home = new Home({
        view
      });

      if(expander) {
        const expandWidget = new Expand({
          expandIconClass: "esri-icon-home",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          // expandTooltip: "Expand baseMapGallery", // optional, defaults to "Expand" for English locale
          view,
          content: home
        });
        mounted && view?.ui.add(expandWidget, position);
      } else {
        mounted && view?.ui.add(home, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      home && home.destroy();
      expandWidget && expandWidget.destroy();
    }
  }, [view, expander, position]);

  return null;
};

export default Home;