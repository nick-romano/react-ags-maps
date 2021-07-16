import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');
import { IWidgetParams } from '../common/types';

export interface IDirectionsWidgetParams extends IWidgetParams {
  routeServiceUrl?: string | undefined;
  viewModel?: __esri.DirectionsViewModelProperties
}

const Directions = ({ expander = false, position = "top-right", expandIconClass = "esri-icon-directions", ...props }: IDirectionsWidgetParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let directions: __esri.Directions;
    let expandWidget : __esri.Expand;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/Directions", "esri/widgets/Directions/DirectionsViewModel"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [Directions, Expand] : [__esri.DirectionsConstructor, __esri.ExpandConstructor] = await loadModules(reqModules);

      if(props.viewModel && view) {
        props.viewModel.view = view;
      }

      directions = new Directions({
        view,
        ...props
      });

      // if(props && props.routeServiceUrl) directions.routeServiceUrl = props.routeServiceUrl;
      // debugger;

      if(expander) {
        const expandWidget = new Expand({
          expandIconClass,  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          // expandTooltip: "Expand baseMapGallery", // optional, defaults to "Expand" for English locale
          view,
          content: directions
        });
        mounted && view?.ui.add(expandWidget, position);
      } else {
        mounted && view?.ui.add(directions, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      directions && directions.destroy();
      expandWidget && expandWidget.destroy();
    }
  }, [view, expander, position]);

  return null;

};

export default Directions;
