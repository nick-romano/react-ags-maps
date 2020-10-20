import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');
import { IWidgetParams } from '../common/types';

interface IBasemapLayerListParams extends IWidgetParams {
  editingEnabled?: boolean,
  viewModel?: __esri.BasemapLayerListViewModel
}

const BasemapLayerList = ({expander=false, position="top-right", expandIconClass="esri-icon-globe", ...props }: IBasemapLayerListParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let basemapLayerList: __esri.BasemapLayerList;
    let expandWidget : __esri.Expand;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/BasemapLayerList"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [BasemapLayerList, Expand] : [__esri.BasemapLayerListConstructor, __esri.ExpandConstructor] = await loadModules(reqModules);

      if(props.viewModel && view) {
        props.viewModel.view = view;
      }

      basemapLayerList = new BasemapLayerList({
        view,
        ...props
      });

      if(expander) {
        const expandWidget = new Expand({
          expandIconClass: expandIconClass,  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          // expandTooltip: "Expand baseMapGallery", // optional, defaults to "Expand" for English locale
          view,
          content: basemapLayerList
        });
        mounted && view?.ui.add(expandWidget, position);
      } else {
        mounted && view?.ui.add(basemapLayerList, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      basemapLayerList && basemapLayerList.destroy();
      expandWidget && expandWidget.destroy();
    }
  }, [view, expander, position]);

  return null;

};

export default BasemapLayerList;